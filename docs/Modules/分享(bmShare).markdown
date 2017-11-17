### bmShare

> 分享，目前支持 微信朋友圈，微信好友，赋值至剪切板

**引用方式**

```js
var share = weex.requireModule('bmShare')
```

**API**

* 分享：`share(info,successCallback,failedCallback)`

```js
share.share({
    title:'',                         // 分享出去的 title, 如 本木医疗
    content:'',                     // 内容，是一家医疗公司
    url: ''                         // 用户点击后跳转 url
    image: '',                        // 图片url
    platforms: ['Pasteboard','WechatSession']     // 传空的话默认全部，目前  朋友圈，朋友，复制链接
},function(resData){
    // 成功回调
},function(resData){
    // 失败回调
})

// 目前支持的分享平台
platforms:[
    Pasteboard,             // 剪切板
    WechatSession,          // 微信好友
    WechatTimeLine          // 分享至朋友圈
]
```



