module.exports = {
    "appName": "eros-template-name",
    "appBoard": "/config/index.js",
    // android 监听全局事件homeBack 如果为true 安卓端需要自行调用router.finish方法来关闭应用
    "androidIsListenHomeBack": "true",
    "version": {
        "android": "eros-template-version",
        "iOS": "eros-template-version"
    },
    "page": {
        "homePage": "/pages/eros-demos/index.js",
        "mediatorPage": "/mediator/index.js",
        "navBarColor": "#ffffff",
        "navItemColor": "#333"
    },
    "url": {
        "jsServer": "http://app.weex-eros.com:8889",
        "image": "https://lev-inf.benmu-health.com/test/xxx",
        "bundleUpdate": "http://localhosts:3001/app/check",
        "debugServer": "ws://192.168.15.110:8088/debugProxy/native"
    },
    "zipFolder": {
        "iOS": "/ios/WeexEros/WeexEros",
        "android": "/android/WeexFrameworkWrapper/app/src/main/assets"
    },
    "getui": {
        "enabled": "false",
        "appId": "",
        "appKey": "",
        "appSecret": ""
    },
    "umeng": {
        "enabled": "false",
        "iOSAppKey": "",
        "androidAppKey": ""
    },
    "wechat": {
        "enabled": "false",
        "appId": "",
        "appSecret": ""
    },
    "amap": {
        "enabled": "true",
        "iOSAppKey": "623c0396a9b879461c971a14baa678fb",
        "androidAppKey": ""
    }
}