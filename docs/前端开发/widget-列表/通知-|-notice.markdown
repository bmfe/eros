### notice（通知）

#### **alert 单按钮弹窗**

示例：

```js
this.$notice.alert({
    title: '这是一个弹窗',
    message: '消息',
    okTitle: '确认',
    callback() {
        // 点击确认按钮的回调
    }
})
```

Api：

* **title（String）**：弹窗标题。
* **message（String）**：弹窗信息。
* **okTitle（String）**：弹窗按钮文案。
* **callback（Function）**：弹窗点击按钮回调。

#### **confirm 双按钮弹窗**

示例：

```js
this.$notice.confirm({
    title: '这是一个弹窗',
    message: '消息',
    okTitle: '确认',
    cancelTitl: '取消',
    okCallback() {
        // 点击确认按钮的回调
    },
    cancelCallback() {
        // 点击取消按钮的回调
    }

})
```

Api：

* **title（String）**：弹窗标题。**\(选填\)**
* **message（String）**：弹窗信息。**\(选填\)**
* **okTitle（String）**：弹窗按钮文案。**\(选填\)**
* **cancelTitle（String）**：取消按钮文案。**\(选填\)**
* **okCallback（Function）**：弹窗点击确认按钮回调。**\(选填\)**
* **cancelCallback（Function）**：弹窗点击取消按钮回调。**\(选填\)**

#### loading 加载提示

示例：

```js
// 显示loading
this.$notice.loading.show("loading展示文案")

// 隐藏loading
this.$notice.loading.hide()
```

Api：

* **show（调用）**：显示 loading。**\(方法\)**
* **hide（调用）**：隐藏 loading。**\(方法\)**

#### toast 吐丝提示

示例：

```js
this.$notice.toast({
    message: '消息'
})
```

Api：

* **message（String）**：吐丝信息。**\(必填\)**
* **duration（Number）**：吐丝保留时长，默认不传会根据 message 大小自动计算显示时长。



