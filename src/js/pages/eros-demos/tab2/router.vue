<template>
    <scroller>   
        <text>这是一个新的路由页面</text>
        <!--<bui-button @click="changeStore" value="修改 mediator-store"></bui-button>
        <text>{{store}}</text>-->
    </scroller>
</template>

<script>

import buiButton from 'bui-weex/src/components/bui-button'
export default {
    created() {
        this.bindEvent()
    },
    components: {
        buiButton
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
            var self = this
            // this.$event.emit('store.count.add')
            this.$storage.setSync('name',222)
            var resData = this.$storage.getSync('name')
            // var test = this.$storage.getSync("name")
            // console.log(2222,test.ahhaha)
        }
    }
}
</script>
