### camera（摄像头相关）

#### scan** **

> 掉起 app 扫一扫。

示例：

```js
this.$camera.scan((resData) => {
    console.log(resData.data)
})
```

扫一扫的结果会通过 resData.data 返回。

