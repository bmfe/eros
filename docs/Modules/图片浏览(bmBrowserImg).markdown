### bmBrowserImg

> 图片浏览器

**引用方式**

```js
var browser = weex.requireModule('bmBrowserImg')
```

**API**

* 调起图片浏览器 `open(info,callback)`

```js
// 示例
browser.open({
    index: 2,                     // 所点击图片下标
    images: ['1','2','3'],        // 图片的网络地址
    type: 'network'               // 图片的来源,目前只支持网络图片 
}, function(resDate){
    // resDate 为空
})
```

* 关闭图片浏览器 `close()`

```js
// 示例
// 关闭图片浏览器 一般情况下js端不需要调用此接口
browser.close()
```



