<template>
    <div>
        <div class="status-bar" :style="{'height': statusBarHeight}"></div>
        <waterfall class="container">
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
            </header>
            <header class="header stickyHeader">
                <text class="header-1">{{rows[0].name}}</text>
                <text class="header-2 icon">&#xeee2;</text>
                <text class="header-2 icon">&#xe713;</text>
            </header>
            <cell class="demo-list-cell-container">
                <div class="demo-list-cell" v-for="(v,i) in rows[0].items" append="tree" :index="i" :key="i" @click="handle(v.type)">
                    <text class="demo-list-cell-text">{{v.name}}</text>
                    <!--<text class="icon">&#xeee2;</text>-->
                </div>
            </cell>
            <header class="header stickyHeader">
                <text class="header-1">{{rows[1].name}}</text>
                <text class="header-2 icon">&#xeee2;</text>
                <text class="header-2 icon">&#xe713;</text>
            </header>
            <cell class="demo-list-cell-container">
                <div class="demo-list-cell" v-for="(v,i) in rows[1].items" append="tree" :index="i" :key="i" @click="handle(v.type)">
                    <text class="demo-list-cell-text">{{v.name}}</text>
                    <!--<text class="icon">&#xeee2;</text>-->
                </div>
            </cell>
            <header class="header stickyHeader">
                <text class="header-1">{{rows[2].name}}</text>
                <text class="header-2 icon">&#xeee2;</text>
                <text class="header-2 icon">&#xe713;</text>
            </header>
            <cell class="demo-list-cell-container">
                <div class="demo-list-cell" v-for="(v,i) in rows[2].items" append="tree" :index="i" :key="i" @click="handle(v.type)">
                    <text class="demo-list-cell-text">{{v.name}}</text>
                    <!--<text class="icon">&#xeee2;</text>-->
                </div>
            </cell>
        </waterfall>
        <div class="touch-bar" :style="{'height': touchBarHeight}"></div>
    </div>
</template>

<script>
if (process.env.NODE_ENV === "development") require("Config");
import { TYPE } from "./config";

export default {
    data() {
        return {
            // appearMin: 1,
            // appearMax: 1,
            // appearIds: [],
            // lat: '',
            // lng: '',
            rows: TYPE,
            statusBarHeight: weex.config.env.statusBarHeight ? weex.config.env.statusBarHeight : 40,
            touchBarHeight: weex.config.env.touchBarHeight ? weex.config.env.touchBarHeight : 0
        };
    },
    beforeCreate: function() {
        var domModule = weex.requireModule("dom");

        domModule.addRule("fontFace", {
            fontFamily: "iconfont-eros",
            src:
                "url('https://at.alicdn.com/t/font_545350_76nuzg1ff8rm5cdi.woff')"
        });
    },
    created() {
        this.$navigator.setNavigationInfo({
            statusBarStyle: "LightContent"
        });
    },
    methods: {
        handle(type) {
            this[`handle_${type}`]();
        },
        // handle_lifecycle () {
        //     this.$router.open({
        //         name: 'demo.lifecycle',
        //         statusBarStyle: 'LightContent'
        //     })
        // },
        handle_assets() {
            this.$router.open({
                name: "demo.assets",
                statusBarStyle: "LightContent"
            });
        },
        handle_globalAttr() {
            this.$router.open({
                name: "demo.globalAttr",
                statusBarStyle: "LightContent"
            });
        },
        handle_inputExtend() {
            this.$router.open({
                name: "demo.inputExtend",
                statusBarStyle: "LightContent"
            });
        },
        handle_refresh() {
            this.$router.open({
                name: "demo.refresh",
                statusBarStyle: "LightContent"
            });
        },
        handle_storage() {
            this.$router.open({
                name: "demo.storage",
                statusBarStyle: "LightContent"
            });
        },
        handle_navigator() {
            this.$router.open({
                name: "demo.navigator",
                statusBarStyle: "LightContent"
            });
        },
        handle_share() {
            this.$share({
                title: "分享出去的title",
                content: "分享出去的内容",
                url: "www.baidu.com",
                image: "",
                platforms: ["Pasteboard", "WechatSession", "WechatTimeLine"]
            }).then(
                resData => {
                    // 成功的回调
                    this.$notice.toast({
                        message: "分享成功"
                    });
                },
                error => {
                    // 失败的回调
                    this.$notice.toast({
                        message: "分享失败"
                    });
                }
            );
        },
        handle_tools() {
            this.$router.open({
                name: "demo.tools",
                statusBarStyle: "LightContent"
            });
        },
        handle_router() {
            this.$router.open({
                name: "demo.router",
                type: "PRESENT",
                params: {
                    text: "123"
                },
                statusBarStyle: "LightContent",
                backCallback: () => {
                    this.$notice.toast({
                        message: "页面返回时的回调触发了，但返回功能阻止了"
                    });
                }
            });
        },
        handle_axios() {
            var self = this;
            this.$fetch({
                name: "COMMON.getInfo",
                data: {
                    name: "weex-eros"
                }
            }).then(resData => {
                self.$notice.alert({
                    title: "提示",
                    message: "请求成功：" + resData.data,
                    okTitle: "确定",
                    callback: () => {
                        self.$notice.toast("您点击了确定");
                    }
                });
            });
        },
        handle_event() {
            this.$router.open({
                name: "demo.event.a",
                statusBarStyle: "LightContent"
            });
        },
        handle_notice() {
            this.$router.open({
                name: "demo.notice",
                statusBarStyle: "LightContent"
            });
        },
        handle_image() {
            this.$router.open({
                name: "demo.image",
                statusBarStyle: "LightContent"
            });
        },
        handle_geo() {
            this.$geo.get().then(
                data => {
                    this.$notice.alert({
                        message:
                            "经度: " +
                            data.locationLng +
                            "\r\n\r\n纬度: " +
                            data.locationLat,
                        okTitle: "确认",
                        callback() {
                            // 点击确认按钮的回调
                        }
                    });
                },
                error => {
                    this.$notice.toast({
                        message: "获取位置失败"
                    });
                    console.log(error);
                }
            );
        },
        handle_coms() {
            this.$router.open({
                name: "demo.coms",
                statusBarStyle: "LightContent"
            });
        },
        handle_pay() {
            this.$pay
                .wechat({
                    // 微信支付所需必要参数，参考官方文档
                    sign: "",
                    timestamp: "",
                    noncestr: "",
                    partnerid: "",
                    prepayid: "",
                    packageValue: ""
                })
                .then(
                    resData => {
                        // 成功的回调
                    },
                    error => {
                        this.$notice.toast({
                            message: "调用支付失败"
                        });
                    }
                );
        },
        handle_font() {
            this.$router.open({
                name: "demo.font",
                statusBarStyle: "LightContent"
            });
        },
        handle_bmchart() {
            this.$router.open({
                name: "demo.bmchart",
                statusBarStyle: "LightContent"
            });
        },
        handle_bmrichtext() {
            this.$router.open({
                name: "demo.bmrichtext",
                statusBarStyle: "LightContent"
            });
        },
        handle_bmcalendar() {
            this.$router.open({
                name: "demo.bmcalendar",
                statusBarStyle: "LightContent"
            });
        }
    }
};
</script>
<style scoped>
.stickyHeader {
    position: sticky;
    flex-direction: row;
}
.container {
    background-color: #1da1f2;
}

