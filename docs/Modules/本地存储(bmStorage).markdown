### bmStorage

> 数据存储

**引用方式**

```js
var storage = weex.requireModule('bmStorage')
```

**API**

* 存数据：

```js
// 异步方法：setData(key,data,callback)
storage.setData('key','内容'，function(resData){
    // resData
})

// 同步方法：setDataSync(key,data)
var resData = storage.setData('key','内容')
```

* 取数据：

```js
// 异步方法：getData(key,callback)
storage.getData('key',function(resData){
    // resData
})

// 同步方法：getDataSync(key)
var resData = storage.getData('key')
```

* 删除一条数据：

```js
// 异步方法：deleteData(key,callback)
storage.deleteData('key',function(resData){
    // 
})

// 同步方法: deleteDataSync(key)
var resData = storage.deleteData('key')
```

* 删除所有数据: 

```js
// 异步方法：removeData(callback)
storage.removeData(function(resData){
    //
})

// 同步方法：removeDataSync()
var resData = storage.removeData()
```



