// 这里的后缀都是 .js 因为打包出来的都是js文件，而不是.vue文件，我们要告诉客户端跳转那个js

//  这里的路径和dev.json路径的区别
//  pages里面配置的是路由跳转的地址，也就是dev生成的 dist文件夹下的js bundle路径 从dist/js开始
//  dev.json 的 exports 需要打包的js地址，填入src的需要被打包成js bundle的地址   从src开始

export default {
    'demo': {
        title: 'weex-eros demo',
        url: '/pages/demo/index.js'
    },
    'demo.lifecycle': {
        title: '生命周期',
        url: '/pages/demo/lifecycle/index.js'
    },
    'demo.assets': {
        title: '本地资源',
        url: '/pages/demo/assets/index.js'
    },
    'demo.globalAttr': {
        title: '全局属性',
        url: '/pages/demo/globalAttr/index.js'
    },
    'demo.inputExtend': {
        title: '文本框扩展',
        url: '/pages/demo/inputExtend/index.js'
    },
    'demo.refresh': {
        title: '下拉刷新',
        url: '/pages/demo/refresh/index.js'
    },
    'demo.storage': {
        title: '本地化存储',
        url: '/pages/demo/storage/index.js'
    },
    'demo.navigator': {
        title: '导航条操作',
        url: '/pages/demo/navigator/index.js'
    },
    'demo.tools': {
        title: '工具',
        url: '/pages/demo/tools/index.js'
    },
    'demo.router': {
        title: '路由',
        url: '/pages/demo/router/index.js'
    },
    'demo.event.a': {
        title: '发布订阅-a页面',
        url: '/pages/demo/event/a.js'
    },
    'demo.event.b': {
        title: '发布订阅-b页面',
        url: '/pages/demo/event/b.js'
    },
    'demo.notice': {
        title: '弹窗通知',
        url: '/pages/demo/notice/index.js'
    },
    'demo.font': {
        title: '字体',
        url: '/pages/demo/font/index.js'
    },
    'demo.coms': {
        title: '联系功能',
        url: '/pages/demo/coms/index.js'
    },
    'demo.image': {
        title: '图片',
        url: '/pages/demo/image/index.js'
    },
    'demo.bmchart': {
        title: '图表',
        url: '/pages/demo/bmchart/index.js'
    },
    'demo.bmrichtext': {
        title: '富文本',
        url: '/pages/demo/bmrichtext/index.js'
    },
    'demo.bmcalendar': {
        title: '日期',
        url: '/pages/demo/bmcalendar/index.js'
    },
    'demo.other.waterfall': {
        title: 'weex 瀑布流',
        url: '/pages/demo/other/waterfall.js'
    },
    'demo.other.weex-ui': {
        title: 'weex-ui',
        url: '/pages/demo/other/weex-ui/tab-page/index.js'
    }
}
