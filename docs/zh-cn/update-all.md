## 2018.02.01
### 简述：
* 目前可任意使用 echart 的大部分所有实例运行了！！！
* 相同网络状况下减少了 eros install 60% 的时间
* 只有第一次 eros init 模板的时候需要 eros install，其余后续更新只需要 eros update ios/android(没有 -- 哦) 即可，会更快
* 原先的eros update 默认更新模板，现在变更为 eros update template xxxx，xxxx 为你要更新的路径
* widget 单独优化出来一个命令 eros update widget

### eros-template
* 添加 `$format` 支持 bmchart 传递 options 中包含有方法的情况
* add scripts/ios.install.sh
* add scripts/android.install.sh
* add scripts/ios.update.sh
* add scripts/android.install.sh

### ios-sdk
* 适配 weex debug 1.0.0 版本，改回扫一扫调试；
* 修复调用 toast message 传 Number 类型时崩溃的问题;
* 优化 bmchat 图标组件，支持调用方法  setOptions 变更为 options

### android-sdk
* 修复未获得权限时多次点击图片可能出现返回多张图片问题。
* 添加权限申请。
* 将调试修改成扫一扫，并升级 weex debug.
* 修复一些已知 bug
* bmchart 支持传递方法 setOptions 变更为 options

### eros-cli 
* add: eros install ios
* add: eros install android
* add: eros update ios
* add: eros update android
* add: eros update template your_path
* add: eros update widget

## 2018.01.24

### eros-template:
* 全新的 demo
* fix widget 中 storage 返回格式不统一的问题
* fix widget 中 this.$image.upload 参数问题

### eros-cli:
* 修复了eros build 会 pack 内置包的bug
* 添加了 eros pack --all 同时打两端内置包

### ios
* 修改bmRouter getParams 没有数据的时候返回空字符串；
* 优化bmRichtText,有一定几率不显示的问题；

### android
* 拓展weex.config.eros变量
* 修复ToolsMoudle 是否安装微信方法
* 修复iconfont不显示问题。
* 修改富文本默认字体
* 修复一些已知bug
* 修复bmCalendar样式不生效问题
* 修复滑动事件影响bmRefresh消失问题
* 修复了上传图片后返回json数组,现在返回对象

### 迁移指南
* 新项目 或者 如果需要查看demo 建议重新 eros init 项目
* 老版本如果更新sdk 只需要 eros install 即可

## 2018.01.10
### 脚手架及其模板
* 添加编译时 eslint ，并添加 eslint 对应配置文件，在 `eros.dev.js` 中添加 eslint 参数来配置是否需要在编译时进行 eslint 检测，eslint 默认为false。
* 模板中的所有内置代码全部通过 eslint 进行了修改，增加了代码的规范性。

> 推荐中大型项目，使用开启此项功能，来增加代码的拓展性，维护性，减少 BUG，无用代码等。

特别感谢 **Eric Xiao** 提出了 `eslint` 代码规范的建议，并贡献了 `.eslintrc`，`.editorconfig` 2个文件。

### 安卓
1. 修复axios bug
2. 修复setHomePage方法没有立即生效问题。
3. 修复sms 发短信崩溃问题。
4. 修复调试按钮点击崩溃问题。
5. 修复call方法总是110问题，修改 module 的传参方式，可以配置是否需要弹窗提示拨打。
6. 修复预览本地图片问题。
7. 修改返回格式status问题 统一返回 `Number`

### IOS
1. 修改 module 拨打电话的传参方式
2. 修改返回格式status问题，统一返回 `Number`

## 2018.01.05
### 安卓/IOS
* 添加一键调试，不需要扫一扫即可调用调试，模拟器现在也可以调试了；需要在 `eros.native.js` 中添加 `debugServer`，添加方式请看[eros.native.js 配置教程](https://github.com/bmfe/eros-template/wiki/%E9%85%8D%E7%BD%AE%E7%9B%B8%E5%85%B3) (感谢：周晗)
* 新增bmImage Module,将图片相关操作统一放到此Module中
* 支持直接打开相机拍照或直接打开相册选择图片并返回本地路径
* 新增上传本地图片方法，用于上传上面👆选择的图片
* 预览图片支持浏览 网络图片、本地图片及 jsbundle 中的图片
* 优化了bmchat组件，通过修改 html 代码确定内容高度等于 bmchat 组件设置的高度；（感谢：阳光只要七十米）
* 新增 bmWebsocket Module，android 端也可以进行 socket 链接了
* bmRouter Module 新增 setHomePage方法: 作用：重新设置 app 启动加载的首页

### 开发模板
* 增加了新 module 对应的所有 widget，`$image`, `$coms`
* 统一了返回格式，修复了已存在的 BUG （感谢 Eric xiao ）
* Promise 拓展了 `finally` 和 `done` 2 个方法 （感谢 Eric xiao）