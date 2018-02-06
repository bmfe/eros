写在前面：
* 请确保您已经将[基础环境](https://github.com/bmfe/eros-template/wiki/%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA)搭建完成

初始化一个eros项目:
```
$ eros init
```
更新Android 所需要的依赖库
```
$ cd eros-demo             //进入您刚刚初始化的目录 （此处以 eros-demo 为例）
$ eros install --android   // 这里不要使用sudo 权限，否则项目可能无法运行  
```
> 如果您看见  依赖库更新完成  则证明您已经安装好了依赖。
  
### 好了依赖已经安装完成下面开始导入项目：
1.点击AndroidStudio上方的**File---&gt;New---&gt;Import Project。**

![](https://img.benmu-health.com/gitbook/1505963461481.jpg)
2.找到eros在你本地的地址，选择**platforms/android/WeexFrameworkWrapper**,点击**OK。**

![](https://img.benmu-health.com/gitbook/1505963624252.jpg)
3.待项目构建完成，点击AndroidStudio上方工具栏的**Run**，即可运行项目。![](https://img.benmu-health.com/gitbook/1505963683163.jpg)

> 可能您第一次构建的时间太长您也可以尝试[解决Android Studio第一次导入项目太慢](https://www.jianshu.com/p/ba8189146a6b)。实在不行就请耐心等待Android Studio 自己构建完成吧

> 如果您并不能成功的运行起来,您可以尝试去后面看看[常见问题](https://github.com/bmfe/eros-template/wiki/Android%E7%9B%B8%E5%85%B3)。

### 如果您已可以看见页面了，其实它是一些本地的页面，如果你想尝试连接远端页面。
* 启动服务
```
$ cd eros-demo             //进入您刚刚初始化的目录 （此处以 eros-demo 为例）
$ sudo eros dev
```

* 点击手机上的调试按钮->调试页面->拦截器开关 下面的CheckBox 对勾关咯就可以连接远端页面，
  远端页面在Android 项目 app/assets目录下 eros.native.json 文件里配置。

```
   "url": {
    "request": "http://app.weex-eros.com",
    "jsServer": "http://app.weex-eros.com",
    "image": "https://lev-inf.benmu-health.com/test/xxx",
    "bundleUpdate": "http://localhosts:3001/app/check"
  }
```
>如果您的网络无法直接访问您的服务那么你可能需要配置下[代理](https://github.com/bmfe/eros-template/wiki/%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA#%E4%BB%A3%E7%90%86%E8%BD%AF%E4%BB%B6)，让手机可以直接访问到您的电脑的服务。




