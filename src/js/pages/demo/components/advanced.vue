<template>
    <cell>
        <eros-header title="进阶用法"></eros-header>
        <wxc-cell title="bindingx"
            desc="完全支持 bindingx，用来开发复杂的交互效果。"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="jump('bindingx')">
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
                gesBack: false,
                name: `demo.other.${name}`
            })
        }
    }
}
</script>

