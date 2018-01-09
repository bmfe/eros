<template>
    <scroller>
        <div class="wrapper">
            <text class="label">获取上一页传递的参数</text>
            <text class="button" @click="getParams">获取</text>
        </div>
        <div class="wrapper">
            <text class="label">获取本页Url信息</text>
            <text class="button" @click="getUrl">获取</text>
        </div>
        <div class="wrapper">
            <text class="label">跳转到地图</text>
            <text class="button" @click="toMap">跳转</text>
        </div>
        <div class="wrapper">
            <text class="label">跳转到WebView</text>
            <text class="button" @click="toWebView">跳转</text>
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
        }

    }
}
</script>
<style scoped>
.wrapper {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 30px;
}

.button {
    width: 150px;
    height: 60px;
    top: 60px;
    text-align: center;
    font-size: 30px;
    padding-top: 13px;
    border-width: 1px;
    border-style: solid;
    color: #fff;
    border-color: #0473a5;
    border-radius: 15px;
    background-color: #0473a5;
}

.button-big {
    width:500px;
    height:100px;
    font-size: 35px;
    padding-top: 26px;
}

.label {
    width: 500px;
    height: 80px;
    top: 70px;
    left: 20px;
    font-size: 34px;
}
</style>