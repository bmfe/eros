### bmModal

> 弹窗相关： alert、toast 等

**引用方式**

```js
var modal = weex.requireModule('bmModal')
```

**API**

* 警告弹窗：`alert(info,callback)`

```js
modal.alert({
    message: '我是一个弹窗',     // 弹窗内容
    okTitle: '确定',            // 确定按钮文字
    title:'标题'                // title
}, function(){
    // 点击按钮的回调
})
```

* 确定弹窗：`confirm(info,cancelCallback,okCallback)`

```js
modal.confirm({
    message: '我是一个弹窗',       // 弹窗内容
    cancelTitle: '取消',          // 取消按钮文字
    okTitle: '确定'               // 确定按钮文字
    title: ''   
}, function(){
    // 点击取消按钮回调 
}, function(){
    // 点击确定按钮回调
});
```

* 提示框：`toast(info)`

```js
modal.toast({
    message: '提示信息'    // 展示内容
})
```

* Loading提示框：`showLading(info)`

```js
// 调用方式
modal.showLoading({
    message: '加载中...'   // loading 文字，可为空
});
```

* 移除 Loading弹窗：`hideLoading()`

```js
modal.hideLoading()
```



