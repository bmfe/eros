<template>
    <scroller>
        <div class="wrapper">
            <text class="label">获取上一页传递的参数</text>
            <text class="button button-small" @click="getParams">获取</text>
        </div>
        <div class="wrapper">
            <text class="label">获取本页Url信息</text>
            <text class="button button-small" @click="getUrl">获取</text>
        </div>
        <div class="wrapper">
            <text class="label">跳转到地图</text>
            <text class="button button-small" @click="toMap">跳转</text>
        </div>
        <div class="wrapper">
            <text class="label">跳转到WebView</text>
            <text class="button button-small" @click="toWebView">跳转</text>
        </div>
        <div class="wrapper">
            <text class="label">打开浏览器</text>
            <text class="button button-small" @click="openBrowser">打开</text>
        </div>
        <div class="wrapper">
            <text class="label">重新加载当前Weex页面</text>
            <text class="button button-small" @click="refresh">刷新</text>
        </div>
        <div class="wrapper">
            <text class="label">设置App启动首页</text>
            <text class="button button-small" @click="setHomePage">设置</text>
        </div>
        <div class="wrapper">
            <text class="button button-big" @click="back">返回上一页</text>
        </div>
    </scroller>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config')
export default {
    created () {
        this.$notice.toast({
            message: '进入这个页面用的就是$router.open'
        })
    },
    data () {
        return {
            copyText: ''
        }
    },
    methods: {
        back () {
            this.$router.back({
                type: 'PRESENT'
            })
        },
        getParams () {
            this.$router.getParams().then(resData => {
                this.$notice.toast({
                    message: resData.text
                })
            })
        },
        toMap () {
            this.$router.toMap({
                type: 'NAVIGATION',
                title: '地图标题',
                navigationInfo: {
                    title: '故宫博物院',
                    address: '北京市东城区景山前街4号',
                    longitude: '116.397026',
                    latitude: '39.918058'
                }
            })
        },
        toWebView () {
            this.$router.toWebView({
                url: 'https://www.baidu.com',
                title: 'WebView标题'
            })
        },
        getUrl () {
            const urlData = this.$router.getUrl('demo.router')
            this.$notice.toast({
                message: 'title: ' + urlData.title + ' \r\nurl: ' + urlData.url
            })
        },
        openBrowser () {
            this.$router.openBrowser('https://www.baidu.com')
        },
        setHomePage () {
            this.$router.setHomePage('/pages/demo/router/home.js')
            this.$notice.toast({
                message: '设置成功，请退出重启app'
            })
        },
        refresh () {
            this.$router.refresh()
        }

    }
}
</script>
<style lang="sass" scoped>
@import 'src/js/css/base';

.button-small {
    width: 150px;
    height: 60px;
    font-size: 30px;
    padding-top: 13px;
}

.button-big {
    width:500px;
    height:100px;
    font-size: 35px;
    padding-top: 26px;
}

.label {
    text-align: left;
    left: 20px;
}
</style>
