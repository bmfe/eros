// appBoard，mediator 不建议进行修改 如果修改了 也请对应修改
module.exports = {
    "exports": [
        // appBoard 
        "js/config/index.js",
        // mediator
        "js/mediator/index.vue",
        // home
        "js/pages/eros-demos/index.vue",

        "js/pages/eros-demos/tab1/tab-page/index.vue",
        "js/pages/eros-demos/tab2/index.vue",
        "js/pages/eros-demos/tab3/index.vue",

        "js/pages/eros-demos/tab2/router.vue",
        "js/pages/eros-demos/tab2/amap.vue",
        "js/pages/eros-demos/tab2/iconfont.vue",

        "js/pages/eros-demos/tab3/demo/index.vue",
        "js/pages/eros-demos/tab3/waterfall.vue",

        "js/pages/demo/index.vue",
        "js/pages/demo/lifecycle/index.vue",
        "js/pages/demo/allAttr/index.vue",
        "js/pages/demo/inputExtend/index.vue",
        "js/pages/demo/refresh/index.vue",
        "js/pages/demo/storage/index.vue",
        "js/pages/demo/navigator/index.vue",
        "js/pages/demo/tools/index.vue",
        "js/pages/demo/router/index.vue",
    ],
    "alias": {
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
        "port": 8889
    },
    "mockServer": {
        "port": 52077,
        "mockDir": "./dist/mock"
    }
}