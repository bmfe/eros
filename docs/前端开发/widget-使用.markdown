#### widget {#widgetdef}

widget** **是前端基于客户端拓展出来的 modules 相关功能的二次封装，以vue插件的形式，全部注入到客户端的 framework Vue 原型上，我们直接通过 vue** **中的 this** **来快速使用。主要目的是为了简化使用逻辑，聚合更高的业务关注度。

`widget`其实就是内嵌到本木基础库中的一个`js bundle`，在每打开一个`页面`（加载一个`js bundle`）的时候就会预先执行，每个页面都会执行的原因是，客户端的 `framework Vue`每次生成一个`vue实例`都是通过`新的Vue构造函数`来生成的，而我们把`widget`放在客户端内置的好处是，每个页面打包的js bundle体积会小，不会产生冗余代码。

#### 使用方法

直接在 this 上调用，比如我们发一个 **get 请求。**

```js
this.$fetch({
    method: 'GET',
    name: 'COMMON_getInfo' //当前是在apis中配置的别名，你也可以直接绝对路径请求 url: http://xx.xx.com/xxx/xxx
    data: {
        count: 1
    }
}).then(resData => {
    // 成功回调
    console.log(resData)
}, error => {
    // 错误回调
    console.log(error)
})
```

下面看看我们到底拓展了哪些 widget。

