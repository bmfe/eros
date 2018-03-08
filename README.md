<div align=center>

![eros](http://upload.ouliu.net/i/20180124175551qrzlq.png)

</div>

## Intro

**eros 不是框架，是基于 [weex](https://weex-project.io/cn/) 封装、面向前端的 [vue](https://cn.vuejs.org/v2/guide/) 写法的一整套 app 解决方案。**



| iOS 端内置 DEMO | ios 版下载 | android版下载 |
|---------|---------|---------|
|![eros-demo](http://upload.ouliu.net/i/20180122162536pcw67.gif)|![ios下载](http://chuantu.biz/t6/214/1516790387x-1404793130.png)|![android 下载](http://upload.ouliu.net/i/201801241911376ee1z.png)|

* [iOS 下载链接](http://fir.im/eros)
* [Android 下载链接](https://fir.im/weexerosandroid)


> 开发者可以扫描二维码来下载 eros app 来进行体验，iOS首次打开App需要在 **设置->通用->设备管理 信任开发证书。**
**如果您是前端开发者：**

> eros 开发有一定的门槛，不适合零基础开发。

* 一定要熟练使用 vue 开发。
* 一定要详细阅读 weex 的文档，尤其是与 web 环境，vue 开发差异的部分。
* 在开发客户端应用中，会有遇到无数的环境问题，程序问题，代码问题，绝大多数问题都可以在网上查到对应解决方案，在提出问题或者 issue 的时候，还请先自行尝试解决，eros 的环境安装会耗费很长的时间，你懂的。
* 需要熟悉客户端开发打包流程。

**如果您是客户端开发者：**

那么环境您会迅速搭建起来，然后熟读 vue，weex 文档，因为 vue 上手非常快，然后跟着 eros 的新手教程写几个 demo 便可以开始开发，还可以轻松拓展 module。

## Advantage
eros 提供了:
* 详细的文档来解决环境搭建过程中的坑。
* 一套代码编译成 ios，android 两端原生应用。
* 封装了大量 weex module，让前端开发方便进行原生的操作。
* 可以通过 `appboard` 机制来减少多页面项目中的代码冗余，减少包体积，并可以对其实时修改。
* 内置了一套完整的 JS 二次封装 module (widget) ，通过 vue 插件系统注入，直接在 `this` 上调用，可根据业务自行修改。
* 内置了中介者服务，来进行多个页面间的交互，并可以管理业务。
* 内置了服务器端增量发布更新逻辑，可以搭配着开源的简易增量发布系统一起使用。
* 支持真机和模拟器通过 `weex debug` 来断点调试，程序报错均会有报错日志弹窗提示。

可以通过脚手架：
* 直接生成开发最新模板。
* 启动服务进行实时开发效果查看和 debug 调试。
* 更新开发平台所需 eros 依赖。
* 直接 `pack` 对应平台内置 `JS Bundle`。
* 支持生成全量包，增量包，并内置与更新服务器交互逻辑。
* 支持同步更新模板内容。
* 支持 weex 的 vue 入口和 js 入口两种开发方式。

支持市面上流行的组件库：
* [weex-ui](https://github.com/alibaba/weex-ui) ( 阿里出品，推荐使用 )
* [bui](https://github.com/bingo-oss/bui-weex)

## Disadvantage
> eros 开发中也有很多限制，需要开发者自行斟酌。
* weex 代码在浏览器端还有很多兼容性问题，**所有 eros 目前不支持浏览器端**。
* eros 暂时不能自动使用 weex 市场，但如果您有原生开发经验可以自行接入。
* eros 打出来的包体积稍大，为解决这个问题，eros 客户端依赖可配置正在开发中。

## Principle

![工作原理](http://on-img.com/chart_image/59c5d743e4b0d34a18d69580.png)
[大图地址](http://on-img.com/chart_image/59c5d743e4b0d34a18d69580.png)

## Situation
目前 `eros` 已有大量 app 在开发中和上线的状态，其中有正在开发中的国外大型应用 **starLife（100+页面）**，也有国内正在开发的**蜂觅（60+ 页面）**，还有**已上线的应用都在 0-50+ 页面不等**，涉及行业分布于区块链、资讯、医疗、招商、购物、政府、办公、直播等，后续我们会陆续在首页进行展示。

## Docs
* [eros 文档地址](https://bmfe.github.io/eros-docs/) (持续更新中...)。[帮助我们完善和翻译文档](https://github.com/bmfe/eros-docs)
## Required
开发之前您需要学习 weex 知识，并且能熟练使用 vue 开发，文档地址如下。
* [weex](http://weex.apache.org/cn/guide/)
* [vue](https://cn.vuejs.org/v2/guide/)

## Support
> 跟随着 weex 的支持性，`但目前我们并不支持开发代码兼容 web 端`

* Android 4.1 (API 16)
* iOS 8.0+
* WebKit 534.30+

## Quick Query
* [Hello World](https://bmfe.github.io/eros-docs/#/zh-cn/tutorial_newcomer)
* [更新总览](https://bmfe.github.io/eros-docs/#/zh-cn/update_log_all)

## Ecosystem
> 以下项目，全部开源：

| Project | Description |
|---------|-------------|
| [eros-cli](https://github.com/bmfe/eros-cli) | 简单的 eros 项目构建工具，可以提供搭建，开发，调试和发布等功能。 |
| [eros-publish](https://github.com/bmfe/eros-publish) | 简单的服务器差分包更新逻辑，需要和脚手架搭配使用。 |
| [eros-widget](https://github.com/bmfe/eros-widget) | 二次封装 module。 |
| [eros-ios-library](https://github.com/bmfe/Benmu-iOS-Library) | eros ios Weex 项目依赖库。 |
| [eros-ios-sdk](https://github.com/bmfe/WeexiOSSDK) | eros ios Weex sdk。 |
| [eros-android-framework](https://github.com/bmfe/WeexErosFramework) | eros weex 移动解决方案安卓端框架。 |
| [eros-android-widget](https://github.com/bmfe/BMWidget) | eros 安卓组件库。 |
| [eros-android-sdk](https://github.com/bmfe/WeexSDK) | eros 安卓移动解决方案安卓端 WeexSDK。 |

## Community
* [eros 网易严选](https://github.com/bmfe/eros-yanxuan-demo-v2)
* [weex-eros-book 书籍阅读 app](https://github.com/wennjie/weex-book)
* [lygtq-eros-publish 服务器增量发布逻辑](https://github.com/hodgevk/lygtq-eros-publish)
* [eros-node-server 服务器增量发布逻辑](https://github.com/shawn-tangsc/eros-node-server)


## Group & Community
eros 正式开源到现在已经有了一个 300+ 开发者的开发群 (只能通过邀请)，群里有大量开发者已经有 eros 产品在开发中和已上线，为了维护一个良好的环境，还请先熟知以下群规：

* **此并不是流量群，也并非广告群，是为了大家一起成长，保证信息的有效性，如果发黄赌毒，不和谐言语，与学习无关的广告，推广内容，无关小程序，不会商量，直接会被踢，且不会再有入群机会。**
* eros 开发中遇到任何问题可以随时发到群里 weex 开发相关可以一起讨论。
* 如果不能及时回答也请耐心等待，群里开发丰富经验的同学会帮您一起看问题。
* 除了 eros 自身紧急 BUG 外的问题，均需要提 issue，我们会按 issue 处理，目的是为了更好的给其他开发者参考，紧急问题请直接抛到群里，我们会直接远程帮助您调试。


| 微信群 |
|---------|
|![](https://gitee.com/uploads/images/2017/1026/154652_651ba169_1595985.jpeg)|

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, 本木医疗
