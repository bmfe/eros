// 这里的后缀都是 .js 因为打包出来的都是js文件，而不是.vue文件，我们要告诉客户端跳转那个js

//  这里的路径和dev.json路径的区别
//  pages里面配置的是路由跳转的地址，也就是dev生成的 dist文件夹下的js bundle路径 从dist/js开始 
//  dev.json 的 exports 需要打包的js地址，填入src的需要被打包成js bundle的地址   从src开始

export default {
    'tab2.test': {
        title: '路由测试页',
        url: '/pages/eros-demos/tab2/router.js'
    },
    'tab2.amap': {
        title: '地图页面',
        url: '/pages/eros-demos/tab2/amap.js'
    },
    'tab2.iconfont': {
        title: '本地iconfont',
        url: '/pages/eros-demos/tab2/iconfont.js'
    },
    'tab3.slider': {
        title: '手势滚动',
        url: '/pages/eros-demos/tab3/demo/index.js',
    },
    'tab3.waterfall': {
        title: 'weex 官方瀑布流',
        url: '/pages/eros-demos/tab3/waterfall.js',
    },
    'demo': {
        title: 'weex-eros demo',
        url: '/pages/demo/index.js',
    },
    'demo.lifecycle': {
        title: '生命周期',
        url: '/pages/demo/lifecycle/index.js',
    },
    'demo.allAttr': {
        title: '全局属性',
        url: '/pages/demo/allAttr/index.js',
    },
    'demo.inputExtend': {
        title: '文本框扩展',
        url: '/pages/demo/inputExtend/index.js',
    },
    'demo.refresh': {
        title: '下拉刷新',
        url: '/pages/demo/refresh/index.js',
    },
    'demo.storage': {
        title: '本地化存储',
        url: '/pages/demo/storage/index.js',
    },
    'demo.navigator': {
        title: '导航条操作',
        url: '/pages/demo/navigator/index.js',
    },
    'demo.tools': {
        title: '工具',
        url: '/pages/demo/tools/index.js',
    },
    
        
}