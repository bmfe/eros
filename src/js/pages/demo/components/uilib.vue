<template>
    <cell>
        <eros-header title="UI 组件库"></eros-header>
        <wxc-cell title="weex-ui"
            desc="支持 weex-ui。"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="jump('weex-ui')">
        </wxc-cell>
         <wxc-cell title="bui-weex"
            desc="支持 bui-weex。"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="jump('bui')">
        </wxc-cell>
    </cell>
</template>
<script>
import { WxcCell } from 'weex-ui'
import ErosHeader from './header'
export default {
    components: { WxcCell, ErosHeader }, 
    methods: {
        jump(name) {
            this.$router.open({
                name: `demo.other.${name}`
            })
        }
    }
}
</script>

