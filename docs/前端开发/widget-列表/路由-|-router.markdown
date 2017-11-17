### $router（路由）

#### **config/pages.js 路由配置**

我们在pages.js中配置页面对应js的别名，和导航条显示文案。

> **主页的导航条默认是隐藏的，如果需要，便在bmRouter的生命周期 viewWillAppear中调用this.$nav.setNavigationInfo来自行设置。**

```js
// config/pages.js
export default {
    // 首页
    'home': {
        url: '/pages/home/index.js',
    },
    'router.test': {
        // 不设置title自动隐藏导航
        title: '路由测试页面',
        url: '/pages/home/tab2/components/router/index.js',
    },
    'demo': {
        url: '/pages/demo/index.js',
        title: '新闻'
    }
}
```

Api：

* **url（String）**：页面相对 js 地址，从 pages/ 下写即可。
* **title（String）**：页面导航显示文案，默认不传或为空则自动隐藏导航条。

---

#### $router API：

* **$router.open**：跳转到一个页面。
* **$router.back**：返回到之前打开的某个页面。
* **$router.getParams**：获得open时候传递的参数。
* **$router.refresh**：重载当前weex实例。
* **$router.setBackParams**：为返回的页面传递参数。
* **$router.toWebView**：跳转一个webView页面。
* **$router.toMap**：跳转高德地图。
* **$router.toCallPhone**：跳转拨打电话页面。

#### _**$router.open：**_**跳转到一个页面**。

示例：

```js
this.$router.open({
    name: 'demo',
    type: 'PUSH'
})
```

Api：

* **name（String）**：跳转页面别名，在 **config/pages.js自行配置。**
* **type（String）**：页面打开方式，默认是`PUSH`。
  * `PUSH`右侧打开。
  * `PRESENT`底部弹出。
* **params（Object）**：需要传递的参数。
* **canBack（Boolean）**：目标页面是否可以返回起始页面。
* **navShow（Boolean）**：是否显示导航条。
* **navTitle（String）**：导航条文案。
* **statusBarStyle（String）**：状态栏\(电量，信号\)样式。

  * `Default`黑色。

  * `LightContent` 白色。

* **backCallback（Function）**：页面返回时的回调。

* **isRunBackCallback（Boolean）**：是否触发页面返回时的回调，默认触发。

#### _**$router.back：返回之前的路由页面。**_

示例：

```js
this.$router.back({
    length: 2,
    type: 'PUSH',
    callback() {
        // 返回成功回调
    }
})
```

Api：

* **length（Number）**：返回之前的第几个页面，默认是 `1`**。**
* **type（String）**：页面打开方式，默认是`PUSH`。

  * `PUSH`右侧打开。
  * `PRESENT`底部弹出。

* **callback（Function）**：页面返回时的回调。

#### _**$router.getParams 获取传递的参数。**_

示例：

```js
this.$router.getParams().then(resData => {
    console.log(resData)
})
```

resData.data 是你在上一个页面中调用 $router.open 跳转传递的 params 参数。

#### _**$router.refresh**_** **_重新加载并渲染当前 js ，并重新走生命周期。_

示例：

```js
this.$router.refresh()
```

#### _**$router.toWebView 打开一个WebView页面。**_

示例：

```js
this.$router.toWebView({
    url: '',                                    // 页面 url
    title: '',                                  // title
    navShow: true,                              // 是否显示native端导航栏，默认是true
    shareInfo: {                                // webView 添加了分享功能，如需使用分享请传入一下信息（目前就支持分享到微信朋友圈，微信好友其他如有需要后续添加）
        title: '',                              // 分享的 title
        content: '',                            // 分享的简介
        image: '',                              // 分享的小图片
        url: ''                                 // 分享跳转 url
    }
})
```

Api：

* **url（String）**：WebView地址**。**
* **title（String）**：导航条标题
* **navShow（Boolean）**：需要传递的参数。
* **shareInfo（Object）**：目标页面是否可以返回起始页面。
  * **title（String）**：分享的 title。
  * **content（String）**：分享的简介。
  * **image（String）**：分享的图片链接。
  * **url（String）**：分享的跳转url。

#### _**$router.toMap 跳转地图页面。**_

示例：

```js
this.$router.toMap({
    type:'NAVIGATION', //type类型：NAVIGATION(表现方式为：地图上添加起点终点标示大头针，终点标示上面有个导航的按钮)
    title: '页面标题', //页面标题
    navigationInfo: {
        title: '', //目的地名称
        address: '', //目的地地址
        longitude:'', //目的地经度
        latitude:'' //目的地纬度
    }
})
```

Api：

* **title（String）**：页面标题。
* **type（String）**：type类型：NAVIGATION\(表现方式为：地图上添加起点终点标示大头针，终点标示上面有个导航的按钮\)。
* **navigationInfo（Object）**：目标页面是否可以返回起始页面。
  * **title（String）**：目的地名称。
  * **address（String）**：目的地地址。
  * **longitude（String）**：目的地经度。
  * **latitude（String）**：目的地纬度。

#### _**$router.toCallPhone 跳转拨打电话页面。**_

示例：

```js
this.$router.toCallPhone('110')
```

Api：

* **phone（String）**：电话号码。



