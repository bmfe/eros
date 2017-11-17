### event（不同页面间的发布订阅）

> 与 weex 拓展的 globalEvent 所不同，event 主要做的是不同页面 js 之间的通讯，和 globalEvent 主要负责客户端和 js 的通讯。

举个例子，假如你有 2 个页面， A.js 和 B.js，以下简称 A B：

你在 A 中注册一个事件，并设置其回调

```
this.$event.on('AeventName', params => {})
```

这样你便可以在 B 中触发这个事件

```
this.$event.emit('AeventName')
```

当然你也可以在 A 中在注册事件之后来调用这个事件

**需要注意的是，如果你在 B 中注册，从 B 返回 A，B的实例会被销毁，事件自然也会被销毁**。

而细心的你可能会注意到，我们在项目中有个 pages/mediator 文件夹，下面有个 index.js ，他是干什么的呢？

> **mediator/index.js 会在 app 启动的时候，作为第一个 js bundle 被执行，并且常驻内存，可以在bus上绑定事件，保存数据和状态，可以做类似 sessionStore 或者 Vuex的功能，当然这些数据，状态和事件都会随着app关闭而销毁，如果需要本地持久化存储，就搭配着 this.$storage 来使用即可。（因为常驻内存，请不要在这里面进行过量存储，时不时看下你的内存使用状态）**

#### on** **

> 注册事件，可被响应多次。

示例：

```js
this.$event.on('eventName',(params) => {
    // params 为触发该事件所传的参数
});
```

#### once** **

> 注册事件，只响应一次。

示例：

```js
this.$event.once('eventName',(params) => {
    // params 为触发该事件所传的参数
});
```

#### emit** **

> 触发事件。

示例：

```js
this.$event.emit('eventName',params)
```

#### off** **

> 解绑事件。

示例：

```js
this.$event.off('eventName',(result) => {
    console.log("取消该事件");
});
```

#### offall** **

> 解绑全部事件。

示例：

```js
this.$event.offall();
```

#### 



