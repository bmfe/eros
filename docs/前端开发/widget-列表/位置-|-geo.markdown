### geo（当前位置信息）

#### get** **

> 获取当前位置坐标。

示例：

```js
this.$geo.get((resData) => {
    this.lat = resData.data.locationLat
    this.lng = resData.data.locationLng
})
```



