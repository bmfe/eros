<template>
    <cell>
        <eros-header title="插件 | 三方（选择集成）"></eros-header>
        <wxc-cell title="高德地图"
            desc="高德地图插件 weex-amap，点击查看集成及使用方法"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="toMap">
        </wxc-cell>
        <wxc-cell title="定位"
            desc="$geo.get() 获取当前定位。"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="handle_geo">
        </wxc-cell>
        <wxc-cell title="个推"
            desc="个推推送插件 bmPush，点击查看集成及使用方法"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="toWebView">
        </wxc-cell>
        <wxc-cell title="微信支付"
            desc="微信支付插件 bmWXPay，点击查看集成及使用方法"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="handle_pay">
        </wxc-cell>
         <wxc-cell title="微信分享、授权登录 "
            desc="微信分享插件 bmWXShare，点击查看集成及使用方法"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="handle_share">
        </wxc-cell>
    </cell>
</template>
<script>
import { WxcCell } from 'weex-ui'
import ErosHeader from './header'
export default {
    components: { WxcCell, ErosHeader }, 
    methods: {
        toMap () {
            this.$router.toWebView({
                url: 'https://bmfe.github.io/eros-docs/#/zh-cn/plugin_amap',
                title: '集成使用个推'
            })
        },
         toWebView () {
            this.$router.toWebView({
                url: 'https://bmfe.github.io/eros-docs/#/zh-cn/plugin_getui_push',
                title: '集成使用个推'
            })
        },
         handle_geo () {
            this.$geo.get().then(
                data => {
                    this.$notice.alert({
                        message:
                            '经度: ' +
                            data.locationLng +
                            '\r\n\r\n纬度: ' +
                            data.locationLat,
                        okTitle: '确认',
                        callback () {
                            // 点击确认按钮的回调
                        }
                    });
                },
                error => {
                    this.$notice.toast({
                        message: '获取位置失败'
                    });
                    console.log(error);
                }
            );
        },
        handle_pay () {
            this.$router.toWebView({
                url: 'https://bmfe.github.io/eros-docs/#/zh-cn/plugin_wx_pay',
                title: '集成使用微信支付 bmWXPay'
            })
        },
         handle_share () {
             this.$router.toWebView({
                url: 'https://bmfe.github.io/eros-docs/#/zh-cn/plugin_wx_share',
                title: '集成使用微信分享、微信登录 bmWXShare'
            })
        }
    }
};
</script>
