<template>
    <scroller>   
        <bui-button @click="changeStore" value="修改 mediator-store"></bui-button>
        <text>{{store}}</text>
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
            this.$event.emit('store.count.add')
        }
    }
}
</script>
