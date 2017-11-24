// appBoard，mediator 不建议进行修改 如果修改了 也请对应修改
module.exports = {
    "exports": [
        // appBoard 
        "js/config/index.js",
        // mediator
        "js/mediator/index.vue",
        // home
        "js/pages/eros-demos/index.vue",

        "js/pages/eros-demos/tab1/tab-page/index.vue",
        "js/pages/eros-demos/tab2/index.vue",
        "js/pages/eros-demos/tab3/index.vue",
        "js/pages/eros-demos/tab4/index.vue",

        "js/pages/eros-demos/tab2/button.vue",
        "js/pages/eros-demos/tab2/tip.vue",
        "js/pages/eros-demos/tab2/header.vue",
        "js/pages/eros-demos/tab2/image.vue",
        "js/pages/eros-demos/tab2/icon.vue",
        "js/pages/eros-demos/tab2/tabbar.vue",

        "js/pages/eros-demos/tab3/router.vue",
        "js/pages/eros-demos/tab3/amap.vue",
        "js/pages/eros-demos/tab3/iconfont.vue",

        "js/pages/eros-demos/tab4/demo/index.vue",
        "js/pages/eros-demos/tab4/waterfall.vue"
    ],
    "alias": {
        "Eros": "js/components/__eros__",
        "Components": "js/components",
        "Common": "js/common",
        "Config": "js/config",
        "Widget": "js/widget",
        "Pages": "js/pages",
        "Utils": "js/utils"
    },
    "diff": {
        "pwd": "/Users/yangmingzhe/Work/opensource/eros-diff-folder",
        "proxy": "https://app.weex-eros.com/source"
    },
    "server": {
        "path": "./",
        "port": 80
    },
    "proxy": [{
        "route": "/test",
        "target": "127.0.0.1:52077/test"
    }],
    "mockServer": {
        "port": 52077,
        "mockDir": "./dist/mock"
    }
}