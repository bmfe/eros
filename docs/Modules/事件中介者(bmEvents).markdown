### bmEvents

> 事件通知

**引用方式**

```js
var event = weex.requireModule('bmEvents')
```

**示例**

```js
//注册事件，可多次响应
event.on('eventName',function(params){
    // params 为触发该事件所传的参数
});

//注册事件，只响应一次
event.once('eventName',function(params){
    // params 为触发该事件所传的参数
});

//触发事件
event.emit('eventName',params);

//取消事件
event.off('eventName',function(result){
    console.log("取消该事件");
});

//取消全部事件
event.offall();
```

### globalEvent （扩展）

> globalEvent 是用于监听持久性事件的，我们添加了原生页面生命周期事件
>
> API `addEventListener(String eventName, String callback)`
>
> 事件（eventName）：`viewWillAppear`、`viewDidAppear`、`viewWillDisappear`、`viewDidDisappear`，分别对应 页面将要展示、页面已经展示、页面即将消失、页面已经消失;
>
> 返回参数 type（callback）：`open`、`back`、`refresh`,分别对应 页面首次打开，返回页面，刷新页面

```js
// 示例：监听 viewWillAppear 事件
var globalEvent = weex.requireModule('globalEvent');
globalEvent.addEventListener("viewWillAppear", function(type) {
    if (type === 'open') {
        // 首次打开页面调用
    } else if (type === 'back') {
        // 返回页面调用
    } else if (type === 'refresh') {
        // 刷新页面调用
    } 
})
```






