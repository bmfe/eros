<template>
    <cell>
        <eros-header title="插件 | 核心"></eros-header>
        <wxc-cell title="路由功能"
            desc="$router 提供了路由，原生导航，地图等大量功能。"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="jumpToRouter">
        </wxc-cell>
        <wxc-cell title="全局事件"
            desc="eros 像 vue 生命周期一样暴露了很多事件。"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="toWebView">
        </wxc-cell>
        <wxc-cell title="本地化存储"
            desc="$storage 提供本地数据同步/异步操作。"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="jump('storage')">
        </wxc-cell>
        <wxc-cell title="发布订阅"
            desc="$event 可以在不同页面之间进行交互。"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="jump('event.a')">
        </wxc-cell>
        <wxc-cell title="发送请求 (开发模式才有效果)"
            desc="$fetch 支持 restful 标准, 高度自定义，支持 cookie 等。"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="handle_axios">
        </wxc-cell>
    </cell>
</template>
<script>
import { WxcCell } from 'weex-ui'
import ErosHeader from './header'
export default {
    components: { WxcCell, ErosHeader }, 
    methods: {
        jumpToRouter() {
            this.$router.open({
                name: 'demo.router',
                type: 'PRESENT',
                params: {
                    text: 'eros'
                },
                backCallback: () => {
                    this.$notice.toast({
                        message: '页面返回时的回调触发了，但是返回事件被覆盖了，我们需要重写'
                    })
                    this.$router.back({
                        type: 'PRESENT'
                    })
                }
            });
        },
        jump(name) {
            this.$router.open({
                name: `demo.${name}`
            })
        },
        toWebView () {
            this.$router.toWebView({
                url: 'https://bmfe.github.io/eros-docs/#/zh-cn/eros_widget?id=%e9%a1%b5%e9%9d%a2%e5%85%a8%e5%b1%80%e4%ba%8b%e4%bb%b6',
                title: 'eros 全局事件'
            })
        },
        handle_axios() {
            this.$fetch({
                name: 'COMMON.getInfo',
                method: 'get',
                data: {
                    name: 'weex-eros'
                }
            }).then(resData => {
                this.$notice.alert({
                    title: '提示',
                    message: '请求成功：' + resData.data,
                    okTitle: '确定'
                });
            });
        }
    }
}
</script>

