### pay（支付相关）

目前仅支持微信支付。

#### wechat** **

> 调起微信支付。

示例：

```js
this.$pay.wechat({
    // 微信支付所需必要参数，参考官方文档
    sign:'',
    timestamp:'',
    noncestr:'',
    partnerid:'',
    prepayid:'',
    packageValue:''
}).then(resData => {
    // 成功的回调
}, error => {
    // 失败的回调
})
```



