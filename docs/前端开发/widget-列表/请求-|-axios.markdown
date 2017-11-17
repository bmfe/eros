### axios（请求）

**配置请求config/apis.js**

在`apis`中的`AJAX_MAP`统一配置别名，`responseHandler`中配置接口返回统一配置。

> **注意：**
>
> 1.responseHandler 需要自己根据后台返回数据格式重新写逻辑
>
> 2.AJAX\_MAP 配置的别名不需要填写协议和域名部分即在config.json 中填写的 request\(url\): `http://test.weex-eros.com`
>
> 这部分会自动拼接，在示例代码的最下面；

```js
const AJAX_MAP = {
    'COMMON_getInfo': '/test/link'
}

export const responseHandler = (options, resData, resolve, reject) => {
    if (resData && resData.resCode == 0) {
        if (isFunction(options.success)) {
            options.success(resData)
        }
        resolve(resData)
    } else {
        modal.hideLoading()
        const resCode = resData.resCode
        if (resCode == 101) {
            // 不同code的不同处理
            return
        }
        if (!options.noShowDefaultError) {
            // resCode 非 0 的统一处理，且不传入 noShowDefaultError
            // 这里可以做 resData.resCode 的统一处理
            modal.alert({
                message: resData.msg,
                okTitle: '确定'
            })
        }
        if (isFunction(options.error)) {
            options.error(resData)
        }
        reject(resData)
    }
}

// 自动拼接 platform.json 中的 requestUrl
let _ajaxMap = {}
for ( var i in AJAX_MAP ){
    if( !_ajaxMap[i] ) _ajaxMap[i] = undefined
    _ajaxMap[i] = weex.config.env.request + (AJAX_MAP[i])   // 拼接完整请求url
}
export const ajaxMap =  _ajaxMap
```

**发送请求 **`$fetch(info)`

示例：

```js
// 示例
this.$fetch({
    method: 'GET',    
    name: 'COMMON_getInfo' //当前是在apis中配置的别名，你也可以直接绝对路径请求 http://xx.xx.com/xxx/xxx
    data: {
        count: 1
    }
}).then(resData => {
    // 成功回调
    console.log(resData)
}, error => {
    // 错误回调
    console.log(error)
})
```

Api：

* **method（String）**：请求方式，分为`GET、POST、HEAD、PUT、DELETE、PATCH`。
* **name（String）**：请求地址，如果已经在config/apis.js下配置了接口的请求别名，则可以直接调用别名。
* **url（String）**: 如果你不想配置别名，可以直接输入相对路径或者绝对路径来请求。
* **data（Object）**：请求携带的参数。
* **header（Object）**：当前请求的请求头设置。
* **then（Promise）**：`Promise`接口返回时候会触发。



