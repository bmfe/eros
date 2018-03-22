<template>
    <cell>
        <eros-header title="插件 | 提示"></eros-header>
        <wxc-cell title="确认弹窗"
            desc="$notice.alert()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="alert">
        </wxc-cell>
        <wxc-cell title="选择弹窗"
            desc="$notice.confirm()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="confirm">
        </wxc-cell>
        <wxc-cell title="加载提示"
            desc="$notice.loading()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="loading">
        </wxc-cell>
         <wxc-cell title="吐丝提示"
            desc="$notice.toast()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="toast">
        </wxc-cell>
    </cell>
</template>
<script>
import { WxcCell } from 'weex-ui'
import ErosHeader from './header'
export default {
    components: { WxcCell, ErosHeader }, 
    methods: {
        alert () {
            this.$notice.alert({
                title: '这是一个弹窗',
                message: '这是消息',
                okTitle: '确认',
                callback () {
                    // 点击确认按钮的回调
                }
            })
        },
        confirm () {
            this.$notice.confirm({
                title: '这是一个弹窗',
                message: '这是消息',
                okTitle: '确认',
                cancelTitl: '取消',
                okCallback () {
                    // 点击确认按钮的回调
                },
                cancelCallback () {
                    // 点击取消按钮的回调
                }
            })
        },
        loading () {
            this.$notice.loading.show('loading展示文案')
            setTimeout(() => {
                this.$notice.loading.hide()
            }, 1000)
        },
        toast () {
            this.$notice.toast({
                message: '这是消息'
            })
        }
    }
}
</script>

