<div align=center>

![eros](http://upload.ouliu.net/i/20180124175551qrzlq.png)

</div>

## Intro

**Eros is not a framework, it is a whole set of APP solutions based on [Weex](https://weex-project.io/cn/) encapsulation and front-end [Vue](https://cn.vuejs.org/v2/guide/) writing.**


## Demo
| Eros iOS | Eros Android |
|---------|---------|---------|
|![eros-demo](https://bmfe.github.io/eros-docs/zh-cn/image/show.gif)|![eros-demo](https://bmfe.github.io/eros-docs/zh-cn/image/androidDemo.gif)|

## Download
| iOS download QR code | Android download QR qrcode |
|---------|---------|---------|
|![ios下载](https://bmfe.github.io/eros-docs/zh-cn/image/iosqr.png)|![android 下载](http://upload.ouliu.net/i/201801241911376ee1z.png)|

- [iOS download link](http://fir.im/eros)
- [Android download link](https://fir.im/weexerosandroid)


> Developers can scan the QR code to download the Eros app experience, iOS App needs to first open the settings - > General > equipment management development certificate trust in

## Flow Chart

![工作原理](http://on-img.com/chart_image/59c5d743e4b0d34a18d69580.png)
[大图地址](http://on-img.com/chart_image/59c5d743e4b0d34a18d69580.png)

## Docs
- [中文文档](https://bmfe.github.io/eros-docs/)
- [English document](https://bmfe.github.io/eros-docs/#/en-us/)

[Help us to improve and translate documents.](https://github.com/bmfe/eros-docs)

## Before Start

> Eros development has a certain threshold, which is not suitable for zero base development.

**front-end developer:**

- must be `skilled in the use of Vue development`.
- be sure to `read the documents of the weex` in detail, **especially the parts of the Vue development that are different from the web environment**.
- most of the problems can be found on the Internet to the corresponding solutions, and please try to solve it by yourself. The Eros environment installation will take a long time.
- you need to be familiar with the `client development packaging process`.

**Native APP developer：**

For you, the environment is not a problem, then read Vue, weex documents, and then follow the Eros [tutorial]((https://bmfe.github.io/eros-docs/#/zh-cn/tutorial_newcomer)) to write a few demo can begin to develop, but also easy to expand `module/components`.

## Eros Provided
### Development
- Useful [eros-cli](https://github.com/bmfe/eros-cli).
    - init the newest develop template.
    - [simple and fast update dependency.](https://bmfe.github.io/eros-docs/#/zh-cn/base_dependencies)
    - support generated built-in packages, full packages, incremental packages.
    - support synchronous update template
    - support weex's Vue entry and JS entry.
    - built-in update server interaction logic.

 
- Detailed documents.
- **Simulator/real hot refresh.**
- A set of code is compiled into IOS/Android native applications.
- A large number of weex [module](https://bmfe.github.io/eros-docs/#/zh-cn/eros_sdk_module) are encapsulated.
- The `appboard JS bundle` can be used to reduce code redundancy in multiple page projects, reduce packet volume, and modify in fact time.
- [A complete set of JS two encapsulation module](https://bmfe.github.io/eros-docs/#/zh-cn/eros_widget?id=axios%EF%BC%88%E8%AF%B7%E6%B1%82%EF%BC%89) is built, which is called directly on `this`.
- A lot of useful [global events](https://bmfe.github.io/eros-docs/#/zh-cn/eros_widget?id=%E9%A1%B5%E9%9D%A2%E5%85%A8%E5%B1%80%E4%BA%8B%E4%BB%B6) have been expanded
- The mediator service is built into the interaction between multiple pages and can manage the business

### Hot Release
- Because of the weex mechanism, we can publish the code to the far end for heat release, and we open open the update back end project simply. [eros-publish](https://github.com/bmfe/eros-publish)

### UI Libraries
Support:
* [alibaba/weex-ui](https://github.com/alibaba/weex-ui)
* [bui](https://github.com/bingo-oss/bui-weex)

## Eros Cannot Provide
- Does not support browsers at present.
- Eros cannot automatically use the weex market, but if you have native development experience, you can access it on its own.
- the JS bundle package size of the Eros is slightly larger, the Eros client component system is in development to solve this problem.

## Required
Before you develop, you need to learn weex knowledge and be able to use Vue development skillfully, and the document address is as follows:

- [weex](http://weex.apache.org/cn/guide/)
- [vue](https://cn.vuejs.org/v2/guide/)

## Support
Following the support of weex, **but at present we do not support the development of code compatible web side.**

* Android 4.1 (API 16)
* iOS 8.0+
* WebKit 534.30+

## Quick Query
* [Hello World](https://bmfe.github.io/eros-docs/#/zh-cn/tutorial_newcomer)
* [Update Logs](https://bmfe.github.io/eros-docs/#/zh-cn/update_log_all)
* [eros 改造网易严选](https://github.com/bmfe/eros-yanxuan-demo-v2)
## Ecosystem
The following projects are all open source:


| Project | Description |
|---------|-------------|
| [eros-cli](https://github.com/bmfe/eros-cli) | A simple Eros project building tool that provides the capabilities of building, developing, debugging, and publishing. |
| [eros-publish](https://github.com/bmfe/eros-publish) | The simple server differential update logic needs to be used with the eros-cli. |
| [eros-widget](https://github.com/bmfe/eros-widget) | Two encapsulation eros module.|
| [eros-ios-library](https://github.com/bmfe/Benmu-iOS-Library) | eros ios framework. |
| [eros-ios-sdk](https://github.com/bmfe/WeexiOSSDK) | eros ios Weex sdk. |
| [eros-android-framework](https://github.com/bmfe/WeexErosFramework) | eros Android framework. |
| [eros-android-sdk](https://github.com/bmfe/WeexSDK) | eros Android Weex sdk.。 |

## Situation
> At present, there are a lot of APP in the development of `eros` and on-line state, which is a large foreign application in the development of starLife (100+ page), are also developing domestic bee foraging (60+ page), and application of on-line in the 0-50+ page range, involving industry chain, distribution in the block information, medical, business, shopping, government, office, live, we will continue to follow at the home show.




## Group & Community
Eros is officially open source. Now there is a development group of 400 + developers (only by invitation). A large number of developers already have Eros products in development and online. In order to maintain a good environment, please know the following rules.

- This not the traffic group, is not advertising group, is for everyone to grow together, guarantee the validity of the information, if yellow bet poison, not harmonious speech, has nothing to do with learning advertising, promotional content, independent of small procedures, not to directly get kicked, and there will be no chance. * *

- Eros development encountered any problem can be sent to the group weex development related can be discussed together.

- If you can't answer the answer in time, please be patient and wait. The students with rich experience in the group will help you to see the problem together.

- in addition to Eros's own urgent BUG problem, we need to mention issue. We will process it according to issue, in order to better refer to other developers, and throw it into the group directly, so we will directly help you to debug it remotely.


| Wechat Group |
|---------|
|![](https://gitee.com/uploads/images/2017/1026/154652_651ba169_1595985.jpeg)|

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, 本木医疗
