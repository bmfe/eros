### font（字体相关）

* **changeFontSize** 改变字体大小。

* **getFontSize** 获取当前字体大小。

---

#### **changeFontSize ** {#storageset}

> 改变字体大小。

示例：

```js
this.$font.changeFontSize({
    fontSize: 'NORM'
}).then(resData => {
    // 收起成功的回调
}, error => {})
```

Api:

* **fontSize**（**String**）：字体大小
  * NORM：标准。
  * BIG：大。
  * EXTRALARGE：特大。

#### **getFontSize ** {#storageget}

> 获取当前字体大小。

示例：

```js
this.$font.getFontSize( resData => {
    console.log(resData)
})
```







