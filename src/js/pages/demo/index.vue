<template>
    <div>
        <div class="status-bar" :style="{'height': statusBarHeight}"></div>
        <waterfall class="container" :show-scrollbar="false">
            <header class="desc">
                <text class="desc-title icon" style="font-size: 100px">&#xe618;</text>
                <!--<text class="desc-info">eros 的定位不是仅仅是一个库，由于 app 开发的特殊性，则更偏重关心于整个 app 项目。</text>-->
                <div class="desc-info-1">
                    <bmrichtext style="height: 100px;">
                        <bmspan class="desc-info-text-bold" value="eros"></bmspan>
                        <bmspan class="desc-info-text" value=" 是什么？"></bmspan>
                    </bmrichtext>
                </div>
                <text class="desc-info-2">二次封装 weex，让开发者用 VUE 写一个属于自己的 APP。</text>
                <div class="desc-detail">
                    <text class="desc-detail-item" v-for="(desc,index) in DESC_TYPE" :index="index"> {{desc}} </text>
                </div>
                <div class="desc-detail" style="margin-top: 100px;">
                    <text class="desc-detail-github icon" @click="openWebView('https://github.com/bmfe/eros-template')">&#xeee2;</text>
                    <text class="desc-detail-wiki icon" @click="openWebView('https://github.com/bmfe/eros-template/wiki')">&#xe713;</text>
                </div>
            </header>
            <cell class="line"></cell>
            <header class="header" :class="[WXEnvironment.platform == 'iOS' ? 'stickyHeader' : '']">
                <text class="header-1">{{rows[0].name}}</text>
                <!-- <text class="header-2 icon">&#xe713;</text> -->
            </header>
            <cell class="demo-list-cell-container">
                <div class="demo-list-cell" v-for="(v,i) in rows[0].items" append="tree" :index="i" :key="i" @click="handle(v.type)">
                    <text class="demo-list-cell-text">{{v.name}}</text>
                    <text class="demo-list-cell-icon">&#xe62d;</text>
                </div>
            </cell>
            <header class="header" :class="[WXEnvironment.platform == 'iOS' ? 'stickyHeader' : '']">
                <text class="header-1">{{rows[1].name}}</text>
                <!-- <text class="header-2 icon">&#xe713;</text> -->
            </header>
            <cell class="demo-list-cell-container">
                <div class="demo-list-cell" v-for="(v,i) in rows[1].items" append="tree" :index="i" :key="i" @click="handle(v.type)">
                    <text class="demo-list-cell-text">{{v.name}}</text>
                    <text class="demo-list-cell-icon">&#xe62d;</text>
                </div>
            </cell>
            <header class="header" style="flex-direction: row;">
                <text class="header-1">{{rows[2].name}}</text>
                <!-- <text class="header-2 icon">&#xe713;</text> -->
            </header>
            <cell class="demo-list-cell-container">
                <div class="demo-list-cell" v-for="(v,i) in rows[2].items" append="tree" :index="i" :key="i" @click="handle(v.type)">
                    <text class="demo-list-cell-text">{{v.name}}</text>
                    <text class="demo-list-cell-icon">&#xe62d;</text>
                </div>
            </cell>
            <header class="header" style="flex-direction: row;">
                <text class="header-1">{{rows[3].name}}</text>
                <!-- <text class="header-2 icon">&#xe713;</text> -->
            </header>
            <cell class="demo-list-cell-container">
                <div class="demo-list-cell" v-for="(v,i) in rows[3].items" append="tree" :index="i" :key="i" @click="handle(v.type)">
                    <text class="demo-list-cell-text">{{v.name}}</text>
                    <text class="demo-list-cell-icon">&#xe62d;</text>
                </div>
            </cell>
        </waterfall>
        <div class="touch-bar" :style="{'height': touchBarHeight}"></div>
        <bmmask class="mask" animation="transition" position="top" :duration="300" ref="bmmask">
            <bmpop class="modal-top">
                <image class="image" src="bmlocal://assets/demo.jpg"></image>
            </bmpop>
        </bmmask>
    </div>
</template>

<script>
if (process.env.NODE_ENV === 'development') require('Config');
import { TYPE,DESC_TYPE } from './config';

