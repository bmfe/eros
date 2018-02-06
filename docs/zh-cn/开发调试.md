### 报错相关
由于 weex debug 中不能支持 appboard 注入到业务的 js bundle 中，所以会导致 widget 方法找不到，如果需要 debug 调试 目前暂时的方法是在 debug 页面添加。
```js
if (process.env.NODE_ENV === 'development') require('Config') // 添加 appboard 路径即可 默认 Config

export default {
   ...
}
```
这样会增加 eros dev 生成的包体积，但最终在 build 的时候是不会打包进去的，但可能会使 eros dev 的时候，声明周期执行两次，打到内置包中便不会出现这样的情况，后续会优化，请放心，不影响程序运行。
### 实时预览

简述：在实际开发过程中，实时预览功能必不可少，我们的客户端工程集成了开发调试工具方便我们实时查看效果，默认情况下 app 是从本地（app工程中内置的 js bundle）加载 js 资源文件，你第一次看到的 demo 也就是内置包的 demo，只需点击调试按钮，将拦截器（Interceptor）关闭，就会切换为从服务器加载 js，然后在电脑上起服务 **`eros dev`**。

### **配置 host**

修改本机hosts文件 在里面添加一条`127.0.0.1 app.weex-eros.com` 将`app.weex-eros.com`替换为你在 eros.native.js 中填写的 jsServer 域名。

* windows 修改方法请戳这里 [教程](https://jingyan.baidu.com/article/b907e627d86be046e6891c41.html)

* mac/linux 修改方法: 打开终端输入命令 `$ sudo vi /etc/hosts` 在最后一行添加即可 

### **开启eros 开发服务**

在项目根目录中起本地服务：

```
$ eros dev
```

如果起 dev 服务报错，可以查看 Q&A 。


### **关闭拦截器**

当我们运行起模拟机的时候点，击屏幕上的调试按钮-&gt; 设置项 -&gt; Interceptor 关闭拦截器，然后点击刷新或者双击调试按钮刷新页面（安卓端需要重新进app），就会重新从服务器加载最新的 js 文件。

**Interceptor 拦截器**：拦截器的主要作用就是控制加载js文件的方式，默认是打开，会从当前工程内置的资源中加载js文件（iOS就是从当前app的沙盒目录中加载），关闭拦截器后，就会从之前在 eros.native.js 中配置的 jsServer 服务器加载js资源文件；

注：

> 1. 使用Android模拟器调试需要设置模拟器代理指向起服务的电脑[Android开发调试](https://github.com/bmfe/eros-template/wiki/Android-%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA)；  
> 2. 如果使用真机访问dev服务，同样需要将手机的代理指向起服务的电脑，并打开Charles；

![](https://img.benmu-health.com/gitbook/AppShow.gif)

> tips: 双击调试按钮即可刷新

### 开发调试

**启动调试服务器**  
执行命令：`weex debug`  
执行完毕后会自动唤起Chrome浏览器打开调试主页。![](https://img.benmu-health.com/gitbook/import11.png)

**连接调试服务器**  
在App中，点击屏幕上的调试按钮在弹出框中点击`调试`

![](./image/debug.png)
然后调试服务器就会跟app建立连接关系，此时屏幕上会显示当前的调试信息如下图：（注，手机上此时会显示一个空白页面，点击返回即可），页面下面有关于如何调试的介绍。  
![](https://img.benmu-health.com/gitbook/import1.png)

**Inspector**

Inspector 能够用来查看 Element  NetWork  Console log  ScreenCast  BoxModel  Native View 等。

Console log![](https://img.benmu-health.com/gitbook/impor22t.png)Element![](https://img.benmu-health.com/gitbook/import33.png)

**Debugger**

调试器用来调试 Weex 中的 JS 代码，能够设置断点、查看调用栈。

调试![](https://img.benmu-health.com/gitbook/import4.png)

