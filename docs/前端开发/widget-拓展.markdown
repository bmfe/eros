### 拓展

> 当我们暴露出来的widget api 已经无法满足您时，你可以便可以自行基于客户端暴露出来的 modules 来拓展自己的 widget 。

假如我们要添加一个基于 bmModal module 创建的 widget 。

首先添加 **widget/toast.js** 。

![](https://img.benmu-health.com/gitbook/widgetToast.png)

**toast.js **中用`vue插件`的写法来写。

```js
var modal = weex.requireModule('bmModal'),
    Toast = Object.create(null)

Toast.install = (Vue, options) => {
    Vue.prototype.$toast = (options) => {
        if(!options.message) return
        modal.toast({
            message: options.message,
            duration: options.duration || 2000
        })
    }
}

Vue.use(Toast)
```

toast widget 已经大功告成，您只需要引入便可以使用。

```js
// pages/hello/index.js

// 引入你的widget
import 'Widget/toast'


import Home from './index.vue'
new Vue(Vue.util.extend({ el: '#root'}, Home))
```

**index.vue** 中便可使用。

```js
this.$toast({
    message: '我自己拓展的',
    duration: 200
})
```

**如果您想覆盖，只需要在 Vue.prototype 上覆盖我们改在上去的名称即可，如 $fetch 等等。**

