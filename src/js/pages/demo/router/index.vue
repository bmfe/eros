<template>
    <scroller>
        <title title="路由/原生导航"></title>
        <category title="路由相关"></category>
        <wxc-cell title="获取上一页传递的参数"
            desc="$router.getParams()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="getParams">
        </wxc-cell>
        <wxc-cell title="获取本页 URL 信息"
            desc="$router.getUrl()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="getUrl">
        </wxc-cell>
        <wxc-cell title="跳转到地图"
            desc="$router.toMap()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="toMap">
        </wxc-cell>
        <wxc-cell title="跳转到 WebView"
            desc="$router.toWebView()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="toWebView">
        </wxc-cell>
        <wxc-cell title="打开原生自带浏览器"
            desc="$router.openBrowser()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="openBrowser">
        </wxc-cell>
        <wxc-cell title="重新加载当前 Weex 页面"
            desc="$router.refresh()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="refresh">
        </wxc-cell>
        <wxc-cell title="设置 App 启动首页"
            desc="$router.setHomePage()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="setHomePage">
        </wxc-cell>
        <wxc-cell title="返回上一页"
            desc="$router.back()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="back">
        </wxc-cell>
        <category title="原生导航相关"></category>
        <wxc-cell title="设置原生导航中间文本及事件"
            desc="$navigator.setCenterItem()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="setCenterItem">
        </wxc-cell>
        <wxc-cell title="设置原生导航中间文本及事件"
            desc="$navigator.setCenterItem()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="setCenterItem">
        </wxc-cell>
    </scroller>
</template>
<script>
import { WxcCell } from 'weex-ui'
import Title from '../_mods/title'
import Category from '../_mods/category'
export default {
    components: { WxcCell, Title, Category }, 
    eros: {
        beforeAppear({text}) {
            this.$notice.toast({
                message: `从上个页面传递了: ${text}`
            })
            this.$navigator.setRightItem({
                text: '右侧',
                textColor: '#fff',
                fontSize: '32',
                fontWeight: 'normal'
            }, () => {
                // 点击回调
                this.$notice.toast({
                    message: '您点击了导航条右侧区域'
                })
            })
        }
    },
    data () {
        return {
            copyText: ''
        }
    },
    methods: {
        setCenterItem() {
            this.$notice.toast({
                message: '导航条名称已修改为 eros，并给予了点击事件。'
            })
            this.$navigator.setCenterItem({
                text: 'eros',
                fontSize: '48'
            }, () => {
                // 点击回调
                this.$notice.toast({
                    message: '您点击了 eros'
                })
            })
        },
        back () {
            this.$router.back({
                type: 'PRESENT'
            })
        },
        getParams () {
            this.$router.getParams().then(resData => {
                this.$notice.toast({
                    message: resData.text
                })
            })
        },
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
                url: 'https://www.baidu.com',
                title: 'WebView标题'
            })
        },
        getUrl () {
            const urlData = this.$router.getUrl('demo.router')
            this.$notice.toast({
                message: 'title: ' + urlData.title + ' \r\nurl: ' + urlData.url
            })
        },
        openBrowser () {
            this.$router.openBrowser('https://www.baidu.com')
        },
        setHomePage () {
            this.$router.setHomePage('/pages/demo/router/home.js')
            this.$notice.toast({
                message: '设置成功，请退出重启app'
            })
        },
        refresh () {
            this.$router.refresh()
        }
    }
}
</script>