.desc {
    margin-top: 0px;
    padding-top: 50px;
    padding-bottom: 20px;
    text-align: center;
    background-color: #1da1f2;
    /*align-items: center;*/
    width: 750px;
    justify-content: center;
    border-bottom-width: 2px;
    border-style: solid;
    border-color: white;
}
.desc-title {
    width: 750px;
    text-align: center;
    font-weight: 600;
    font-size: 100;
    color: white;
    margin-bottom: 30px;
    margin-top: -180px;
}
.desc-info-1,
.desc-info-2 {
    /*padding-top: 20px;*/
    padding-left: 20px;
    padding-right: 20px;
    color: white;
    font-weight: 300;
    font-size: 30px;
}
.desc-info-2 {
    margin-top: 30px;
}
.desc-info-text {
    color: white;
    font-weight: 300;
    font-size: 30px;
}

.desc-info-text-bold {
    color: white;
    font-weight: 600;
    font-size: 80px;
}
.header {
    padding-top: 45px;
    width: 750px;
    height: 117px;
    background-color: #1da1f2;
    color: white;
}

.header-1 {
    padding-left: 25px;
    width: 550px;
    font-weight: 600;
    font-size: 40px;
    color: white;
}
.header-2 {
    text-align: center;
    width: 100px;
    font-weight: 300;
    font-size: 40px;
    color: white;
}
.header-3 {
    text-align: center;
    width: 100px;
    font-weight: 300;
    font-size: 40px;
    color: white;
}
.demo-list-cell-container {
    width: 700px;
    box-shadow: 1px 1px 2px solid grey;
    margin-left: 25px;
    margin-right: 25px;
}
.demo-list-cell {
    background-color: white;
    width: 700px;
    height: 100px;
    padding-left: 24px;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: #b9b9b9;
    /*border-bottom-color: #53bbfb;*/
    border-style: solid;
}
.demo-list-cell-text {
    /*color: #53bbfb;*/
    color: #7d7d7d;
    font-weight: 500;
}
.icon {
    color: white;
    font-size: 36;
    font-family: iconfont-eros;
}
.status-bar {
    width: 750;
    height: 40;
    background-color: #1da1f2;
}
.touch-bar {
    height: 68;
    width: 750;
    background-color: #1da1f2;
}
</style>
