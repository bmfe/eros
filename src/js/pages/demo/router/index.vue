<template>
    <div>
        <div class="wrapper">
            <text class="button" @click="back">返回首页</text>
            <text class="button" @click="getParams">获取参数</text>
            <text class="button" @click="toMap">地图</text>
            <text class="button" @click="getUrl">获取Url</text>
        </div>
        <!-- <div class="wrapper">
            <text class="label">是否安装微信</text>
            <text class="button" @click="hasWXApp">获取</text>
        </div>
        <div class="wrapper">
            <text class="label">获取cid个推的app标识</text>
            <text class="button" @click="hasCid">获取</text>
        </div>
        <div class="wrapper">
            <input class="layout" type="text" placeholder="输入需要拷贝的内容" v-model="copyText" />
            <text class="button" @click="copy">拷贝</text>
        </div> -->
    </div>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config')
export default {
    created() {
        this.$notice.toast({
            message: '进入这个页面用的就是$router.open'
        })
    },
    data() {
        return {
            copyText: ''
        }
    },
    methods: {
        back() {
            this.$router.back({
                type: 'PRESENT'
            })
        },
        getParams() {
            this.$router.getParams().then(resData => {
                this.$notice.toast({
                    message: resData.text
                })
            })
        },
        toMap() {
            this.$router.toMap({
                type: 'NAVIGATION', //type类型：NAVIGATION(表现方式为：地图上添加起点终点标示大头针，终点标示上面有个导航的按钮)
                title: '地图标题', //页面标题
                navigationInfo: {
                    title: '故宫博物院', //目的地名称
                    address: '北京市东城区景山前街4号', //目的地地址
                    longitude: '116.397026', //目的地经度
                    latitude: '39.918058' //目的地纬度
                }
            })
        },
        getUrl() {
            debugger
            let a = this.$router.getUrl('demo.router')
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

.layout {
    width: 500px;
    height: 80px;
    top: 50px;
    left: 20px;
    padding-left: 10px;
    font-size: 34px;
    border-width: 1px;
    border-radius: 12px;
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

.label {
    width: 500px;
    height: 80px;
    top: 70px;
    left: 20px;
    font-size: 34px;
}
</style>