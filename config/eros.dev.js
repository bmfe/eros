// appBoard，mediator 不建议进行修改 如果修改了 也请对应修改
module.exports = {
    'eslint': false,
    'webpackWarnings': false,
    'exports': [
        // appBoard
        'js/config/index.js',
        // mediator
        'js/mediator/index.vue',
        // home
        'js/pages/demo/index.vue',
        'js/pages/demo/lifecycle/index.vue',
        'js/pages/demo/assets/index.vue',
        'js/pages/demo/globalAttr/index.vue',
        'js/pages/demo/inputExtend/index.vue',
        'js/pages/demo/refresh/index.vue',
        'js/pages/demo/storage/index.vue',
        'js/pages/demo/router/index.vue',
        'js/pages/demo/router/home.vue',
        'js/pages/demo/event/a.vue',
        'js/pages/demo/event/b.vue',
        'js/pages/demo/notice/index.vue',
        'js/pages/demo/font/index.vue',
        'js/pages/demo/image/index.vue',
        'js/pages/demo/bmchart/index.vue',
        'js/pages/demo/bmrichtext/index.vue',
        'js/pages/demo/bmcalendar/index.vue',
        'js/pages/demo/other/bindingx.vue',
        'js/pages/demo/other/weexui.vue',
        'js/pages/demo/other/eros-ui/index.vue',
        'js/pages/demo/other/eros-ui/grid/index.vue',
        'js/pages/demo/other/eros-ui/badge/index.vue',
        'js/pages/demo/other/eros-ui/button/index.vue',
        'js/pages/demo/other/eros-ui/cell/index.vue',
        'js/pages/demo/other/eros-ui/tab-bar/index.vue',
        'js/pages/demo/other/eros-ui/tab-page/index.vue',
        'js/pages/demo/other/eros-ui/carousel/index.vue',
        'js/pages/demo/other/eros-ui/input/index.vue',
        'js/pages/demo/other/eros-ui/search/index.vue',
        'js/pages/demo/other/eros-ui/radio/index.vue',
        'js/pages/demo/other/eros-ui/checkBox/index.vue',
        'js/pages/demo/other/eros-ui/checkBox-list/index.vue',
        'js/pages/demo/other/eros-ui/pop/index.vue',
        'js/pages/demo/other/eros-ui/index/index.vue',
        'js/pages/demo/other/eros-ui/container/index.vue',
        'js/pages/demo/other/bui.vue'
    ],
    'alias': {
        'Components': 'js/components',
        'Common': 'js/common',
        'Config': 'js/config',
        'Widget': 'js/widget',
        'Pages': 'js/pages',
        'eros-ui': 'js/eros-ui',
        'Utils': 'js/utils'
    },
    'diff': {
        'pwd': '/Users/yangmingzhe/Work/opensource/eros-diff-folder',
        'proxy': 'https://localhost:3001/static/eros-demo/dist/js/'
    },
    'server': {
        'path': './',
        'port': 8889
    },
    'mockServer': {
        'port': 42077,
        // 'port': 52077,
        'mockDir': './dist/mock'
    },
    'socketServer': {
        'port': 8890,
        'switch': true
    }
}
