### bmFont

> 修改字体大小功能，扩展了 WXTextComponent 功能，支持一键修改所有组件的字体大小，目前我们定义了三种字体大小，`NORM` 标准, `BIG` 大字体， `EXTRALARGE` 特大, 原理是在 css 定义的 fontSize 基础上，分别放大 1倍，1.15倍、1.3倍；

**引用方式**

```js
var bmFont = weex.requireModule('bmFont')
```

**API**

* 改变字体大小：`changeFontSize(info,callback)`

```js
bmFont.changeFontSize({
    fontSize: 'BIG',    // 'NORM' 标准, BIG 大， EXTRALARGE 特大
}, function(resData){
    //resdata 
    //  {
    //       resCode: 0,
    //       msg: '',
    //       data: {
    //            scale: '1||1.15||1.3',   // 返回当前放大倍数
    //            fontSize: 'BIG'            // 'NORM' 标准, BIG 大， EXTRALARGE 特大
    //       }
    //  }   
})
```

* 获取当前字体大小：`getFontSize(callback)`

```js
bmFont.getFontSize(funtion(resData){
    //resdata 
    //  {
    //       resCode: 0,
    //       msg: '',
    //       data: {
    //            scale: '1||1.15||1.3',   // 返回当前放大倍数
    //            fontSize: 'BIG'            // 'NORM' 标准, BIG 大， EXTRALARGE 特大
    //       }
    //  }  
})
```



