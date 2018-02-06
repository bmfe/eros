## 模板更新方法
```
$ eros update template your_want_update_path
```
> `your_want_update_path` 是你想要覆盖的路径，可以是文件可以是文件夹，请谨慎使用，如果您里面文件夹已经做修改还是建议您先提交或者直接参考 github 上的模板代码进行修改。


## 2018-02-01
* add scripts/ios.install.sh
* add scripts/android.install.sh
* add scripts/ios.update.sh
* add scripts/android.install.sh

## 2018-01-24
* 全新的 demo
* fix widget 中 storage 返回格式不统一的问题
* fix widget 中 this.$image.upload 参数问题

## 2018-01-05
widget拓展 : 
* $tools.scan 扫一扫

* $image.camera 照相返回图片地址
* $image.pick   选择本地图片 返回本地图片地址 (可直接在 image 标签 src 中使用)
* $image.preview  预览图片 可预览本地和线上图片
* $image.upload 上传图片
* $image.pickAndUpload 选取本地图片并上传

* $router.openBrowser 用内置浏览器打开一个网址

* $coms.call 打电话
* $coms.sms 发消息
* $coms.contacts 打开联系人页面

> 重要修改：原 $image.upload 修改为 $image.pickAndUpload 选取本地图片并上传


## 2017-12-29
* 模板更新： widget 更新优化
* 模板更新： 移除__eros__文件夹 不再需要
* 模板更新： 支持 npm install weex-ui 来使用

## 2017-12-20
widget 中对应添加 camera module 上传图片自定义 url 的字段。
