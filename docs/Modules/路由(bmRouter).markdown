### bmRouter

> bmRouter，主要用来处理页面的跳转，传值等操作

**引用方式**

```js
var router = weex.requireModule('bmRouter')
```

**API**

* 打开新的页面`open(info, callback)`

```js
// 示例：
require('@weex-module/bmRouter')
router.open({
    url: '/pages/index/index.js',                 // 页面对应的 js 地址(注意路径从 /pages/ 开始)
    type: '',                                     // 客户端定义动态类型，默认值为 PUSH 1. PUSH (将页面压栈到当前容器栈) 2.PRESENT （新建容器栈在进行压栈,从下面弹出新页面）3.TRANSLATION (动画类似QQ的侧滑抽屉效果) 
    params: {},                                   // 传到下一个页面的参数，params 通过 router.getParams(callback) 获取 
    canBack: true,                                // 是否需要返回按钮
    navTitle: '',                                 // 页面标题
    navShow: true,                                // 是否显示原生导航栏
    statusBarStyle: 'Default||LightContent',      // 系统状态栏文字颜色 1.Default：黑色， 2.LightContent: 白色 
    isRunBackCallback: true                       // 为true时，用户点击返回（或Android物理返回按钮）时回调下面的callback方法，native端不做页面跳转
}, function(){                                
        // callback   
});
```

* 获取上个页面传的参数 `getParams(callback)`

```js
// 示例
router.getParams(function(params){
    // 获取参数信息
    console.log(params)                // 当前页面的参数
});
```

* 返回页面（可以返回多级页面）`router.back(info, callback)`

```js
// 示例
router.back({
    length: 1,                      // 返回多少级页面（animateType == PUSH 时起作用)默认为1，如果数值超过页面最大层级，将返回第一个页面
    type: ''                 // 客户端定义动态类型,必须与 open 时的值一致
}, function(){
    console.log('返回页面成功');
});
```

* 拨打电话`callPhone(info)`

```js
// 示例
router.callPhone({
    phone: '110'        // 电话号码
})
```

* 跳转地图页面（目前页面为原生实现的）`toMap(info)`

```js
// 示例
router.toMap(
    type:'NAVIGATION',                          //type类型：NAVIGATION(表现方式为：地图上添加起点终点标示大头针，终点标示上面有个导航的按钮)
    title: '页面标题',                           //页面标题    
    navigationInfo: {
        title: '北京朝阳医院',                   //目的地名称
        address: '北京市朝阳区工体南路8号',       //目的地地址
        longitude:'',                           //目的地经度
        latitude:''                             //目的地纬度                        
     }
)
```

* 打开 WebView 页面 `toWebView(info)`

```js
// 示例
router.toWebView({
    url: url,              // 页面 url
    title: title,          // title
    navShow: true,                              // 是否显示原生导航栏
    shareInfo: {                                // webView 添加了分享功能，如需使用分享请传入一下信息（目前就支持分享到微信朋友圈，微信好友其他如有需要后续添加）
        title: params.shareTitle,               // 分享的 title
        content: params.content || '',          // 分享的简介
        image: params.image || '',              // 分享的小图片
        url: params.url || ''                   // 分享跳转 url
    }
})
```

* 重新加载当前Weex页面 `refresh`

```js
// 示例
router.refresh()
```



