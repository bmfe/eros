> 请优先使用我们扩展的 `widget`，不建议直接使用`Module`，如果需要直接引用`Module`的话，一定要自己在封装一层类似我们的 widget，因为原生Module在后续版本中可能会有所修改，统一封装一层对以后升级改动会小一些！

weex 对象上暴露出了 `requireModule` 方法来让我们引入自定义或者 weex 定义的模块。
```
weex.requireModule('moduleName')
```

Module中的callback方法，我们统一了数据的返回格式:

#### callback返回数据格式
```js    
// resData 数据    
// {
//    status:0,   //状态码，0表示操作成功 9表示操作失败，数据请求Module bmAxios 此参数为 http请求的状态码如：200、404、503等
//    errorMsg: '错误描述信息',
//    data: 数据
// }
```

# bmAuth

> 微信登录，指纹验证(iPhone带指纹识别设备)

**引用方式**

```js
var auth = weex.requireModule('bmAuth')
```

**API**

* 调用微信登录认证 `wechat(info,callback)`
> 使用微信登录之前，需要在 native.js 中配置 umeng（友盟）及wecaht（微信）的信息

```js
// 示例
auth.wechat({
    // 预留参数 目前传空
}, function(resDate){
    // resDate
    // {
    //    status:0,
    //    errorMsg:"微信授权成功"
    //    data:{
    //        name:'小花同学',
    //        uid:'微信返回唯一标示'
    //    }
    // }
})
```

* 是否支持指纹认证 `canUseTouchId()` 

```js
// 示例 
// 注：此方法是同步方法
var resData = auth.canUseTouchId()
    // resDate
    // {
    //    status:0,       // 不支持返回 9 
    //    errosMsg:"此设备支持 Touch Id"
    //    data:{}
    // }
```

* 调用指纹认证 `touchId()`

```js
// 示例
auth.touchId({
    title:'登录认证'    // 指纹认证弹窗标题
}, function(resData){
    // resDate
    // {
    //    status:0,       // 认证失败返回 9 
    //    errorMsg:"指纹认证成功"
    //    data:{}
    // }
})
```

# bmAxios

> 用于发送请求（GET、POST\)

**引用方式**

```js
var axios = weex.requireModule('bmAxios')
```

**API**

* 发送请求 `fetch(info,callback)`

```js
// 示例
axios.fetch({
    method: 'GET'                // 请求类型 GET、POST、HEAD、PUT、DELETE、PATCH
    url: 'http://xxx/xxx',       // 请求api,完整地址
    header: {}                   // 自定义请求头requestHeader
    data: {}                     // 请求参数
    timeout: 3000                // 超时时间（耗秒）：默认3000毫秒
}, function(resData){                        
    // resData 数据    
    // {
    //    status:200,   // http 请求状态吗
    //    errorMsg: '错误信息',
    //    data: 数据
    // }
})
```

* 上传图片 `uploadImage(info,callback)`
> 将拍的照片，或者从相册选择的图片上传至服务器，注意：images 为图片本地路径的集合

```js
// 示例
axios.uploadImage({
    url: https:xxx.com/img,	 // 图片上传地址(可以不传，默认使用native.js中配置的imageUrl)
    params: {},		         // 上传图片附加参数可为空
    header: {},		         // 上传图片附加请求头可为空
    images:[                     // 要上传的本地图片路径集合
      'path1',
      'path2'
    ]
} ,function(resData){                        
    // resData 数据    
    // {
    //    status:200,   // http 请求状态吗
    //    errorMsg: '错误信息',
    //    data: ['url1','url2']  //图片地址集合
    // }
})
```

# bmCommunication

> 调用原生通讯相关方法 打电话、发短信，打开通讯录获取联系人信息；

<br>

**引用方式**

```js
var bmCommunication = weex.requireModule('bmCommunication')
```
<br>

**API**

* 打电话 `call(info)`
> 参数说明： <br>
to：电话号码 <br>
tip：是否显示弹窗 （Android有效，iOS上默认有弹窗提示）

```js
// 示例
bmCommunication.call({to:'110',tip:true})
```
<br>

* 发短信 `sms(recipients,content,callback)` 

 > recipients：收件人数组 <br>
 content: 短信内容 <br>
 callback: 回调方法 

```js
// 示例 
bmCommunication.sms(['18601949015','10086'],'短信内容',data=> {
   		console.log(data);
});
```
<br>

