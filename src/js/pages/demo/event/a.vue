<template>
    <scroller>
        <title title="订阅"></title>
        <category title="$event.on"></category>
        <wxc-cell title="进入下一个页面，发布一个事件"
            :desc="`订阅的数据为：${paramsData||'空'}`"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="toPageB">
        </wxc-cell>
    </scroller>
</template>
<script>
import { WxcCell } from 'weex-ui'
import Title from '../_mods/title'
import Category from '../_mods/category'
export default {
    components: { WxcCell, Title, Category }, 
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
                name: 'demo.event.b'
            })
        }
    }
}
</script>
