<template>
    <scroller>   
        <text>这是一个新的路由页面</text>
        <image style="width: 500px; height: 500px;" src="bmlocal://assets/test.jpeg"></image>
        <WxcButton text="修改 mediator-store" @wxcButtonClicked="changeStore"></WxcButton>
        <text>{{store}}</text>
    </scroller>
</template>

<script>

import { WxcButton } from 'weex-ui';
export default {
    created() {
        this.bindEvent()
    },
    components: {
        WxcButton
    },
    data(){
        return {
            store: null
        }
    },
    methods: {
        bindEvent() {
            this.$event.on('store.count.get', data => {
                this.store = data
            })
            this.$event.on('store.change', data => {
                this.store = data
            })
        },
        changeStore() {
            // var self = this
            this.$event.emit('store.count.add')
            // this.$storage.setSync('name',222)
            // var resData = this.$storage.getSync('name')
            // var test = this.$storage.getSync("name")
        }
    }
}
</script>
