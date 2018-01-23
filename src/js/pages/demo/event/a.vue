<template>
    <scroller>
        <div class="wrapper">
            <text class="label">在b页面设置的数据:</text>
        </div>
        <div class="wrapper">
            <text class="label">{{paramsData||'空'}}</text>
        </div>
        <div class="wrapper">
            <text class="button button-big" @click="toPageB">进入b页面</text>
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
<style lang="sass" scoped>
@import 'src/js/css/base';
</style>