* 打开通讯录获取联系人信息 `contacts(callback)`

```js
// 示例
bmCommunication.contacts(data=> {
       console.log(data);
       // {"status":0,"data":{"name":"啊","phone":"10086"},"errorMsg":""}
});
```

# bmEvents

> 事件通知

**引用方式**

```js
var event = weex.requireModule('bmEvents')
```

**示例**

```js
//注册事件，可多次响应
event.on('eventName',function(params){
    // params 为触发该事件所传的参数
});

//注册事件，只响应一次
event.once('eventName',function(params){
    // params 为触发该事件所传的参数
});

//触发事件
event.emit('eventName',params);

//取消事件
event.off('eventName',function(result){
    console.log("取消该事件");
});

//取消全部事件
event.offall();
```

### globalEvent （扩展）

> globalEvent 是用于监听持久性事件的，我们添加了原生页面生命周期事件
>
> API `addEventListener(String eventName, String callback)`
>
> 事件（eventName）：`viewWillAppear`、`viewDidAppear`、`viewWillDisappear`、`viewDidDisappear`，分别对应 页面将要展示、页面已经展示、页面即将消失、页面已经消失;
>
> 返回参数 type（callback）：`open`、`back`、`refresh`,分别对应 页面首次打开，返回页面，刷新页面

```js
// 示例：监听 viewWillAppear 事件
var globalEvent = weex.requireModule('globalEvent');
globalEvent.addEventListener("viewWillAppear", function(type) {
    if (type === 'open') {
        // 首次打开页面调用
    } else if (type === 'back') {
        // 返回页面调用
    } else if (type === 'refresh') {
        // 刷新页面调用
    } 
})
```

# bmGeolocation

> 获取定位（坐标系：gcj02）

**引用方式**

```js
var geolocation = weex.requireModule('bmGeolocation')
```

**API**

* 接口：`getGeolocation(callback)`

```js
geolocation.getGeolocation(function(resDate){
        // resDate
        // {
        //    status: 0,
        //    errorMsg: '',
        //    data : {   
        //      locationLat: '纬度',    
        //      locationLng: '经度'     
        //    }
        // }
})
```

# bmFont

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


# bmImage

> 图片相关，拍照/系统相册选图并上传图片、预览图片

**引用方式**

```js
var bmImage = weex.requireModule('bmImage')
```

**API** 

* 拍照/相册选图并上传服务器\(支持多选\)：`uploadImage(info,callback)`
> 注：调用此方法在选择完图片后会直接上传到图片服务器，最后将图片的url返回

```js
bmImage.uploadImage({
    url: https:xxx.com/img	 // 图片上传地址(可以不传，默认使用native.js中配置的imageUrl)
    maxCount: 9,                 // 一次最多可选择图片数量 最大支持9张
    imageWidth: 1000,            // 图片宽度（根据宽度按比例裁剪）可以不传默认为 800px
    allowCrop,                   // 是否允许编辑（只有当 maxCount == 1时 此参数才会生效）
    params: {}		         // 上传图片附加参数可为空
    header: {}		         // 上传图片附加请求头可为空
},function(resData){          
    //  图片由客户端上传至图片服务器,上传完毕后通过回调方法将url传给js  
    //  resData 
    //     {
    //      status: 0,
    //      errorMsg: '',
    //      data: ['url1','url2']  //远程图片地址集合
    //   }
})
```

* 打开照相机拍照并返回图片路径：`camera(info,callback)`
> 注：拍完照片后返回的是本地的图片路径

```js
bmImage.camera({
    imageWidth: 1000,            // 图片宽度（根据宽度按比例裁剪）可以不传默认为 800px
    allowCrop,                   // 是否允许编辑（只有当 maxCount == 1时 此参数才会生效）
},function(resData){          
    //  图片由客户端上传至图片服务器,上传完毕后通过回调方法将url传给js  
    //  resData 
    //     {
    //      status: 0,
    //      errorMsg: '',
    //      data: ['path']     //本地图片地址 注意，为了统一格式这里回传的也是个数组
    //   }
})
```

* 图片选择器 ：`pick(info,callback)`
> 注：选完照片后返回的是本地的图片路径

