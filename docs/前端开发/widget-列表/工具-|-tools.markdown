### tools（工具相关）

* **resignKeyboard** 收起键盘。

* **isInstallWXApp** 是否安装微信。

* **getCid** 获取cid 个推的app标识。

* **copyString** 复制内容到剪切板。

#### resignKeyboard** ** {#storageset}

> 收起键盘。

示例：

```js
this.$tools.resignKeyboard().then(resData => {
    // 收起成功的回调
}, error => {})
```

#### **isInstallWXApp ** {#storageget}

> 是否安装微信。

示例：

```js
this.$tools.isInstallWXApp().then(resData => {
    // 成功的回调
}, error => {})
```

#### getCid {#storagedelete}

> 获取cid 个推的app标识。

示例：

```js
this.$tools.getCid().then(resData => {
    // 成功的回调
}, error => {})
```

#### copyString

> 复制内容到剪切板。

示例：

```js
this.$tools.copyString("weex-eros").then(resData => {
    // 复制成功的回调
}, error => {})
```



