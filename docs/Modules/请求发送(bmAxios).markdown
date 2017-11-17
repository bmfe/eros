### bmAxios

> 用于发送请求（GET、POST\)

**引用方式**

```js
var axios = weex.requireModule('bmAxios')
```

**API**

* 发送请求 `fetch(info,callback)`

```js
// 示例
axios.fetch({
    method: 'GET'                // 请求类型 GET、POST、HEAD、PUT、DELETE、PATCH
    url: 'http://xxx/xxx',       // 请求api,完整地址
    header: {}                   // 自定义请求头requestHeader
    data: {}                     // 请求参数
}, function(resData){                        
    // resData 数据    
})
```



