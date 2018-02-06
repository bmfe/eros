## 1.1.4 （2018.1.31）
更新操作：执行`eros install --ios`
1. 适配 weex debug 1.0.0版本，改回扫一扫调试；
2. 修复调用toast message 传num时崩溃的问题;
3. 优化bmchat图标组件，支持调用方法；

## 1.1.3 （2018.1.24）
更新操作：执行`eros install --ios`
1. 修改bmRouter getParams 没有数据的时候返回空字符串；
2. 优化bmRichtText,有一定几率不显示的问题；

## 1.1.2 （2018.1.17）
更新操作：执行 `eros install --ios`
1. 优化上传图片的数据返回格式；
2. 优化设置导航栏按钮方法，修复按钮大小显示不一致的问题，并以文档说明；

## 1.1.1 （2018.1.5）
此版本升级需要更新工程文件：`install.sh,Podfile`，参考wiki iOS更新依赖中的[升级工程文件](https://github.com/bmfe/eros-template/wiki/iOS-%E6%9B%B4%E6%96%B0%E4%BE%9D%E8%B5%96%E7%9B%B8%E5%85%B3)
1. 添加一键调试，不需要扫一扫即可调用调试，模拟器现在也可以调试了；需要在 `eros.native.js` 中添加 `debugServer`，添加方式请看[eros.native.js 配置教程](https://github.com/bmfe/eros-template/wiki/%E9%85%8D%E7%BD%AE%E7%9B%B8%E5%85%B3);
2. 新增[bmImage](https://github.com/bmfe/eros-template/wiki/bmImage) Module，将图片相关方法统一放到此Module中，bmCamera及bmBrowserImg Module已经废弃，后续版本中移除；
3. [bmAxios](https://github.com/bmfe/eros-template/wiki/bmAxios) Module 新增 uploadImage 方法，用于上传本地图片；
4. 扫一扫功能移植到了[bmTool](https://github.com/bmfe/eros-template/wiki/bmTool) Module 中；
5. 预览图片 preview 方法支持浏览本地图片及 jsbundle 中的图片；
6. 优化了bmchat组件，通过修改html代码确定内容高度===bmchat组件设置的高度；（感谢：阳光只要七十米）

## 1.1.0 （2017.12.29）
此版本升级需要更新工程文件：`install.sh、podFile`，参考wiki iOS更新依赖中的[升级工程文件](https://github.com/bmfe/eros-template/wiki/iOS-%E6%9B%B4%E6%96%B0%E4%BE%9D%E8%B5%96%E7%9B%B8%E5%85%B3)
1. 升级WeexSDK(0.17.0)[weex更新说明](https://weex.incubator.apache.org/cn/releasenote.html)；
2. [config.eros](https://github.com/bmfe/eros-template/wiki/%E5%85%A8%E5%B1%80%E5%B1%9E%E6%80%A7)中添加statusBarHeight、navBarHeight、touchBarHeight、jsVersion参数；
3. [bmCamera](https://github.com/bmfe/eros-template/wiki/bmCamera) Module updateImage 方法支持自定义request header；
4. 优化[bmAxios](https://github.com/bmfe/eros-template/wiki/bmAxios)、[bmStorage](https://github.com/bmfe/eros-template/wiki/bmStorage) Module 的回调数据格式；
5.[bmRouter](https://github.com/bmfe/eros-template/wiki/bmRouter) Module新增openBrowser方法，使用系统浏览器打开url；
6. eros.native.js 加密处理;
7. 新增[bmCommunication](https://github.com/bmfe/eros-template/wiki/bmCommunication)Module，添加打开通讯录选择联系人方法、打开短信发送信息方法、将打电话方法移植到这里；
8. 升级WeexDevTool：js报错会弹窗提示错误日志 (点击状态栏的 mnt 可以查看更多详细内容)；
9. 优化加载中介者机制，当拦截器变化时重新加载，刷新页面的时候检查是否已经加载成功；
11. 新增bmWebsocket Module；
12. bmRouter Module 新增 setHomePage方法:  作用：重新设置app启动加载的首页，js传path过来，native端会将传过来的path存储到本地，app启动的时候优先读取这个参数来显示首页，没有的话读取 native.js 中的配置；

## 1.0.1
1.bmCanera Module updateImage 方法支持自定义url；