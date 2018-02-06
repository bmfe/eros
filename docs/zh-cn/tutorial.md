# 由来

我们需要先从 weex 说起 ，我们直接看原理图：
![weex原理](http://upload.ouliu.net/i/20171212234224psphf.jpeg)

weex 原理图中分为了 Server 和 Client 两部分。
#### Server
**weex file:** 就是我们的 .vue 文件（或官方的 .we 文件），和我们平时进行前端开发的一样。

**transformer:** 以 vue 开发为例，在浏览器中我们通常都会写 `.vue`  文件和 `es6` 等浏览器目前并不支持的语法，通过前端资源打包工具 `webpack` 等通过 `vue-loader`、`babel-loader`等最终转化成为 `es5` 代码，让浏览器识别，而在 weex 最终编译出来资源文件能在浏览器跑，自然也是这个道理。

而浏览器端运行的 `es5` 代码是无法直接运行在客户端的（如浏览器有 BOM，DOM，客户端是没有的），所以在通过 weex 来开发客户端有很多限制的。

在编译客户端静态资源文件的时候，是通过 `weex-loader` 来加载这些经过限制语法编写的 weex file，最终编译成为能让客户端读懂的 **JS 文件**，也就是 **JS Bundle**。

有兴趣的同学可以深入了解这部分内容。[深入Weex中的transformer实现原理](http://www.jianshu.com/p/109fdece22d2)

所以这块之所以叫 **server**，也就是这些静态资源文件可以在远端服务器打包生成，被客户端访问到并下载解析。

#### Client
引用 weex 官网上的话。
> Weex 的 iOS 和 Android 客户端中都会运行一个 JavaScript 引擎，来执行 JS bundle，同时向各端的渲染层发送规范化的指令，调度客户端的渲染和其它各种能力。我们在 iOS 下选择了 JavaScriptCore 内核，而在 Android 下选择了 UC 提供的 v8 内核。无论是从性能还是稳定性方面都提供了强有力的保障。

> 为了让整个移动应用的资源利用得更好，我们在客户端提供的 JavaScript 引擎是单例的，即所有 JS bundle 公用一个 JavaScript 内核实例，同时对每个 JS bundle 在运行时进行了上下文的隔离，使得每个 JS bundle 都能够高效安全的工作。我们还把 Vue 2.0 这样的 JS Framework 做了预置，开发者不必把 JS Framework 打包在每个 JS bundle 里，从而大大减少了 JS bundle 的体积，也就进一步保障了页面打开的速度。

**client** 对于前端来说肯定是越了解会更好，不了解也没关系，但 weex 有个功能是很重要的，那就是 weex 搭建起了一条 JS Bridge，通过客户端自定义 **module** 和 **component**，让前端与客户端有了交互能力。

而自定义 **module** 和 **component** 需要一定的客户端开发知识，让很多前端开发的同学，望而却步，又因为官方的环境搭建，脚手架打包等目前还存在一些问题，把很多想学习 weex 的同学拦在了外面，所以 eros 因应而生。

[weex 官方文档](http://weex.apache.org/cn/guide/)

# 支持性
* Android 4.1 (API 16)
* iOS 8.0+
* WebKit 534.30+

# 环境搭建
### 脚手架安装:
```
$ npm i eros-cli -g
```
如果你在中国地区，我们还是推荐您使用 cnpm 安装脚手架
```
$ cnpm i eros-cli -g 
```
如果安装过程中报错，是因为 eros-cli 依赖了 node-sass，解决的方式有很多，可以自行搜索解决一下。

### darwin 开发 iOS:

* Xcode
* CocoaPods
    *   升级 Ruby 环境：`$ sudo gem update --system`
    *   移除现有 Ruby 镜像：`$ gem sources --remove https://rubygems.org/`
    *   添加ruby-china镜像：`$ gem source -a https://gems.ruby-china.org/`
    *   安装 CocoaPods：`$ sudo gem install cocoapods`
    *   如果以上命令报错则执行：`$ sudo gem install -n /usr/local/bin cocoapods --pre`
    *   最后执行：`$ pod setup` 过程比较漫长，请耐心等待执行完成

### darwin/windows/linux 开发 Android:
* 下载并安装 [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)。
* 下载并安装 [Android Studio](https://developer.android.google.cn/studio/index.html)。

JDK 是 JAVA 开发包，AndroidStudio 是 Android开发IDE，这两项不再做过多介绍。

> 如果您使用虚拟机进行跨平台开发，也需要配置好对应平台的所需环境。

### 模拟器安装
* ios 开发中 xcode 已经自带了模拟器。
* android 开发者可以下载 `Genymotion`。

# 模板生成
1. 首先通过脚手架自动生成开发模板(我们不推荐用sudo来执行)。
```
$ eros init
```
按提示选择模板，填写 app/项目名称和版本后在当前路径下会生成对应模板，然后 `cd` 到项目中。
![eros-init](http://upload.ouliu.net/i/20171213130643p940k.gif)
2. 下载所需依赖
前端依赖：
```
$ npm install
```
eros sdk 依赖：
```
$ eros install
```
eros install 会让你选择下载依赖：
* ios: eros ios 开发所需依赖
* android: eros android 开发所需依赖

**每次 eros 解决了 bug 或者开发/更改了 module 和 component 时，只需要 eros install ，ios 更新前请关闭 xcode， android 会在编辑器 android studio 中弹出 `sync` 同步，点击即可。**

![安卓同步](http://upload.ouliu.net/i/201712121849520zq84.jpeg)

> `eros install` 是执行 iOS/Android 目录中的 scripts/install.platform.sh，所以 windows 系统下最好用 Git Bash 等工具，不然无法下载。

3. 安装完依赖之后:
* iOS: 会自动打开 `Xcode` ，然后选择一个模拟器，点击左上角的播放(运行)按钮，即可看到内置包中已经内置好的 eros demo.

* Android:首次生成项目开发者需要多几个步骤，之后每次 eros install 都会有同步提示:
1. 点击AndroidStudio上方的 **File---&gt;New---&gt;Import Project。**
![](https://img.benmu-health.com/gitbook/1505963461481.jpg)
2. 找到eros在你本地的地址，选择 **platforms/android/WeexFrameworkWrapper** ,点击**OK。**
![](https://img.benmu-health.com/gitbook/1505963624252.jpg)
3. 待项目构建完成，点击 AndroidStudio 上方工具栏的 **Run** ，即可运行项目。![](https://img.benmu-health.com/gitbook/1505963683163.jpg)

注意：
> 第一次打开 AndroidStuido 时，由于本地环境未配置好，AndroidStuido 会提示错误，按照 IDE 提示，大部分环境问题都可以解决。

于是 eros 的 demo 便能在模拟器中跑起来了。

![eros-demo](http://upload.ouliu.net/i/20180122162536pcw67.gif)

> eros 的 demo 很重要，建议在开发中，首先跟随 demo 编写几个页面，并保留其代码作为使用参考。

# 开发前
我们先来介绍 eros 开发中需要知道的点：

##### Server JS Bundle
本地开发的时候（运行脚手架 `eros dev` 指令），脚手架 `eros-cli` 会通过读取配置文件来在特定端口跑一个服务，让你在本地访问到项目中 dist 下通过 webpack 打包生成的 JS Bundle。

假如你配置的端口号是8889，在浏览器中输入`localhost: 8889/dist` 便可以看到打包生成的 JS Bundle。

而在不同调试载体通过 localhost 访问这些 JS Bundle 之前，**都需要确保在同一局域网内**，而在访问的时候，情况是不同的：

| 载体 | hosts 文件 | 是否需要手动修改网络代理 |
|------|------------|--------------------------|
| iOS 模拟器 | 共享电脑 hosts 文件 | 不需要 |
| Android 模拟器 | 有| 需要 |
| iOS 真机 | 有 | 需要 |
| Android 真机 | 有 | 需要 |

iOS 模拟器比较特殊，是因为 iOS 模拟器和 Mac 共用一套网络设置。
> 由此也能看出来，如果开发者需要进行两个端的快速开发，直接用 iOS 模拟器开发即可，开发完成之后，在适配真机和 Android 端是最快的。

**所以直接修改网络代理，指向本机的 IP 地址即可访问到 JS Bundle**，而我们一般为了代理软件抓包时候看这更方便，会给个新的 host ：

```
127.0.0.1   app.weex-eros.com
```

设置完了之后，在不同载体的浏览器中都能访问 `http://app.weex-eros.com:8889/dist` 下的 JS Bundle 了。
##### Client JS Bundle

上面介绍了通过服务来访问 JS Bundle，那我们拔了真机拔了数据线，断了网，没了有 JS Bundle 来源，用户打开是一片空白怎么办？**答案就是 app 内置中 JS Bundle**，我们也叫这部分 JS Bundle 为`内置包`，这个过程叫`打内置包`。

##### Interceptor 拦截器
那么又有问题来了，我们如何告诉 app 是访问服务包还是内置包呢？答案是 `Interceptor` 开关。

![Interceptor](http://upload.ouliu.net/i/20171213115118q9mim.gif)

* Interceptor 选中的时候，我们会拦截请求，让 app 读取内置包;
* Interceptor 未选中的时候，不拦截请求，让 app 去配置的服务上去取服务包;

第一次跑起来 demo 的开发者可以看到，拦截器是开启的，访问的是内置包，app 上线，交付测试的时候，都是走内置包。

##### 项目结构
下面列出了对于开发而言关心的项目结构：
```
.
├── config
│   ├── eros.dev.js                     // 脚手架配置文件
│   └── eros.native.js                  // 客户端配置文件
├── platforms                           
│   ├── android                         // Android 平台主项目和依赖
│   └── ios                             // iOS 平台主项目和依赖
└── src
    ├── assets                          // 本地静态资源存放，一般可存放图片
    ├── iconfont                        // 本地 iconfont 存放
    ├── js
    │   ├── components                  // 组件，存放了经过修改的 weex-ui 和 bui
    │   ├── config                      // 项目开发配置
    │   │   ├── apis.js                 // 接口别名配置
    │   │   ├── index.js
    │   │   ├── pages.js                // 路由别名配置
    │   │   └── push.js                 // 个推事件处理
    │   ├── css                         // 可抽离公共 css 逻辑
    │   ├── mediator                    // 中介者
    │   ├── pages                       // 页面开发，所有页面都放置在这里
    │   └── widget                      // widget 源码
    └── mock
        └── test                        // mock 服务，在 eros.dev.js 可进行配置
```

有几个需要注意的地方 
* **eros.dev.js** 中如果改变，**这是如果你在跑着 `eros dev` 服务，需要断开，让脚手架重新读取配置文件。**（开发中会经常添加新的打包入口）
* **eros.native.js** 是**客户端读取的配置文件，目前是客户端在开启 app 的时候统一从内置包中读取**，所以当此文件变动的时候，需要重新打内置包 eros pack，重新运行下 app，即可生效。

# Hello Eros
我们来简单开发一个 Hello World：

1. 首先**关闭调试中的拦截器**，让 app 访问服务包，这时候刷新页面肯定是空白的，因为都没有服务。

2. 项目根目录下运行开发服务 **`eros dev`**，运行成功之后刷新出现内置的 demo 页面，这是其实你已经可以任意修改 pages/eros-demo 中代码，刷新后看效果了，有兴趣可以到处试一试。
> tips: 双击调试按钮即可刷新。

3. 在 pages 目录下新建一个 `Hello.vue` 文件。
![Hello.vue](http://upload.ouliu.net/i/20171213143653v844z.jpeg)
文件中写一些很简单的语法：
```js
<template>
    <div style="margin-top: 50px;">
        <text class="title">Hello，</text>
        <text class="title">developer</text>
        <bui-button class="btn-250" type="primary" value="show eros">show eros</bui-button>
    </div>
</template>
<script>
    import buiButton from 'Eros/bui/components/bui-button'
    export default {
        components: { buiButton }
    }
</script>
<style>
.title{
    font-size: 60;
}
.btn-250{
    width: 250;
}
</style>
```

4. 修改 **`eros.dev.js`** 中的 exports，如果不需要，可以把 eros-demo 中的路径都删掉，只填入新的文件入口 :
```js
"exports": [
    // appBoard 
    "js/config/index.js",
    // mediator
    "js/mediator/index.vue",
    // home
    "js/pages/Hello.vue"
],
```

这里注意上面两个是和 eros.native.js 中的 appBoard，mediator 一一对应的，如果这里两边修改没有对应上会导致报错，建议平时不用变动。

5. 告诉 app 我要重新改变首页，修改 **eros.native.js** 中的 page.homePage 路径：
```js
"page": {
    "homePage": "/pages/Hello.js",
}
```
6. **断开 `eros dev` 服务**，因为要告诉脚手架配置文件的变动。
7. **`eros pack` 打内置包**，因为要告诉 app 配置文件中的变动。
8. 重新运行（run）app。

这时首页就已经开发好了：
![首页](http://upload.ouliu.net/i/20171213151248dyqs1.jpeg)
下面我们修改做一个页面间的跳转，试一试 Widget:

9. 再在 `pages `目录下新建一个页面 **`Eros.vue`**
```js
<template>
    <div style="margin-top: 50px;">
        <text class="title">Hi!</text>
        <text class="title">Enjoy it!</text>
    </div>
</template>
<script>
    export default {
    }
</script>
<style>
.title{
    font-size: 60;
}
</style>
```

10. 修改 **`eros.dev.js`** 告诉脚手架添加页面了:
```js
"exports": [
    // appBoard 
    "js/config/index.js",
    // mediator
    "js/mediator/index.vue",
    // home
    "js/pages/Hello.vue",
    // eros
    "js/pages/Eros.vue"
],
```

11. 注册路由，修改 **`js/config/pages.js`**，清空 demo 中现有的配置:
```js
export default {
    'Eros': {
        title: 'Eros',
        url: '/pages/Eros.js',
    },
}
```
这里的 url 是填写 dist 目录中打包出来 JS Bundle 的相对路径（现在并没有这个 JS Bundle，需要重启开发服务读取配置才会有），注意因为是 JS Bundle 所以以 .js 为结尾。

12. 重启 eros dev，刷新一下，并无任何变化，这时候还无法跳转到新建的页面，因为只是配置了路由，并未触发跳转方法，我们需要修改下 

**`Hello.vue`**:
```js
<template>
    <div style="margin-top: 50px;">
        <text class="title">Hello，</text>
        <text class="title">developer</text>
        <bui-button class="btn-250" type="primary" value="show eros" @click="showEros">show eros</bui-button>
    </div>
</template>
<script>
    import buiButton from 'Eros/bui/components/bui-button'
    export default {
        components: { buiButton },
        methods: {
            // 这里给按钮添加 showEros 事件来跳转
            showEros() {
                this.$router.open({
                    name: 'Eros'
                })
            }
        }
    }
</script>
<style>
.title{
    font-size: 60;
}
.btn-250{
    width: 250;
}
</style>
```

13. 双击调试按钮刷新，跳转逻辑已经完成了！
![router](http://upload.ouliu.net/i/20171213154813lms38.gif)

至此 Hello world 已经编写完成，可以便根据文档来编写你的业务了。

* [eros 模板地址](https://github.com/bmfe/eros-template)
* [eros 文档地址](https://github.com/bmfe/eros-template/wiki/eros)

eros 还有 demo 是根据网易严选 demo 进行改编的（感谢 [zwwill](https://github.com/zwwill) 的开源和指导），开发者也可以进行参考：

* [eros 网易严选 demo](https://github.com/bmfe/eros-yanxuan-demo-v2)
* [weex-book](https://github.com/wennjie/weex-book)

最后开发者需要自行修改原生项目中的一些信息，就可以发 app 正式版本，对外使用了，发布的方法网上有很多介绍，就不过多赘述。

# 增量发布
具体更新逻辑可以[点击这里](https://github.com/bmfe/eros-template/wiki/%E5%8F%91%E5%B8%83%E6%9B%B4%E6%96%B0)，这里写下简单的说明。

app 发布有两种情况：
* 当 platforms ios/android 目录下的代码发生变动（包括 eros install 平台的依赖）的时候，我们是需要重新发布到市场上重新走审核逻辑的，用户需要重新去市场上面下载。
* 而当项目中的业务逻辑发生变动，如新增页面，修改当前页面逻辑等，最终导致 JS Bundle 发生变化，便可以使用增量发布，每次 app 启动会自动检测更新，下载 JS Bundle 中发生变动的部分，用户重启即生效。

同时 eros-cli 也支持生成全量包和生成增量包：

生成全量包：
```
$ eros build
```
生成增量包：
```
$ eros build -d
```

目前增量发布的搭建还是比较麻烦，当开发者开发完 app 之后可以参考 [eros-publish](https://github.com/bmfe/eros-publish) 来搭建增量发布的服务，有经验的同学也可以在发布机上部署 [eros-cli](https://github.com/bmfe/eros-cli)，来自行编写发布系统。

就如已有 eros 开发者基于 `eros-publish` 编写了的自己增量发布系统 

* [lygtq-eros-publish](https://github.com/hodgevk/lygtq-eros-publish)
* [eros-node-server](https://github.com/shawn-tangsc/eros-node-server)

并开源，非常感谢社区开发者的贡献。
