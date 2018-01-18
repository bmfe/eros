<template>
    <scroller>
        <div class="wrapper">
            <text class="label">在b页面设置的数据:</text>
        </div>
        <div class="wrapper">
            <text class="label">{{paramsData||'空'}}</text>
        </div>
        <div class="wrapper">
            <text class="button" @click="toPageB">进入b页面</text>
        </div>
    </scroller>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config')
export default {
    created () {
        this.$event.on('getParams', (params) => {
            // params 为触发该事件所传的参数
            this.paramsData = params
        });
    },
    data () {
        return {
            paramsData: ''
        }
    },
    methods: {
        toPageB () {
            this.$router.open({
                name: 'demo.event.b',
                statusBarStyle: 'LightContent'
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
    width: 400px;
    height: 90px;
    top: 60px;
    text-align: center;
    font-size: 34px;
    padding-top: 25px;
    border-width: 1px;
    border-style: solid;
    color: #fff;
    border-color: #1da1f2;
    border-radius: 15px;
    background-color: #1da1f2;
}

.label {
    width: 500px;
    height: 80px;
    top: 70px;
    font-size: 34px;
    text-align: center;
}
</style>