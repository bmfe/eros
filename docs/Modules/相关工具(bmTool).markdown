### bmTool

> 一些方法

**引用方式**

```js
var tool = weex.requireModule('bmTool')
```

**API**

* 辞退键盘: `resignKeyboard(callback)`

```js
tool.resignKeyboard(function(resData){          // 回调
    // 结果的回调  
    //  resData = {
    //      resCode: 0 || 9,  // 是否成功
    //      msg: nil,
    //      data: nil
    //  }
});
```

* 判断是否安装微信：`isInstallWXApp(callback)`

```js
tool.isInstallWXApp(function(resData){          // 回调
    // 结果的回调  
    //  resData
    // {
    //      resCode: 0 || 9,  // 0成功 9失败
    //      msg: nil,
    //      data: nil
    //  }
});
```

* 获取 个推SDK的 cid：`getCid(callback)`

```js
tool.getCid(function(resData){
    // 结果的回调  
    //  resData = {
    //      resCode: 0 || 9,  // 是否成功
    //      msg: nil,
    //      data: {cid:'4701510e9b7753c98077d87661aaxxs'} 如果获取不到 整个data 字段是nil
    //  }
});
```

* 赋值内容到剪切板：`copyString(string,callback)`

```js
tool.copyString('复制的内容', function(resData){
    // 成功的回调
})
```

* 添加全局水印\(在 Window 上添加\)：`addWatermark:(String)`

```js
tools.addWatermark('我是水印')
```



