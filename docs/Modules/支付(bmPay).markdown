### bmPay

> 目前只集成了微信支付，记得在 config.json 中配置好 appId 及 appSecret

**引用方式**

```js
var pay = weex.requireModule('bmPay')
```

**API**

* 调用支付：`payByWechat(info,callback)`

```js
// 示例
pay.payByWechat({
    // 微信支付所需必要参数，参考官方文档
    sign:'',
    timestamp:'',
    noncestr:'',
    partnerid:'',
    prepayid:'',
    packageValue:''
}, function(resData){
    // 支付结果
})
```



