### bmAuth

> 微信登录，指纹验证

**引用方式**

```js
var auth = weex.requireModule('bmAuth')
```

**API**

* 调用微信登录认证 `wechat(info,callback)`

```js
// 示例
auth.wechat({
    // 预留参数 目前传空
}, function(resDate){
    // resDate
    // {
    //    resCode:0,
    //    msg:"微信授权成功"
    //    data:{
    //        name:'小花同学',
    //        uid:'微信返回唯一标示'
    //    }
    // }
})
```

* 是否支持指纹认证 `canUseTouchId()`

```js
// 示例 
// 注：此方法是同步方法
var resData = auth.canUseTouchId()
    // resDate
    // {
    //    resCode:0,       // 不支持返回 9 
    //    msg:"此设备支持 Touch Id"
    //    data:{}
    // }
```

* 调用指纹认证 `touchId()`

```js
// 示例
auth.touchId({
    title:'登录认证'    // 指纹认证弹窗标题
}, function(resData){
    // resDate
    // {
    //    resCode:0,       // 认证失败返回 9 
    //    msg:"指纹认证成功"
    //    data:{}
    // }
})
```