```js
bmImage.pick({
    maxCount: 9,                 // 一次最多可选择图片数量 最大支持9张
    imageWidth: 1000,            // 图片宽度（根据宽度按比例裁剪）可以不传默认为 800px
    allowCrop,                   // 是否允许编辑（只有当 maxCount == 1时 此参数才会生效）
},function(resData){
    // 返回图片路径集合
})
```

* 调起图片浏览器 `preview(info,callback)`

```js
// 示例
bmImage.preview({
    index: 2,                     // 所点击图片下标(下标从 0 开始)
    images: ['1','2','3']         // 图片地址支持 网络图片，及本地图片 和 bmlocal（jsbundle中的图片）
}, function(resDate){
    // resDate 为空
})
```


# bmModal

> 弹窗相关： alert、toast 等

**引用方式**

```js
var modal = weex.requireModule('bmModal')
```

**API**

* 警告弹窗：`alert(info,callback)`

```js
modal.alert({
    message: '我是一个弹窗',     // 弹窗内容
    okTitle: '确定',            // 确定按钮文字
    title:'标题'                // title
}, function(){
    // 点击按钮的回调
})
```

* 确定弹窗：`confirm(info,cancelCallback,okCallback)`

```js
modal.confirm({
    message: '我是一个弹窗',       // 弹窗内容
    cancelTitle: '取消',          // 取消按钮文字
    okTitle: '确定'               // 确定按钮文字
    title: ''   
}, function(){
    // 点击取消按钮回调 
}, function(){
    // 点击确定按钮回调
});
```

* 提示框：`toast(info)`

```js
modal.toast({
    message: '提示信息'    // 展示内容
})
```

* Loading提示框：`showLading(info)`

```js
// 调用方式
modal.showLoading({
    message: '加载中...'   // loading 文字，可为空
});
```

* 移除 Loading弹窗：`hideLoading()`

```js
modal.hideLoading()
```

# bmNavigator

> 设置原生导航栏按钮，支持文字，或图片

### 图片尺寸及命名规定
> size: 请以 iPhone6（750x1334) 的尺寸设计，并切图； <br>
命名：请将图片命名成 XXX@2X.png，因为iOS系统会根据图片命名设置图片的size，对安卓不影响； <br>
注：图片不要使用中文命名

**引用方式**

```js
var navigator = weex.requireModule('bmNavigator')
```

**API**

* 设置导航栏左边按钮：`setLeftItem(info,callback)`

```js
//示例
navigator.setLeftItem({
    text: '',                               // 展示的文字 (和图片 二选一)    
    textColor: '',                          // 文字颜色 (默认为白色)
    fontSize: '32',                         // 字号（默认32px）
    fontWeight: 'normal',                   // 是否加粗（默认不加粗）
    image: '',                              // 展示的图片 (和文字 二选一，文字优先级更高)
}, function(){
    // 按钮点击回调的方法 callback
}
```

* 设置导航栏右边按钮：`setRightItem(info,callback)` 调用方式与上面👆的一致；

* 设置导航栏中间的按钮：`setCenterItem(info,callback)`  调用方式与上面一致

* 设置其他信息：`setNavigationInfo(info,callback)`  
  Android 版本在4.4 以上的小米、魅族可以设置`statusBarStyle` 状态栏文字颜色，其他安卓手机必须在6.0以上才会生效！

```js
navigator.setNavigationInfo({
    title: '',                              // 标题    
    navShow: false,                         // 是否显示导航栏
    statusBarStyle: 'Default',              // 状态栏文字颜色：Defautl 黑色， LightContent 白色
},function(resData){
    // 预留
})
```

# bmPay

> 目前只集成了微信支付，记得在 eros.native.js 中配置好 appId 及 appSecret

**引用方式**

```js
var pay = weex.requireModule('bmPay')
```

**API**

* 调用支付：`payByWechat(info,callback)`

```js
// 示例
pay.payByWechat({
    // 微信支付所需必要参数，参考官方文档
    sign:'',
    timestamp:'',
    noncestr:'',
    partnerid:'',
    prepayid:'',
    packageValue:''
}, function(resData){
    // 支付结果
})
```


# bmRouter

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

* 打开 WebView(App内打开) 页面 `toWebView(info)`

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

* 使用系统浏览器打开url `openBrowser(url)`

 ```js
// 示例
router.openBrowser('https://eros.com')
```

