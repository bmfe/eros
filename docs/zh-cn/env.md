# Environment
以下为不同 OS 开发不同客户端所需环境。

### hosts
为了真机调试，我们推荐配置 `hosts` 文件，添加如下地址，当然您也可以默认为公司固定资源文件访问地址，这样通过证书还能进行线上抓包分析问题。
```
127.0.0.1   app.weex-eros.com
```
### 脚手架所需环境:
darwin: 
* Node.js (>=6.x), npm version 4+ 

windows: 
* Git bash 

> 因为脚手架依赖了`node-sass`，安装失败有很多解决办法，可自行查找。

### 脚手架安装:
```
$ npm i eros-cli -g
```
如果你在中国地区，我们还是推荐您使用 [cnpm](https://npm.taobao.org/) 安装或者直接修改为`淘宝源`。
```
$ cnpm i eros-cli -g 
```
### darwin 开发 iOS:
* Xcode
* CocoaPods
    * 升级 Ruby 环境：`$ sudo gem update --system`
    * 移除现有 Ruby 镜像：`$ gem sources --remove https://rubygems.org/`
    * 添加ruby-china镜像：`$ gem source -a https://gems.ruby-china.org/`
    * 安装 CocoaPods：`$ sudo gem install cocoapods`
    * 如果以上命令报错则执行：`$ sudo gem install -n /usr/local/bin cocoapods --pre`
    * 最后执行：`$ pod setup 过程比较漫长，请耐心等待执行完成`

### darwin/windows/linux 开发 Android:
* 下载并安装 [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)。
* 下载并安装 [Android Studio](https://developer.android.google.cn/studio/index.html)。

JDK 是 JAVA 开发包，AndroidStudio 是 Android开发IDE，这两项不再做过多介绍。

> 如果您使用虚拟机进行跨平台开发，也需要配置好对应平台的所需环境。

### 模拟器安装
* ios 开发中 xcode 已经自带了模拟器
* android 开发者推荐下载 `Genymotion`模拟器

>当然市面上的如 `夜神模拟器` 也是可以的，[调试教程](http://blog.csdn.net/qq_34653571/article/details/53007044?locationNum=14&fps=1)，但是在 weex 0.17 中会出现 weex 实例化失败的问题，所以还是推荐 `Genymotion`。
