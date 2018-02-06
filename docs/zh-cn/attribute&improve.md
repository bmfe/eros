# 页面声明周期

在不影响vue生命周期的前提下，weex-eros暴露出了额外的生命周期钩子函数供您使用。

**使用方法：**

```js
export default {
    created() {},  // vue 生命周期
    bmRouter: {
    
        viewWillAppear(params, options) {},

        viewDidAppear(params, options) {},

        viewWillBackAppear(params, options) {},

        viewDidBackAppear(params, options) {},

        viewWillDisappear(options) {},

        viewDidDisappear(options) {}
    }
}
```

**注意事项：**

1. 这些钩子函数都是**异步**的
 
2. 若用到`<embed>`标签，`<embed>`中的内容是**不会触发**此生命周期的


**Api：**

- viewWillAppear( params, options )

    触发时机：通过`$router.open`进入本页面，在本页面【即将出现】时触发

    params：`$router.open` 时传递的 params
    
    options：目前仅包括属性`type`，值为`open`、`refresh`，前端同学暂时用不到

- viewDidAppear( params, options )

    触发时机：通过`$router.open`进入本页面，在本页面【已经出现】时触发

    params：`$router.open` 时传递的 params
    
    options：目前仅包括属性`type`，值为`open`、`refresh`，前端同学暂时用不到

- viewWillBackAppear( params, options )

    触发时机：通过`$router.back`等方法从下一个页面返回本页面，在本页面【即将出现】时触发

    params：`$router.setBackParams` 时设置的 params
    
    options：目前仅包括属性`type`，值为`back`，前端同学暂时用不到

- viewDidBackAppear( params, options )

    触发时机：通过`$router.back`等方法从下一个页面返回本页面，在本页面【已经出现】时触发

    params：`$router.setBackParams` 时设置的 params
    
    options：目前仅包括属性`type`，值为`back`，前端同学暂时用不到

- viewWillDisappear(options)

    触发时机：在本页面【即将消失】时触发
    
    options：目前仅包括属性`type`，值为`open`、`refresh`、`back`，前端同学暂时用不到

- viewDidDisappear(options)

    触发时机：在本页面【已经消失】时触发
    
    options：目前仅包括属性`type`，值为`open`、`refresh`、`back`，前端同学暂时用不到

# 全局属性

官方提供的`weex.config.env`属性上，包含了当前 Weex 页面的环境信息。

我们在其基础上，又扩展了新的属性，开发者可通过`weex.config.eros`查看所有属性。

新的属性包括：

- `bmFontScale`：当前字体大小，值为 NORM（标准）、BIG（大号）、EXTRALARGE（特大）
 
- `bmFontSize`：当前字体放大倍数，值为1、1.15、1.3等
 
- `deviceId`：手机的唯一标示

- `jsServer`：js所在地址的域名
 
- `logLevel`：日志等级
 
- `request`：请求后端接口的域名
 
- `scale`：屏幕放大倍数
 
- `statusBarHeight`：通知栏高度，可在适配 iPhoneX 时使用。在页面顶部添加一个`div`，高度与`statusBarHeight`一致，即可撑起顶部刘海区，还可修改`div`颜色，使其与页面主体部分一致
- `navBarHeight `：原生导航栏高度，在自定义导航栏的时候高度取这值就可以
- `touchBarHeight `：iPhoneX底部的touchBarHeight，可以通过此参数来判断是否是iPhoneX，来适配页面，当参数不等于0则表示是 iPhoneX设备；
- `jsVersion `：当前内置包js版本号

**注意事项：**

 若用到`<embed>`标签，`<embed>`中的内容是找不到`weex.config.eros`的。
 
 解决方法为在`<embed>`之外的根页面上先获取`weex.config.eros`，通过事件传递或本地存储等方式，在`<embed>`中使用。

# 使用本地资源

#### 加载图片资源

目前 Weex 的 `<image>` 标签不支持加载本地图片资源，但是在实际开发中加载本地图片资源还是必须的功能，通过扩展 `<image>` 组件使其支持此特性；

**使用方法：**  
首先需要将图片资源放到 assets 目录下，填写 src 时请以 bmlocal://assets/ 开头后面跟上图片的具体路径 。

> 注意：图片不要使用中文命名

**示例：**

```js
<template>
    <image style="width:550px; height:550px; top:100px" src="bmlocal://assets/logo.png"></image>
</template>
```

#### 加载 iconfont 资源

**使用方法：**  
首先需要将图片资源放到 iconfont 目录下，填写 src 时请以 bmlocal://iconfont/ 开头后面跟上资源的具体路径。

**示例：**

```js
domModule.addRule('fontFace', {
   'fontFamily': "iconfont2",
   'src': "url('bmlocal://iconfont/font_1469606063_76593.ttf')"
});
```
注意：
> 线上资源直接按照官方，填写全路径即可。


# 下拉刷新增强

Weex 自带的`<refresh>` 组件使用起来不是很好用，效果也差强人意，综合考虑由 native 端来实现下拉刷新，方式是在 \`&lt;scroller&gt;、&lt;list&gt;\` 组件的基础上进行扩展，这样对于前端的改动最小，使用也非常简单，具体方式如下：

#### 效果：

![](https://img.benmu-health.com/gitbook/show4.gif)

#### 扩展特性

说明：在原有\`&lt;scroller&gt;、&lt;list&gt;\`组件基础上添加\`showRefresh\`属性来控制是否需要显示下拉刷新组件；

`showRefresh {bool}`：当值为\`true\`时 native 端自动为\`&lt;scroller&gt;\`或\`&lt;list&gt;\`添加下拉刷新组件（缺省此属性或者值为\`false\`时不会显示下拉刷新组件）；

#### 扩展事件

`refresh`：当下拉并执行刷新操作时会触发这个事件，你可以在这个事件的处理函数中来执行刷新的操作，如重新请求数据；

`refreshEnd`: 结束刷新动画，当刷新的操作完毕后需要调用此方法来结束刷新动画；

```js
<template>
    <div class="wrap">
        <!--  头部  -->
        <list ref="list" :showRefresh="true" @refresh="onrefresh">
            ...
            ...
        </list>
    </div>
</template>
<script>
    var globalEvent = weex.requireModule('globalEvent');
    module.exports = {
        data() {
            ...
        },
        components: {
            ...
        },
        methods: {
            onrefresh() {
                Promise.all([disease.GET_COMMONDISEASES_LIST(this), banner.GET_BANNER_LIST(this)]).then(() => {
                    // 请求数据结束后调用 refreshEnd 方法
                    this.$refs["list"].refreshEnd()
                })
            }
        }
    }
</script>
```


# input & textarea 光标

> 修改光标颜色：`tint-color`

示例

```js
<template>
    <div>   
        <text>这是用路由打开的一个新页面</text>
        <input style="width:750px; height:80px; top:100px; font-size: 60px; tint-color: red;" type="text" placeholder="Input Text" value=""/>
    </div>
</template>
```

![](https://img.benmu-health.com/gitbook/showInput.gif)

