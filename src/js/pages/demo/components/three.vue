<template>
    <cell>
        <eros-header title="插件 | 三方"></eros-header>
        <wxc-cell title="地图"
            desc="$router.toMap() 跳转高德地图。"
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
            desc="内置了个推，iOS、Android 均保持返回一致。"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="toWebView">
        </wxc-cell>
        <wxc-cell title="支付"
            desc="$pay，目前仅支持微信支付，后续会支持其他。"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="handle_pay">
        </wxc-cell>
         <wxc-cell title="分享 "
            desc="$share 目前仅支持微信相关分享。"
            :has-arrow="false"
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
            this.$router.toMap({
                type: 'NAVIGATION',
                title: '地图标题',
                navigationInfo: {
                    title: '故宫博物院',
                    address: '北京市东城区景山前街4号',
                    longitude: '116.397026',
                    latitude: '39.918058'
                }
            })
        },
         toWebView () {
            this.$router.toWebView({
                url: 'https://bmfe.github.io/eros-docs/#/zh-cn/3d_getui',
                title: 'eros 使用个推'
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
            this.$pay.wechat({
                // 微信支付所需必要参数，参考官方文档
                sign: '',
                timestamp: '',
                noncestr: '',
                partnerid: '',
                prepayid: '',
                packageValue: ''
            })
            .then(
                resData => {
                    // 成功的回调
                },
                error => {
                    this.$notice.toast({
                        message: '调用支付失败'
                    });
                }
            );
        },
         handle_share () {
            this.$share({
                title: '分享出去的title',
                content: '分享出去的内容',
                url: 'www.baidu.com',
                image: '',
                platforms: ['Pasteboard', 'WechatSession', 'WechatTimeLine']
            }).then(
                resData => {
                    // 成功的回调
                    this.$notice.toast({
                        message: '分享成功'
                    });
                },
                error => {
                    // 失败的回调
                    this.$notice.toast({
                        message: '分享失败'
                    });
                }
            );
        }
    }
};
</script>
