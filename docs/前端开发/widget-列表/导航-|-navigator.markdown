### Navigator（原生导航条相关操作）

设置原生导航条的部分属性。

#### setNavigationInfo

> 设置导航条相关信息。

示例：

```js
this.$navigator.setNavigationInfo({
    title: '',                              // 中间区域标题    
    navShow: true,                          // 是否显示导航栏
    statusBarStyle: 'Default'               // 状态栏文字颜色：Defautl 黑色， LightContent 白色
}, () => {
     // 点击回调
    console.log("您点击了导航条中间区域。")
})
```

#### setLeftItem** ** {#storageset}

> 设置导航条左侧区域相关属性和方法。

示例：

```js
this.$navigator.setLeftItem({
    text: '',                               // 展示的文字 (和图片 二选一)    
    textColor: '',                          // 文字颜色 (默认为白色)
    fontSize: '32',                         // 字号（默认32px）
    fontWeight: 'normal',                   // 是否加粗（默认不加粗）
    image: ''                               // 展示的图片url (和文字 二选一，文字优先级更高)
}, () => {
     // 点击回调
    console.log("您点击了导航条左侧区域。")
})
```

#### setRightItem** ** {#storageget}

> 设置导航条右侧区域相关属性和方法。

示例：

```js
this.$navigator.setRightItem({
    text: '',                               // 展示的文字 (和图片 二选一)    
    textColor: '',                          // 文字颜色 (默认为白色)
    fontSize: '32',                         // 字号（默认32px）
    fontWeight: 'normal',                   // 是否加粗（默认不加粗）
    image: ''                               // 展示的图片url (和文字 二选一，文字优先级更高)
}, () => {
     // 点击回调
    console.log("您点击了导航条右侧区域。")
})
```

#### setCenterItem

> 设置导航条中间区域相关属性和方法。

示例：

```js
this.$navigator.setCenterItem({
    text: '',                               // 展示的文字 (和图片 二选一)    
    textColor: '',                          // 文字颜色 (默认为白色)
    fontSize: '32',                         // 字号（默认32px）
    fontWeight: 'normal',                   // 是否加粗（默认不加粗）
    image: ''                               // 展示的图片url (和文字 二选一，文字优先级更高)
}, () => {
     // 点击回调
    console.log("您点击了导航条中间区域。")
})
```



