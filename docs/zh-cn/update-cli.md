# 脚手架更新方法
```
$ npm i eros-cli -g
```

# 更新日志
## 2.0.4
* fix: eros pack all 失效问题
* fix: eros pack ios 失效问题
* fix: eros pack android 失效问题

## 2.0.3
* add: eros pack all
* add: eros pack ios
* add: eros pack android

## 2.0.2
* add: eros install ios
* add: eros install android
* add: eros update ios
* add: eros update android
* add: eros update template your_path
* add: eros update widget

## 2.0.1
* fix: eros build 会打内置包的情况
* add: eros pack --all 同时打两端的内置包

## 2.0.0-beta.14-16
* 添加 eslint 编译

## 2.0.0-beta.13
* 修复 windows 上报打包含有 weex-ui 组件的页面，解析错误的bug

## 2.0.0-beta.10 - 12
* eros pack 没有打包本地静态资源

## 2.0.0-beta.9
* fix 脚手架 dev 报错的问题

## 2.0.0-beta.8
* 删除组件更新

## 2.0.0-beta.7
* bugfix: 修复 eros init 报错的问题

## 2.0.0-beta.6
date: 2017-12-29
* 脚手架更新：	加密算法
* 脚手架更新： 添加tree-shaking
* 脚手架更新： 精简体积，删除无用代码
* 脚手架更新： eros update 可选择不再覆盖


## 2.0.0-beta.5
* pack 动态给安卓添加配置信息。

## 2.0.0-beta.4
* 优化差分包逻辑，增加webpack输出提示。

## 2.0.0-beta.2
* 新增eros update

## 2.0.0-beta.1
* 新增 eros init
* 新增 eros build
* 新增 eros dev     
* 新增 eros pack (--ios/android)
* 新增 eros install (--ios/android)
* 兼容windows
* minWeex 打包问题
* 打包js的时候 混淆会顺便删除map文件减少体积
* iconfont 打包路径问题
* 修改 eros NODE_env 搭配修复eros debug问题
* 支持stylus
* fix diff bug
* build assets 时候多调用了打 iconfont md5 方法
