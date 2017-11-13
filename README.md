### [weex-eros](https://karynsong.gitbooks.io/weex-eros/content/)是什么？
---

**weex-eros** 是基于 [weex](https://weex-project.io/cn/) 封装面向前端的 Vue2 写法的解决方案。

weex-eros 的定位不是组件库，（后续当然会拓展）由于 app 开发的特殊性，他则更偏重关心于整个 app 项目，**他的优势在于我们对 weex 官方的二次封装，能及时跟进 weex 的新特性，并通过脚手架支持更新 module，widget 等机制，让前端同学都能使用 vue 的写法**，写出一个属于自己的 app ，也让前端和客户端通过 weex 底层机制来进行交互。

基于 weex 我们已经有两个项目已经发布上线，并且体验得到 weex 相关开发者的认可，weex 的解决方案是值得大家实践的。每次 weex 的更新都能带来惊喜，weex-eros 是我们总结出来的一套混合应用的解决方案，更多的是对 weex 的扩展，解决实际开发问题，我们从 weex 开发中得到了非常多的收益，更希望通过我们的力量推动 weex 的发展。

 当然，在您的 PC 上运行 weex-eros，是非常简单的，当您[下载好周边所有的工具和库](/kuai-su-ru-men/huan-jing-da-jian.md)的时候，只需[几行命令](/kuai-su-ru-men/chuang-jian-gong-cheng.md)，配置[好本地的 host 和对应的 config.json 文件](/kuai-su-ru-men/kai-fa-diao-shi.md)，便可以进行开发，脚手架也提供指令来更新 weex-eros 基础库，而您无需关心 weex 的版本，因为已经内嵌到基础库中。



### 为什么会有 weex-eros？
---

在开发上线两个 weex 项目的过程中，发现并解决了很多 weex 的问题，也在各个交流群中收集了很多问题，发下了一下一些 weex 开发的问题。

* weex 在初始化时，启动环境会遇到种种问题

* weex 项目工程化没有很好的解决方案

* weex 的业务写法前端接受程度不高，编译环境需要二次配置

* weex 版本升级之后，当前应用扩展设计不足导致很难升级 SDK

* 随着业务的发展需要对 weex 的 modules 和 components 进行扩展，前端同学的原生扩展能力有限，官方更新不够快

* 没有配套的增量升级的方案

* 没有成套的 UI 组件进行简易 APP 快速开发


### 解决痛点
---

经过多个实际项目的开发，总结出一套工程化解决的方案，主要解决一下问题

* 通过脚手架，初始化出完整的项目工程目录

* 一键启动服务进行实时开发效果查看和 debug 调试（vue、sass、babel 的编译都支持）

* 实时跟进最新的 SDK，一键命令升级现有工程，使工程实时跟进官方 weex 版本

* 快速响应大家的需求，增加扩展 components 和 modules，简易的调用方式，灵活的扩展业务

* 完整的差分包更新方案，快速发布上线业务及更新

* 以 WeUI 为基础风格，正在逐步完善 UI 组件（考虑各自的 APP 都会有自己的 UI 风格，需求可能会小一些，这部分跟进可能会慢一些）

### 前期准备
---

在开发之前可能需要了解一些基础的技术，我们是在下面这些基础知识之上进行开发的。

##### [weex](http://weex-project.io/cn/)

整体是基于 weex 进行的二次开发，对 weex 进行了二次包装，除了语法上是使用 Vue2，其他 components 和 module\(希望使用我们推荐的方式\)都可以使用官方的，并且我们更希望开发者能了解 weex 的大致的实现原理，对开发应用会更有帮助。

[**Vue2.0**](https://cn.vuejs.org/index.html)

业务搭建时，语法都是用 Vue2，支持所有 Vue2 的语法特性。

##### [BMFE\_scaffold](https://www.gitbook.com/book/karynsong/weex-eros/edit#)

是一套前端脚手架，支持前端从项目创建到项目发布间的所有自动化工作。


### 支持性
---

只支持**纯 weex** 的 **Vue 多页面**应用开发，正在逐步实现对已有工程的集成方案。（多页面在 weex 使用中性能会更好，页面间切换的动画可以是原生动画）

目前**只支持 iOS 和 Android** 的开发，暂不支持 web 。目前 Mac 版已进行过测试开发实践，Windows 下已进行兼容。（web 和 native 的交互及用户习惯会有差别，两者所承载的侧重点也会有差别，所以一套开发多套使用并没有让多端更精细化，web 更多是降级方案，但是目前 weex-eros 有内置包和完备的远程更新方案，所以需要降级的场景基本不会出现）