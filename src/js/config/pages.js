// 这里的后缀都是 .js 因为打包出来的都是js文件，而不是.vue文件，我们要告诉客户端跳转那个js

//  这里的路径和dev.json路径的区别
//  pages里面配置的是路由跳转的地址，也就是dev生成的 dist文件夹下的js bundle路径 从dist/js开始 
//  dev.json 的 exports 需要打包的js地址，填入src的需要被打包成js bundle的地址   从src开始

export default {
    'tab2.button': {
        title: '按钮',
        url: '/pages/eros-demos/tab2/button.js',
    },
    'tab2.tip': {
        title: '提示',
        url: '/pages/eros-demos/tab2/tip.js',
    },
    'tab2.header': {
        title: '标题',
        url: '/pages/eros-demos/tab2/header.js',
    },
    'tab2.image': {
        title: '图片',
        url: '/pages/eros-demos/tab2/image.js',
    },
    'tab2.icon': {
        title: '图标',
        url: '/pages/eros-demos/tab2/icon.js',
    },
    'tab2.tabbar': {
        title: '选项卡',
        url: '/pages/eros-demos/tab2/tabbar.js',
    },
    'tab3.test': {
        title: '路由测试页面',
        url: '/pages/eros-demos/tab3/router.js'
    },
    'tab3.amap': {
        title: '地图页面',
        url: '/pages/eros-demos/tab3/amap.js'
    }, 
    'tab3.iconfont': {
        title: '本地iconfont',
        url: '/pages/eros-demos/tab3/iconfont.js'
    },
    'tab4.slider': {
        title: '手势滚动',
        url: '/pages/eros-demos/tab4/demo/index.js',
    },
    'tab4.waterfall': {
        title: 'weex 官方瀑布流',
        url: '/pages/eros-demos/tab4/waterfall.js',
    }
}