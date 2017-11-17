### bmNavigator

> 设置原生导航栏按钮，支持文字，或图片

**引用方式**

```js
var navigator = weex.requireModule('bmNavigator')
```

**API**

* 设置导航栏左边按钮：`setLeftItem(info,callback)`

```js
//示例
navigator.setLeftItem({
    text: '',                               // 展示的文字 (和图片 二选一)    
    textColor: '',                          // 文字颜色 (默认为白色)
    fontSize: '32',                         // 字号（默认32px）
    fontWeight: 'normal',                   // 是否加粗（默认不加粗）
    image: '',                              // 展示的图片 (和文字 二选一，文字优先级更高)
}, function(){
    // 按钮点击回调的方法 callback
}
```

* 设置导航栏右边按钮：`setRightItem(info,callback)` 调用方式与上面👆的一致；

* 设置导航栏中间的按钮：`setCenterItem(info,callback)`  调用方式与上面一致

* 设置其他信息：`setNavigationInfo(info,callback)`

```js
navigator.setNavigationInfo({
    title: '',                              // 标题    
    navShow: false,                         // 是否显示导航栏
    statusBarStyle: 'Default',              // 状态栏文字颜色：Defautl 黑色， LightContent 白色
},function(resData){
    // 预留
})
```



