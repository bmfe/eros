### bmCamera

> 扫一扫、拍照/系统相册选图并上传图片

**引用方式**

```js
var camera = weex.requireModule('bmCamera')
```

**API**

* 扫一扫：`scan(callback)`

```js
camera.scan(function(resDate){
    //
    // {text:"扫码结果"}
    //
})
```

* 拍照/相册选图并上传服务器\(支持多选\)：`uploadImage(info,callback)`

```js
camera.uploadImage({
    maxCount: 9,                 // 一次最多可选择图片数量 最大支持9张
    imageWidth: 1000,            // 图片宽度（根据宽度按比例裁剪）可以不传默认为 800px
    allowCrop,                   // 是否允许编辑（只有当 maxCount == 1时 此参数才会生效）
    params: {}		         // 上传图片附加参数可为空
},function(resData){          
    //  图片由客户端上传至图片服务器,上传完毕后通过回调方法将url传给js  
    //  resData 
    //     {
    //      resCode: 0,
    //      msg: '',
    //      data: ['url1','url2']  //图片地址集合
    //   }
})
```



