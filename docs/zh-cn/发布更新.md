> 更新逻辑已开源，使用文档 [eros-publish](https://github.com/bmfe/eros-publish)，下面我们说下增量发布的大概实现逻辑。

### 需要更新的资源

weex 的优势之一就是业务发布可以不走 App Store 的审核，能实现业务快速更新，快速落地，需要更新的资源大致分下面几类

 * native 代码部分
 * js 业务代码
 * 图片、iconfont 等静态资源

#### native 代码部分

苹果之前 对 native 热更新方案进行警告之后，这部分目前希望大家谨慎尝试。

#### js 业务代码

我们认为所有脱离了 native 部分的代码都是业务代码，weex-eros 设计的页面交互是多页面，并不适用 vue-router，配合封装的路由，基本上是一个页面对应一个 js 文件，就像是回到了多年前的多页面时代。但是这带来的原生的页面切换，交互体验好了很多，也一定程度的抹平了初始化渲染的性能问题。这部分代码的更新是一定牵涉业务的，这也是更新包的主要部分。

#### 图片、iconfont 等静态资源

图片部分：图片这块目前没有做打包本地，虽然会有加快一定的渲染速度，但随着业务的变化，这块会增加更新包的大小，有可能更新包里的图片都不会被用户使用，但是还是下载下来了，造成用户流量浪费也增加了更新包的大小，目前的方案是发送请求，图片资源客户端会缓存到本地，二次加载同一张图片就会变快。

iconfont：如果在样式解释的时候没有找到字体图标文件，字体图标就会找不到，并且 iconfont 请求完成之后不会更新当前视图，所以 iconfont 必须要做增量更新，大小对包的影响不大。所以放在增量包中。

### 更新包设计

经过上面的分析，我们的更新包包括两部分：js 业务代码和 iconfont。我们目前将这两部分的代码加上一个 md5.json，生成一个 .zip 压缩包。

md5.json 内容如下：

```js
{
    // 所有页面对应的 js 文件，用于做单个文件完整性校验
    "filesMd5": [{
        "android": "1.0.0",
        "iOS": "1.0.0",
        "page": "/pages/home/index.js",
        "md5": "c2125dfab756dc0e9cfe854a297a0512"
    }, {
        "android": "1.0.0",
        "iOS": "1.0.0",
        "page": "/iconfont/iconfont.ttf",
        "md5": "50ed903231bcdc851bfde9a0bf565e38"
    }],
    // 当前 zip 包依赖的最低的安卓版本号
    "android": "1.0.0",
    // 当前 zip 包依赖的最低的 iOS 版本号
    "iOS": "1.0.0",
    // 当前这个 appName，用于区分不同 APP 业务的 key
    "appName": "demo",
    // 当前这个 zip 包的版本号
    "jsVersion": "56a4569f271294a05e4ff0f567d332b4",
    // 生成当前 zip 包版本号的时间戳
    "timestamp": 1489983294137
}
```

filesMd5 中的每一项就是当前这个 zip 包文件中的文件信息，根据每个文件内容会生成一个 MD5 值，当前包的 MD5 值作为当前包的版本号，会根据这个 MD5 进行文件完整性的校验

客户端可以根据每一个文件来看下载下来的文件有没有缺失，如果有缺失，这里就需要看策略了，是直接去请求线上最新的这个 js 文件还是重新下载 zip

### **如何增量**

当出现第一个版本之后，我们就需要考虑每次升级的问题了，我们肯定不希望每次都去下载完整的 zip 包，浪费流量。也不可能实时 diff，这样更新肯定会慢，所以我们想用空间换时间的方式。

每生成一次完整的资源包，需要和当前已有的资源包进行一次 diff，生成若干差分包。每次 APP 更新的时候只需要下载差分包就行了。如：

> * 新版本\(v3\) - 旧版本\(v1，v2\) = 全新的 v3 包、v3-v1 差分包、v3-v2 差分包
> * 然后，APP 根据自己的当前版本，比如 v2，下载对应的增量包 v3-v2。
> * 然后本地进行合并。 v2 完整包 + v3-v2 差分包，得到完整的 v3 新包。

### 增量包生成

zip 包的生成依赖的是 bsdiff，这个需要本地装一个 bsdiff

```js
// 命令行生成差分包命令：
bsdiff oldZip newZip diffZip
//命令行合并差分包命令：
bspatch oldZip diffZip newZip
```

生成的 diffZip 包命名可以有一些命名的算法，这样的命名在存储的时候就不需要存差分包和完整包的映射 了。

在生成差分包时需要指定所有完整的包目录，在 demo 中 config.js 有对应的配置，每次发布都会将完整的 zip 放在 打包机上，每次都会和留下的这些完整的包进行对比生成差分包。

至此，我们的打包工作就完成了

### 增量发布流程设计![](/assets/3dd2d0e046ea585f7ef5fd133170b9e8.jpg)

#### 服务器支持

增量包生成完成之后会生成一个 version.json 文件，并将文件内容上传至服务器，服务器存下版本，下次返回客户端是否需要更新的凭证。下面是 version.json 的具体内容，服务器存下多个版本之后就可以对客户端每次是否需要更新进行回复。

发布地址配置在 config.js 中有对应的配置，这里主要说明一下后端的逻辑。

```js
{
    // 当前 zip 包依赖最低安卓版本
    "android": "1.0.0",
    // 当前 zip 包依赖最低 iOS 版本
    "iOS": "1.0.0",
    当前这个 appName，用于区分不同 APP 业务的 key
    "appName": "demo",
    // 当前 zip 包的版本号
    "jsVersion": "cd34091af113f98c2cbf4d81131ccdde",
    // 生成版本号时的时间戳
    "timestamp": 1489997936509,
    // 对应的静态资源服务器的地址
    "jsPath": "https://xxx.xxx.com/app/"
}
```

### 检测更新场景

增量更新包管理，可以以 当前客户端包保本号+当前客户端版本能使用的最新压缩包版本号 进行 md5，这样的管理方式，后端和资源包能解耦关系，更好的维护版本包。

#### 客户端请求参数

```js
请求参数：

{
    // 当前客户端版本号
    "android[or iOS]": "1.0.0",
    // 当前 APP 业务的名称
    "appName": "demo",
    // 当前 zip 包的版本号
    "jsVersion": "cd34091af113f98c2cbf4d81131ccdde",
    // 是否需要差分包，如果是 false 则返回完整的 zip 包，完整 zip 包多用于特殊情况
    "isDiff": true
}
```

后端对更新逻辑的判断

```js
必传参数：appName、iOS/android
步骤1：
    查询库里当前的 appName 和 iOS/android 版本号相同的数据
        无结果：返回固定错误码，错误信息 未查询到更新版本信息
        有结果：继续下一步
步骤2：
    查询库中客户端传过来的 appName、iOS/android、jsVersion 的数据
        无结果：返回需要更新，isDiff = false，返回当前  jsPath：jsPath + jsVersion + '.zip'
        有结果：比对当前

    查询当前 appName 和 iOS/android 值相同的 (timestamp 最大的 jsVersion)

    判断 isDiff 的值
        false：判断客户端传的 jsVersion 和 (timestamp 最大的 jsVersion)
            相等：返回无需更新
            不相等：返回需要更新，isDiff = false，jsPath：jsPath + jsVersion + '.zip'
        true：判断客户端传的 jsVersion 和 (timestamp 最大的 jsVersion)
            相等：返回无需更新
            不相等：返回需要更新 isDiff = true，jsPath：jsPath + md5(客户端传的 jsVersion + (timestamp 最大的 jsVersion)) + '.zip'
```

#### 更新场景1

发布了新版本，需要更新，这也是最常见的更新场景。发送请求参数如下：

```js
{
    // 当前客户端版本号
    "android[or iOS]": "1.0.0",
    // 当前 APP 业务的名称
    "appName": "demo",
    // 当前 zip 包的版本号
    "jsVersion": "cd34091af113f98c2cbf4d81131ccdde",
    // 是否需要差分包，如果是 false 则返回完整的 zip 包，完整 zip 包多用于特殊情况
    "isDiff": true
}
```

接口返回场景1

当前 jsVersion 在数据库中不存在，这种情况下无法生成差分包，也有可能是包的信息被篡改了，此时返回需要更新，并返回完整的更新包地址，客户端不做差分合并

```js
{
    // 此次请求有没有问题
    "resCode": 0,
    // 此次请求描述
    "msg": "当前版本已是最新，不需要更新",
    // 回溯的数据
    "data": {
        // 表示这是一个完整的包
        "diff": false,
        // 完整包的地址
        "path": "https://xxx.xxx.com/app/cd34091af113f98c2cbf4d81131ccdde.zip"
    }
}
```

接口返回场景2

当前 jsVersion 在数据库中存在，当前客户端版本号下，jsVersion 已经是最新的，不需要更新

```js
{
    // 此次请求有没有问题
    "resCode": 1000,
    // 此次请求描述
    "msg": "当前版本已是最新，不需要更新",
    // 回溯的数据
    "data": {}
}
```

接口返回场景3

当前 jsVersion 在数据库中存在，当前客户端版本号下，jsVersion 还有更新的版本，获取差分包，进行合并再解压。

服务端查询当前库中最新的版本号，得到差分包的下载地址并返回。

```js
{
    // 此次请求有没有问题
    "resCode": 0,
    // 此次请求描述
    "msg": "当前版本已是最新，不需要更新",
    // 回溯的数据
    "data": {
        // 当前下载的 js 的 verison
        "jsVersion": "cd34091af113f98c2cbf4d81131ccdde",
        // 表示这是一个完整的包
        "diff": true,
        // 完整包的地址
        "path": "https://xxx.xxx.com/app/cd34091af113f98c2cbf4d81131ccdde.zip"
    }
}
```

接口返回场景4

当前 jsVersion 在数据库中存在，当前客户端版本号下，jsVersion 还有更新的版本，但是获取差分包失败，这个情况下客户端会重新发起一个请求，获取当前客户端版本号下完整的 zip 包

#### 更新场景2

本地不存在包，或者校验包的完整性发现 zip 包有问题时，直接请求最新的 zip 包。

```js
{
    // 当前客户端版本号
    "android[or iOS]": "1.0.0",
    // 当前 APP 业务的名称
    "appName": "demo",
    // 是否需要差分包，如果是 false 则返回完整的 zip 包，完整 zip 包多用于特殊情况
    "isDiff": false
}
```

接口返回场景1  
当前 jsVersion 在数据库中不存在，这种情况下无法生成差分包，也有可能是包的信息被篡改了，此时返回需要更新，并返回完整的更新包地址，客户端不做差分合并

```js
{
    // 此次请求有没有问题
    "resCode": 0,
    // 此次请求描述
    "msg": "当前版本已是最新，不需要更新",
    // 回溯的数据
    "data": {
        // 表示这是一个完整的包
        "diff": false,
        // 完整包的地址
        "path": "https://xxx.xxx.com/app/cd34091af113f98c2cbf4d81131ccdde.zip"
    }
}
```