export default {
    data () {
        return {
            DESC_TYPE,
            rows: TYPE,
            statusBarHeight: weex.config.eros.statusBarHeight ? weex.config.eros.statusBarHeight : 40,
            touchBarHeight: weex.config.eros.touchBarHeight ? weex.config.eros.touchBarHeight : 20,
            WXEnvironment
        };
    },
    beforeCreate: function () {
        var domModule = weex.requireModule('dom');

        domModule.addRule('fontFace', {
            fontFamily: 'iconfont-eros',
            'src': 'url(\'bmlocal://iconfont/iconfont-eros.ttf\')'
        });
    },
    created () {
        this.$navigator.setNavigationInfo({
            statusBarStyle: 'LightContent'
        });
    },
    methods: {
        openWebView (url) {
            this.$router.toWebView({
                url
            })
        },
        handle (type) {
            this[`handle_${type}`]();
        },
        handle_lifecycle () {
            this.$router.open({
                name: 'demo.lifecycle',
                statusBarStyle: 'LightContent'
            })
        },
        handle_assets () {
            this.$router.open({
                name: 'demo.assets',
                statusBarStyle: 'LightContent'
            });
        },
        handle_globalAttr () {
            this.$router.open({
                name: 'demo.globalAttr',
                statusBarStyle: 'LightContent'
            });
        },
        handle_inputExtend () {
            this.$router.open({
                name: 'demo.inputExtend',
                statusBarStyle: 'LightContent'
            });
        },
        handle_refresh () {
            this.$router.open({
                name: 'demo.refresh',
                statusBarStyle: 'LightContent'
            });
        },
        handle_storage () {
            this.$router.open({
                name: 'demo.storage',
                statusBarStyle: 'LightContent'
            });
        },
        handle_navigator () {
            this.$router.open({
                name: 'demo.navigator',
                statusBarStyle: 'LightContent'
            });
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
        },
        handle_tools () {
            this.$router.open({
                name: 'demo.tools',
                statusBarStyle: 'LightContent'
            });
        },
        handle_router () {
            this.$router.open({
                name: 'demo.router',
                type: 'PRESENT',
                params: {
                    text: '123'
                },
                statusBarStyle: 'LightContent',
                backCallback: () => {
                    this.$notice.toast({
                        message: '页面返回时的回调触发了，但返回功能阻止了'
                    });
                }
            });
        },
        handle_axios () {
            var self = this;
            this.$fetch({
                name: 'COMMON.getInfo',
                data: {
                    name: 'weex-eros'
                }
            }).then(resData => {
                self.$notice.alert({
                    title: '提示',
                    message: '请求成功：' + resData.data,
                    okTitle: '确定',
                    callback: () => {
                        self.$notice.toast('您点击了确定');
                    }
                });
            });
        },
        handle_event () {
            this.$router.open({
                name: 'demo.event.a',
                statusBarStyle: 'LightContent'
            });
        },
        handle_notice () {
            this.$router.open({
                name: 'demo.notice',
                statusBarStyle: 'LightContent'
            });
        },
        handle_image () {
            this.$router.open({
                name: 'demo.image',
                statusBarStyle: 'LightContent'
            });
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
        handle_coms () {
            this.$router.open({
                name: 'demo.coms',
                statusBarStyle: 'LightContent'
            });
        },
        handle_pay () {
            this.$pay
                .wechat({
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
        handle_font () {
            this.$router.open({
                name: 'demo.font',
                statusBarStyle: 'LightContent'
            });
        },
        handle_bmchart () {
            this.$router.open({
                name: 'demo.bmchart',
                statusBarStyle: 'LightContent'
            });
        },
        handle_bmrichtext () {
            this.$router.open({
                name: 'demo.bmrichtext',
                statusBarStyle: 'LightContent'
            });
        },
        handle_bmcalendar () {
            this.$router.open({
                name: 'demo.bmcalendar',
                statusBarStyle: 'LightContent'
            });
        },
        handle_bmmask () {
            this.$refs['bmmask'].show()
        },
        handle_waterfall () {
            this.$router.open({
                name: 'demo.other.waterfall',
                statusBarStyle: 'LightContent'
            });
        },
        handle_weexui () {
            this.$router.open({
                name: 'demo.other.weex-ui',
                statusBarStyle: 'LightContent'
            });
        },
    }
};
</script>
<style lang="sass" src='./index.scss'></style>