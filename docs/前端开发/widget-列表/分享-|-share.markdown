### share（分享相关）

示例：

```js
this.$share({
    title:'',                                     // 分享出去的 title
    content:'',                                   // 内容
    url: ''                                       // 用户点击后跳转 url
    image: '',                                    // 图片url    
    platforms: ['Pasteboard','WechatSession']     // 传空的话默认全部，目前  朋友圈，朋友，复制链接
}).then(resData => {
    // 成功的回调
}, error => {
    // 失败的回调
})
```

Api：

* **title**（**String**）：分享出去的 title。
* **content**（**String**）：分享的内容简述。
* **url**（**String**）：用户点击后跳转 url。
* **img**（**String**）：图片 url。
* **plaforms**（**Array**）：平台
  * **Pasteboard**：剪切板。
  * **WechatSession**：微信好友。
  * **WechatTimeLine**：分享至朋友圈。



