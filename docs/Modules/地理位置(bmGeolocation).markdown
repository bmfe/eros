### bmGeolocation

> 获取定位（坐标系：gcj02）

**引用方式**

```js
var geolocation = weex.requireModule('bmGeolocation')
```

**API**

* 接口：`getGeolocation(callback)`

```js
geolocation.getGeolocation(function(resDate){
        // resDate
        // {   
        //      locationLat: '',    纬度
        //      locationLng: ''        经度
        // }
})
```



