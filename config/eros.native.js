module.exports = {
    'appName': 'eros-template-name',
    'appBoard': '/config/index.js',
    // android 监听全局事件homeBack 如果为true 安卓端需要自行调用router.finish方法来关闭应用
    'androidIsListenHomeBack': 'true',
    'version': {
        'android': 'eros-template-version',
        'iOS': 'eros-template-version'
    },
    'page': {
        'homePage': '/pages/demo/index.js',
        'mediatorPage': '/mediator/index.js',
        'navBarColor': '#ffffff',
        'navItemColor': '#333'
    },
    'url': {
        'jsServer': 'http://app.weex-eros.com:8889',
        'image': 'https://lev-inf.benmu-health.com/test/xxx',
        'bundleUpdate': 'http://localhosts:3001/app/check',
        'debugServer': 'ws://192.168.15.110:8088/debugProxy/native'
    },
    'zipFolder': {
        'iOS': '/ios/WeexEros/WeexEros',
        'android': '/android/WeexFrameworkWrapper/app/src/main/assets'
    },
    'getui': {
        'enabled': 'false',
        'appId': '',
        'appKey': '',
        'appSecret': ''
    },
    'umeng': {
        'enabled': 'false',
        'iOSAppKey': '',
        'androidAppKey': ''
    },
<<<<<<< HEAD
    "wechat": {
        "enabled": "true",
        "appId": "wx57be722d460666c9",
        "appSecret": "a6f106d4de1b08cfc6df3bb9ad787834"
=======
    'wechat': {
        'enabled': 'false',
        'appId': '',
        'appSecret': ''
>>>>>>> 7d1dcdabcdfc8fc3eba06bc2fdc65b9c2153b994
    },
    'amap': {
        'enabled': 'true',
        'iOSAppKey': '623c0396a9b879461c971a14baa678fb',
        'androidAppKey': ''
    }
}
