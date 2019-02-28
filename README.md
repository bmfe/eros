<h1 align="center">
  <br>
  <a href="https://github.com/bmfe/eros-template">
  <img src="http://upload.ouliu.net/i/20180124175551qrzlq.png" alt="Markdownify" width="200"></a>
  <br>
  WEEX-EROS
  <br>
</h1>

<h4 align="center">
  :iphone: 一套 Vue 代码，两端原生应用。
  <br><br>
  Based in Weex and Vue.
  Support By <a href="https://github.com/bmfe" target="_blank">Bytemaster</a>.
</h4>


## 欢迎

### 介绍
**eros 不是框架，是基于 [weex](https://weex-project.io/cn/) 封装、面向前端的 [vue](https://cn.vuejs.org/v2/guide/) 写法的一整套 APP 开源解决方案。**

目前 eros 均由来自美团，今日头条，DCloud 等数十个开发者组成的 [Bytemaster 公益开源团队](https://github.com/bmfe) 来共同维护，如果您想加入我们，或者有好的开源项目寻求平台，不妨[联系我们，加入我们](https://github.com/bmfe)(完全免费)。

> 简单来说，在 weex 提供的强大支持下，用一份 vue 写法的代码，编译成 iOS/Android 两端原生 APP，并且通过我们内置的热更新逻辑和开源的服务器逻辑，可以使开发者以极快的速度开发 APP ，并赋予 APP 热更新能力(不用经过 appStore/android market 市场审核)。

那么 eros 开发有多快呢？我们收集了一些问卷，**在复杂度不高，首次使用 eros 开发的**某些场景下：

|页数|开发周期统计|
|--------|---------------|
|0 - 50| 最晚一个月开发完成|
|50 - 100| 最晚两个半月开发完成|

当然，这都得益于 `weex` 和 `vue` 。

[想看看 EROS 开发了多少应用?](https://github.com/bmfe/eros#awesome-eros)


### 面向人群
> 要非常注意，**eros/weex 并不太适合无客户端能力的个人或者团队**，当然也有独立前端开发者使用 eros 做出了一定复杂度的 app，**这完全取决于开发者能否有独立解决问题的能力**，请谨慎思考。

### 适用场景
> 首先你需要熟悉 weex 的基础 api，部分机制和与 web 开发的差异性，同时需要知道 eros 提供了哪些原生能力，在根据自身业务来判定是否能加入到技术选型。

* 实时交互性，与键盘交互等功能复杂度不高的项目。
* 在 app 中接入 eros/weex，**让某条业务线的部分流程达到快速迭代的目的，这也是 weex 的初衷**。

## 文档 
> [帮助我们完善和翻译文档](https://github.com/bmfe/eros-docs)
- [中文文档](https://bmfe.github.io/eros-docs/)
- [English document](https://bmfe.github.io/eros-docs/#/en-us/)


## Demo

 > 开发者可以扫描二维码来下载 eros app 来进行体验，iOS首次打开App需要在 **设置->通用->设备管理 信任开发证书。**
 
| Eros iOS demo | Eros Android demo |
|---------|---------|
|![【ios 下载】](https://bmfe.github.io/eros-docs/zh-cn/image/iosqr.png)|![【android 下载】](http://upload.ouliu.net/i/201801241911376ee1z.png)|
|[【预览录屏】](https://bmfe.github.io/eros-docs/zh-cn/image/show.gif)|[【预览录屏】](https://bmfe.github.io/eros-docs/zh-cn/image/androidDemo.gif)|
|[【下载链接】](http://fir.im/eros)|[【下载链接】](https://fir.im/weexerosandroid)|

## 使用之前

> 请详细阅读以下须知

- **虽然 weex 支持三端，但 eros 只支持两端 `iOS/Android`，意味着你不可以像开发 Web 那样开发 APP。**
- **开发者必须熟练开发 Vue，熟悉 Weex 文档，遇到问题要善于 google 和`stackoverflow`**
- **weex 虽然提供了 `weex run android/ios` 等指令让开发者不打开对应开发者工具(AndroidStudio, xcode)来直接运行模拟器，打包到真机上开发，但 eros 并没有做相关功能，原因是每次修改 `eros.native.js` 配置文件也好，每次添加客户端三方插件也好，包括各种日志(特别崩溃日志)等使得开发者不得不操作开发者工具来进行打包和调试，而如若没有详细的日志，在出了问题之后也无法搜寻或者向我们反馈。**


## 选择了 EROS 可以得到什么？
### 原生能力
暴露给前端大量便捷实用的 [原生能力](https://bmfe.github.io/eros-docs/#/zh-cn/eros_widget?id=axios%EF%BC%88%E8%AF%B7%E6%B1%82%EF%BC%89) 
，拓展了 [非常有用的事件](https://bmfe.github.io/eros-docs/#/zh-cn/eros_widget?id=%E9%A1%B5%E9%9D%A2%E5%85%A8%E5%B1%80%E4%BA%8B%E4%BB%B6) 。

- 路由
- 原生事件
- 本地化存储
- 发布订阅
- Restful 请求，支持 Cookie
- 图片处理
- 拍照上传
- 浏览图片
- 操作本地图片
- 拨打电话
- 发短信
- 选择联系人
- 定位
- 原生弹窗
- 拷贝
- 扫一扫
- Echart
- 日历
- Bindingx
- 手势解锁
- 访问本地图片，html等
- ...

### 插件化
eros 在重做插件化后目前 github 上已经开源了近 20 多个由开发者自行拓展的插件，非常感谢这些开发者的支持并开源，当您使用他人拓展的插件时希望能顺便给他们一个小小的 star 。

- 个推
- 支付宝
- 微信支付
- 微信分享
- 友盟分享
- 阿里云移动推送（android）
- 腾讯防水墙
- 高德地图
- 日期选择增强
- 网络监控插件
- 安卓端增强（文件的查看，下载，预览；本地缓存的获取，清除；跳转至应用市场评分页；获取软键盘的高度）
- 二维码插件
- 短信验证码插件
- 健康相关，步数统计插件
- 刮刮卡，抽奖插件等等

具体可在 `github` 搜索 `eros-plugin` 查阅。（[https://github.com/search?p=1&q=eros-plugin&type=Repositories](https://github.com/search?p=1&q=eros-plugin&type=Repositories)）

> 而在纯净(pure)的开发模板中，是没有地图，个推等三方插件的，eros 有自己的插件体系，使得开发者在需要的时候，写入几行代码即可，不引用就不打包，减少安装包的大小，**pure 纯净版本只有 10 MB 出头**。

### 开发过程中
 
- 详细的文档
- **iOS/Android 模拟器/真机热刷新**(区别于热更新，热刷新是保存即刷新 APP)
- 支持 `weex debug`
- 一套 Vue 代码，两端原生应用
- 通过 `appboard JS bundle` 极大的减少了公共代码冗余
- 为大型项目内置了中介者服务，方便管理业务间的事件交互

### 脚手架 [eros-cli](https://github.com/bmfe/eros-cli)：
- 随时初始化最新的开发项目模板。
- [简单而且快速的依赖更新。](https://bmfe.github.io/eros-docs/#/zh-cn/base_dependencies)
- 支持生成内置包，全量包，增量包。
- 支持随时更新模板内容。
- 支持 Weex 两种入口开发方式 `JS/Vue`。
- 内置与增量服务器的交互逻辑。


### 热更新机制

**由于 Weex 的机制，我们能在远端发布代码，客户端更新并生效，并不需要审核发布流程，给 APP 提供了强大的迭代动力。**

- [热更新详解](https://bmfe.github.io/eros-docs/#/zh-cn/advanced_diff)
- [eros-publish 开源的，简单的热更新后台逻辑](https://github.com/bmfe/eros-publish)

### UI 库
使用 UI 库，开发效率也会大大提升：
* [alibaba/weex-ui](https://github.com/alibaba/weex-ui)
* [weex-amui](https://hminghe.github.io/weex-amui/#/)
* [bui-weex](https://github.com/bingo-oss/bui-weex)

### 现有 app 接入
我们也有热心的开发者分享了现有 app 接入 eros 的方案：

* [教程：EROS集成到现有iOS应用](https://zhuanlan.zhihu.com/p/38905196)

## 开源现状
在 EROS 开源的一年时间，已帮助上千位开发者开发了属于自己的原生应用，支持了数百个 app，如：

* 金宣公寓
* 多利农庄
* mmphoto
* StarLife
* 大嘴吧拼读
* 韩语入门-早道网校
* 德语入门-早道网校
* 赢商大数据 
* 多逛逛
* 区块学院
* 易送 
* 蜂觅 
* JEX
* 1234TV
* FoD chain
* 博山头条
* 新长宁慧生活
* 辽河油田
* 连云港政协
* 连云港古树
* 亿康通
* 本木医疗助手
* 本木医生助理
* 京医通 APP
* ...

> 涉及行业分布于区块链、资讯、医疗、招商、购物、政府、办公、直播等各行各业。

同时也有越来越多的团队加入到 eros 开发和讨论行列：
* `StarLife` 大前端团队
* `早道网校` 大前端团队
* `车保姆` 大前端团队
* `车国` 大前端团队


## 支持性
跟随着 weex 的支持性，**但 eros 并不支持开发代码兼容 web 端**
* Android 4.1 (API 16)
* iOS 8.0+
* WebKit 534.30+

## 快速开始
* [EROS 入门指南](https://bmfe.github.io/eros-docs/#/zh-cn/tutorial_newcomer)
* [EROS 网易严选](https://github.com/bmfe/eros-yanxuan-demo-v2)
* [EROS 更新日志](https://bmfe.github.io/eros-docs/#/zh-cn/update_log_all)

## 周边系统

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

> 你还可以尝试其他开发者贡献的服务器增量发布逻辑：
* [eros-node-server 服务器增量发布逻辑](https://github.com/shawn-tangsc/eros-node-server)
* [lygtq-eros-publish 服务器增量发布逻辑](https://github.com/hodgevk/lygtq-eros-publish)

> 当然，开发者可以自己制作自己的发布逻辑。

## 讨论组
eros 正式开源到现在已经有了一个拥有大量开发者的群(微信群已满)，群里有大量开发者已经有 eros 产品在开发中和已上线，为了维护一个良好的环境，还请先熟知以下群规：

* **此并不是流量群，也并非广告群，是为了大家一起成长，保证信息的有效性，如果发黄赌毒，不和谐言语，与学习无关的广告，推广内容，无关小程序，不会商量，直接会被踢，且不会再有入群机会。**
* eros开发中遇到任何问题可以随时发到群里 weex开发相关可以一起讨论。
* 如果不能及时回答也请耐心等待，群里开发丰富经验的同学会帮您一起看问题。
* 除了 eros 自身紧急 BUG 外的问题，均需要提 issue，我们会按 issue 处理，目的是为了更好的给其他开发者参考，紧急问题请直接抛到群里，我们会直接远程帮助您调试。

QQ群:  
开发者1群 **667379588** (满员) <br>
开发者2群 **798677297**

## 赞赏我们
> 感谢在 `eros` 开源过程中赞赏我们的开发者，你们一直是 `eros` 继续下去的最大动力！

<p align="center">
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/zero.jpg" width="200" style="margin-right:5px; border: 1px solid #ccc;" />
</p>

## Awesome Eros
以下是部分 eros 产品的使用截图，我们会进行不定期更新：

<h4 align="center">
  世界邦-mmphoto (iOS/Android 市场均可下载)
</h4>

<p align="center">
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/mmphoto1.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/mmphoto2.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/mmphoto3.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/mmphoto4.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/mmphoto5.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/mmphoto6.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/mmphoto7.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/mmphoto8.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/mmphoto9.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/mmphoto10.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<br>

<h4 align="center">
  多利农庄 (iOS/Android 市场均可下载)
</h4>

<p align="center">
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/duoli1.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/duoli2.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/duoli3.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/duoli4.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<br>

<h4 align="center">
  金宣公寓 (iOS/Android 市场均可下载)
</h4>

<p align="center">
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/jinxuan1.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/jinxuan2.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/jinxuan3.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/jinxuan4.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/jinxuan5.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<br>

<h4 align="center">
  star life new.
</h4>

<p align="center">
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star-new.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star-new1.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star-new2.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star-new3.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star-new4.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star-new5.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star-new6.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star-new7.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star-new8.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<br>
<h4 align="center">
  star life old.(内测)
</h4>

<p align="center">
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star1.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star2.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star3.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star4.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star5.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star6.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star7.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star8.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/star9.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>

<br>

<h4 align="center">
  大嘴吧拼读-上海才隽前端团队(安卓/苹果市场搜索)
</h4>
<p align="center">
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/spell1.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/spell2.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/spell3.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/spell4.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>

<br>

<h4 align="center">
  <a href="http://j.izaodao.com/index.php?finger=3220803179&short_url=Kyg6">韩语入门-早道网校大前端团队</a>
</h4>
<p align="center">
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/korea1.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/korea2.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/korea3.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>

<br>

<h4 align="center">
  <a href="http://j.izaodao.com/index.php?finger=3220803179&short_url=S3Ms">德语入门-早道网校大前端团队</a>
</h4>
<p align="center">
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/ger1.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/ger2.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/ger3.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/ger4.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/ger5.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>

<br>

<h4 align="center">
  <a href="http://yzsadmin.winshangdata.com/aiadmin/download/app/">赢商大数据(iOS/Android 市场均可下载，前端开发者独立完成)</a>
</h4>
<p align="center">
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/wins.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/wins1.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/wins2.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/wins3.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/wins4.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>

<br>

<h4 align="center">
  <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.youdanhui.shengduoduo">多逛逛(iOS/Android 市场均可下载)</a>
</h4>
<p align="center">
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/dgg1.jpg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/dgg2.jpg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/dgg3.jpg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/dgg4.jpg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/dgg5.jpg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>

<br>


<h4 align="center">
  区块学院(iOS/Android 市场均可下载，可自行搜索)
</h4>
<p align="center">
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/school1.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/school2.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/school3.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/school4.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/school5.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>

<br>
<h4 align="center">
  蜂觅（企业级 app）
</h4>

<p align="center">
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/蜂觅.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/蜂觅2.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/蜂觅3.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/蜂觅4.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/蜂觅5.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<br>

<h4 align="center">
  某企业级 app (c 端 app 开发中)
</h4>

<p align="center">
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/shawn2.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/shawn3.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/shawn4.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/shawn5.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/shawn6.jpeg" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<br>

<h4 align="center">
  其他 app 集合（还有很多，后续会慢慢添加）
</h4>

<p align="center">
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/jex.png" width="100" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/jex1.png" width="100" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/jex2.png" width="100" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/jex3.png" width="100" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/连云港政协.jpg" width="100" style="margin-right:5px; border: 1px solid #ccc;" />
</p>

<p align="center">
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/连云港政协2.jpg" width="100" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/慧生活.png" width="100" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/fod1.jpg" width="100" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/fod2.jpg" width="100" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="https://github.com/bmfe/eros-docs/blob/master/eros-products/fod3.jpg" width="100" style="margin-right:5px; border: 1px solid #ccc;" />
</p>

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Byte Master.