* 重新加载当前Weex页面 `refresh()`

 ```js
// 示例
router.refresh()
```
* 关闭当前Weex页面 `finishPage()` （原 finish() 方法 ）

 > 只适用于 Android，当屏蔽掉物理返回键的时候，可以调用此方法来返回上一个页面   

 ```js
// 示例
router.finishPage()
```

* 设置App启动首页 `setHomePage(path)`

 > 设置app启动加载的首页，native端会将传过来的path存储到本地，app启动的时候优先读取这个参数来显示首页，没有的话读取 native.js 中填写的 homePage <br>
 注意：path 路径格式需要与 homePage 一致从 `/pages/...`开始

 ```js
// 示例
//首页为登录页面
router.setHomePage('/pages/eros-demos/login/index.js')
//登录成功后切换到home页面
router.setHomePage('/pages/eros-demos/home/index.js')
```


# bmShare

> 分享，目前支持 微信朋友圈，微信好友，赋值至剪切板

**引用方式**

```js
var share = weex.requireModule('bmShare')
```

**API**

* 分享：`share(info,successCallback,failedCallback)`

```js
share.share({
    title:'',                         // 分享出去的 title, 如 本木医疗
    content:'',                     // 内容，是一家医疗公司
    url: ''                         // 用户点击后跳转 url
    image: '',                        // 图片url
    platforms: ['Pasteboard','WechatSession']     // 传空的话默认全部，目前  朋友圈，朋友，复制链接
},function(resData){
    // 成功回调
},function(resData){
    // 失败回调
})

// 目前支持的分享平台
platforms:[
    Pasteboard,             // 剪切板
    WechatSession,          // 微信好友
    WechatTimeLine          // 分享至朋友圈
]
```

# bmStorage

> 数据存储

**引用方式**

```js
var storage = weex.requireModule('bmStorage')
```

**API**

* 存数据：<br>
注意：只支持存： 字符串 或者 json对象
```js
// 异步方法：setData(key,data,callback)
storage.setData('key','内容'，function(resData){
    // resData
})

// 同步方法：setDataSync(key,data)
var resData = storage.setDataSync('key','内容')
```

* 取数据：

```js
// 异步方法：getData(key,callback)
storage.getData('key',function(resData){
    // resData
})

// 同步方法：getDataSync(key)
var resData = storage.getDataSync('key')
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

# bmTool

> 一些方法

**引用方式**

```js
var tool = weex.requireModule('bmTool')
```

**API**

* 辞退键盘: `resignKeyboard(callback)`

```js
tool.resignKeyboard(function(resData){          // 回调
    // 结果的回调  
    //  resData = {
    //      resCode: 0 || 9,  // 是否成功
    //      msg: nil,
    //      data: nil
    //  }
});
```

* 判断是否安装微信：`isInstallWXApp(callback)`

```js
tool.isInstallWXApp(function(resData){          // 回调
    // 结果的回调  
    //  resData
    // {
    //      resCode: 0 || 9,  // 0成功 9失败
    //      msg: nil,
    //      data: nil
    //  }
});
```

* 获取 个推SDK的 cid：`getCid(callback)`

```js
tool.getCid(function(resData){
    // 结果的回调  
    //  resData = {
    //      resCode: 0 || 9,  // 是否成功
    //      msg: nil,
    //      data: {cid:'4701510e9b7753c98077d87661aaxxs'} 如果获取不到 整个data 字段是nil
    //  }
});
```

* 赋值内容到剪切板：`copyString(string,callback)`

```js
tool.copyString('复制的内容', function(resData){
    // 成功的回调
})
```

* 添加全局水印\(在 Window 上添加\)：`addWatermark:(String)`

```js
tools.addWatermark('我是水印')
```

* 扫一扫：`scan(callback)`

```js
tools.scan(function(resDate){
})
```

# bmWebSocket
bmbmWebSocket用于创建一个webSocket会话，api和使用方式与[weex官方WebSocket](http://weex.apache.org/cn/references/modules/websocket.html)。
### 引用方式 
`var bmWebSocket = weex.requireModule('bmWebSocket')`
### API
#### webSocket(url, protocol)
创建 WebSockets，并连接服务器

#### send(data)
通过WebSocket连接向服务器发送数据

#### close(code,reason)
关闭 WebSockets 的链接
#### onopen
链接打开的监听
#### onmessage(options)
消息事件的监听器
#### onclose(options)
关闭事件的监听器
#### onerror(options)
错误事件的监听器





















