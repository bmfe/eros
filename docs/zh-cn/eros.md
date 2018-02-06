### 介绍
eros 是基于 [weex](https://weex-project.io/cn/) 封装面向前端的 vue 写法的解决方案，由于 app 开发的特殊性，eros 则更偏重关心于整个 app 项目。

欢迎大家的 Pull requests 和 Issues，顺便留个 star 

#### 优势：
* eros 对 weex 官方进行二次封装，能及时跟进 weex 的新特性，
* eros-cli 支持生成开发模板，更新平台相关依赖，打包等，在熟悉了 eros 之后，对于中小型 app 应用能进行快速迭代。
* eros-cli 和 eros-publish 的搭配使用，可以搭建简易增量发布。
* 在开发中能更少的关注 weex 版本升级和本身的兼容性问题。**（综合在一个平台，当你遇到一个兼容性问题，当 eros 修复了，就是其他人少遇到一个问题，节约的是大家的时间）**。
* 跟 weex 一样，给 vue 开发者另一个舞台。

#### 不足：
* weex debug 会出现些问题，eros 已经有方法解决，但不完美，还需要改进。
* 由于人手不足，许多功能可能并不完善，修复可能需要大家的参与。
* 由于 eros 本身是从公司业务冲抽离出来的，有些代码冗余和不规范。
* 客户端依赖还未做动态加载，导致包体积会稍微大一些。

eros 会尽全力弥补不足。

#### 功能：

* 客户端拓展了数十个 module
* 提供 appboard 机制来减少包体积
* 内置了一套完整的 widget ，可根据业务自行修改
* eros-publish 提供了服务器端增量发布更新逻辑
* eros init 生成开发模板
* eros dev 启动服务进行实时开发效果查看和 debug 调试
* eros install 更新开发平台所需 eros 依赖
* eros pack 打对应平台内置包
* eros build 支持生成全量包，增量包，并内置与更新服务器交互逻辑
* eros update 同步更新模板内容
* 支持 vue、sass、stylus、less、babel
* 支持 weex 的 vue 入口式开发和 js 入口式开发
* 等等...


### 工作原理

![工作原理](http://on-img.com/chart_image/59c5d743e4b0d34a18d69580.png)
[大图地址](http://on-img.com/chart_image/59c5d743e4b0d34a18d69580.png)

### 前期准备

在开发之前可能需要学习并使用以下框架，而 eros 是基于他们来进行开发的。

* [weex](http://weex-project.io/cn/)
* [**vue**](https://cn.vuejs.org/index.html)


### 支持性
目前只支持 iOS 和 Android 的开发，暂不支持 web 。
* Android 4.1 (API 16)
* iOS 8.0+
* WebKit 534.30+


##### 欢迎大家加入weex-eros微信开发群一起讨论，**在开发过程中如果遇到任何问题，我们将尽快为您答复。**

##### 由于当前群人数过多，目前只能通过邀请的方式进群请大家先添加小花同学的微信然后邀请大家进群。

![小花同学微信](https://gitee.com/uploads/images/2017/1026/154652_651ba169_1595985.jpeg)