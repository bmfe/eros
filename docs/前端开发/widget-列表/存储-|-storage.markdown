### Storage（本地化存储）

我们在 app 端**异步的存储**一些数据信息，并已经为您封装并返回`Promise`。

#### set** ** {#storageset}

> 设置存储信息。

示例：

```js
this.$storage.set('name', 'weex-eros')
.then(resData => {}, error => {})

this.$storage.set('info', {
    name: 'weex-eors'
})
.then(resData => {}, error => {})
```

#### get** ** {#storageget}

> 获取存储信息。

示例：

```js
this.$storage.get('name').then(resData => {
    console.log(resData) // weex-eros
})
```

#### delete {#storagedelete}

> 删除一条信息。

示例：

```js
this.$storage.delete('name').then(resData => {
    console.log("删除成功") 
})
```

#### removeAll {#storageremoveall}

> 删除所有本地信息。

示例：

```js
this.$storage.removeAll().then(resData => {
    console.log('本地所有持久化存储的数据都已被清空。')
})
```



