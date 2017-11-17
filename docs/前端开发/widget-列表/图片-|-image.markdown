### image（图片相关）

#### upload** **

> 上传图片。

**请先配置项目根目录下 config.json 中 url.image 图片上传的地址。**

示例：

```js
this.$image.upload({
    maxCount: 9,                 // 一次最多可选择图片数量 最大支持9张 默认是1
    imageWidth: 1000,            // 图片宽度（根据宽度按比例裁剪）可以不传默认为 800px
    allowCrop                    // 是否允许编辑（只有当 maxCount == 1时 此参数才会生效） 默认是false
})
.then(resData => {
    console.log(resData.data)    // [url1, url2...]
}, error => {
    console.log(error)
})
```

Api：

* **maxCount**（**Number**）：一次最多可选择图片数量 最大支持`9`张 默认是`1`。
* **imageWidth**（**Number**）：图片宽度（根据宽度按比例裁剪）可以不传默认为 `800px` 默认是`0`。
* **allowCrop**（**Boolean**）：是否允许编辑（只有当 `maxCount == 1`时 此参数才会生效） 默认是 `false`。

#### borwser

> 调用图片浏览器，浏览图片。

示例：

```js
this.$image.browser({
    index: 2,                     // 所点击图片下标
    images: ['1','2','3'],        // 图片的网络地址
    type: 'network'               // 图片的来源,目前只支持网络图片 
})
```

Api：

* **index**（**Number**）：所点击图片下标。
* **images**（**Array**）：图片的网络地址集合。
* **type**（**String**）：图片的来源,目前只支持网络图片。



