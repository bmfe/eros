<template>
    <div class="container">
        <div class="category">
            <text class="category-text">weex-eros demo</text>
        </div>
        <list class="list">
            <cell class="panel" v-for="(v,i) in rows" append="tree" :index="i" :key="i" @click="handle(v.type)">
                <text class="text">{{v.name}}</text>
            </cell>
        </list>
    </div>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config')
import { TYPE } from './config'

export default {
    data: function() {
        return {
            // appearMin: 1,
            // appearMax: 1,
            // appearIds: [],
            // lat: '',
            // lng: '',
            rows: TYPE
        }
    },
    methods: {
        handle(type) {
            this[`handle_${type}`]()
        },
        handle_lifecycle() {
            this.$router.open({
                name: 'demo.lifecycle',
                statusBarStyle: 'LightContent'
            })
        },
        handle_allAttr() {
            this.$router.open({
                name: 'demo.allAttr',
                statusBarStyle: 'LightContent'
            })
        },
        handle_inputExtend() {
            this.$router.open({
                name: 'demo.inputExtend',
                statusBarStyle: 'LightContent'
            })
        },
        handle_refresh() {
            this.$router.open({
                name: 'demo.refresh',
                statusBarStyle: 'LightContent'
            })
        },
        handle_storage() {
            this.$router.open({
                name: 'demo.storage',
                statusBarStyle: 'LightContent'
            })
        },
        handle_navigator() {
            this.$router.open({
                name: 'demo.navigator',
                statusBarStyle: 'LightContent'
            })
        },
        handle_share() {
            this.$share({
                title: '分享出去的title',
                content: '分享出去的内容',
                url: 'www.baidu.com',
                image: '',
                platforms: ['Pasteboard','WechatSession','WechatTimeLine']
            }).then(resData => {
                // 成功的回调
                this.$notice.toast({
                    message: '分享成功'
                })
            }, error => {
                // 失败的回调
                this.$notice.toast({
                    message: '分享失败'
                })
            })
        },
        handle_tools() {
            this.$router.open({
                name: 'demo.tools',
                statusBarStyle: 'LightContent'
            })
        },
        handle_router() {
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
                    })
                },
            })
        },
        handle_axios() {
            var self = this
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
                        self.$notice.toast('您点击了确定')
                    }
                })
            })
        },
        handle_event() {
            this.$router.open({
                name: 'demo.event.a',
                statusBarStyle: 'LightContent'
            })
        },
        handle_notice() {
            this.$router.open({
                name: 'demo.notice',
                statusBarStyle: 'LightContent'
            })
        },
        handle_image() {
            this.$router.open({
                name: 'demo.image',
                statusBarStyle: 'LightContent'
            })
        },
        handle_geo() {
            this.$geo.get().then(data => {
                this.$notice.alert({
                    message: '经度: ' + data.locationLng + '\r\n\r\n纬度: ' + data.locationLat,
                    okTitle: '确认',
                    callback() {
                        // 点击确认按钮的回调
                    }
                })
            }, error => {
                this.$notice.toast({
                    message: '获取位置失败'
                })
                console.log(error)
            })
        },
        handle_coms() {
            debugger
            this.$router.open({
                name: 'demo.coms',
                statusBarStyle: 'LightContent'
            })
        },
        handle_pay() {
            this.$pay.wechat({
                // 微信支付所需必要参数，参考官方文档
                sign: '',
                timestamp: '',
                noncestr: '',
                partnerid: '',
                prepayid: '',
                packageValue: ''
            }).then(resData => {
                // 成功的回调
            }, error => {
                this.$notice.toast({
                    message: '调用支付失败'
                })
            })

        },
        handle_font() {
            this.$router.open({
                name: 'demo.font',
                statusBarStyle: 'LightContent'
            })
        },



        // handle_router() {
        //     this.$router.open({
        //         name: 'tab2.test',
        //         statusBarStyle: 'LightContent'
        //     })
        // },
        // handle_routerPresent() {
        //     this.$router.open({
        //         name: 'tab2.test',
        //         type: 'PRESENT'
        //     })
        // },
        // handle_routerAmap() {
        //     this.$router.open({
        //         name: 'tab2.amap'
        //     })
        // },
        // handle_routerWebView() {
        //     this.$router.toWebView({
        //         url: 'https://www.baidu.com'
        //     })
        // },
        // handle_alert() {
        //     this.$notice.alert({
        //         title: '提示',
        //         message: '这是一个弹窗',
        //         okTitle: '确定',
        //         callback: () => {
        //             this.$notice.toast('您点击了确定')
        //         }
        //     })
        // },
        // handle_confirm() {
        //     this.$notice.confirm({
        //         title: '提示',
        //         message: '这是一个选择弹窗',
        //         okTitle: '确定文案',
        //         cancelTitle: '取消文案',
        //         okCallback: () => {
        //             this.$notice.toast({ message: '您点击了确定' })
        //         },
        //         cancelCallback: () => {
        //             this.$notice.toast({ message: '您点击了取消' })
        //         }
        //     })
        // },
        // handle_loading() {
        //     this.$notice.loading.show('loading自定义文案')
        //     setTimeout(() => {
        //         this.$notice.loading.hide()
        //     }, 1000)
        // },
        // handle_toast() {
        //     this.$notice.toast('这是一个toast')
        // },
        // handle_geo() {
        //     this.$geo.get((resData) => {
        //         this.lat = resData.data.locationLat
        //         this.lng = resData.data.locationLng
        //     })
        // },
        // handle_scan() {
        //     this.$camera.scan(resData => {
        //         this.$notice.alert({
        //             title: '提示',
        //             message: resData
        //         })
        //     })
        // },
        // handle_uploadImg() {
        //     this.$image.upload({
        //         maxCount: 3,
        //     }, resData => {
        //         this.$notice.alert({
        //             title: '提示',
        //             message: resData
        //         })
        //     })
        // },
        // handle_callPhone() {
        //     this.$router.toCallPhone(123)
        // },
        // handle_localIconfont() {
        //     this.$router.open({
        //         name: 'tab2.iconfont'
        //     })
        // },
        // onappear: function(idx, e) {
        //     var appearId = this.rows[idx].id;
        //     var appearIds = this.appearIds;
        //     appearIds.push(appearId);
        //     this.getMinAndMaxIds(appearIds);
        // },
        // ondisappear: function(idx, e) {
        //     var disAppearId = this.rows[idx].id;
        //     var appearIds = this.appearIds;
        //     var index = appearIds.indexOf(disAppearId);
        //     if (index > -1) {
        //         appearIds.splice(index, 1);
        //     }
        //     this.getMinAndMaxIds(appearIds);
        // },
        // getMinAndMaxIds: function(appearIds) {
        //     appearIds.sort(function(a, b) {
        //         return a - b;
        //     });
        //     this.appearIds = appearIds;
        //     this.appearMax = appearIds[appearIds.length - 1];
        //     this.appearMin = appearIds[0];
        // }
    },
}
</script>
<style scoped>
.container {
    background-color: #f2f3f4;
}

.list {
    width: 750px;
    align-items: center;
    justify-content: center;
    background-color: #f2f3f4;
}

.panel {
    background-color: #ffffff;
    width: 750px;
    height: 100px;
    padding-left: 24px;
    /*align-items: center;*/
    justify-content: center;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
}

.category {
    margin-bottom: 10px;
    margin-top: 0px;
    padding-left: 24px;
    /*align-items: center;*/
    width: 750px;
    height: 200px;
    background-color: #ffffff;
    justify-content: center;
}

.category-text {
    /*color: #ff0000;*/
    font-weight: 600;
    font-size: 50px;
}
</style>