<template>
    <cell>
        <eros-header title="拓展"></eros-header>
        <wxc-cell title="本地资源 "
            desc="bmlocal:// 直接引入"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="jump('assets')">
        </wxc-cell>
        <wxc-cell title="全局属性"
            desc="weex.config.eros"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="jump('globalAttr')">
        </wxc-cell>
        <wxc-cell title="输入光标改色"
            desc="tint-color"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="jump('inputExtend')">
        </wxc-cell>
        <wxc-cell title="下拉刷新"
            desc="showRefresh"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="jump('refresh')">
        </wxc-cell>
        <wxc-cell title="修改字体大小"
            desc="$font 来修改字体大小。"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="jump('font')">
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
                name: `demo.${name}`
            })
        }
    }
}
</script>

