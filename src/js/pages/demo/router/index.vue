<template>
    <div>
        <web style="flex:1" src='bmlocal://assets/test.html'></web>
    </div>
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
        }
    },
    data () {
        return {
            tapBackTime: 0,
            navShow: true,
            statusBarStyle: 'LightContent'
        }
    },
    methods: {
        setNavigationInfo() {
            const _navShow = !this.navShow
            const _statusBarStyle = this.statusBarStyle === 'LightContent' ? 'Default' : 'LightContent'

            this.$navigator.setNavigationInfo({
                title: 'setNavigationInfo',
                navShow: _navShow,                   
                statusBarStyle: _statusBarStyle      
            })
            this.navShow = _navShow
            this.statusBarStyle = _statusBarStyle
             this.$notice.toast({
                message: `
导航条 ${_navShow ? '显示': '隐藏'}

状态栏变更为 ${_statusBarStyle}

导航条名称变为 setNavigationInfo
`
            })
        },
        setLeftItem() {
            this.$notice.toast({
                message: '导航条左侧名称已修改为 返回'
            })
            this.$navigator.setLeftItem({
                text: '返回',
                textColor: '#fff',
                fontSize: '32',
                fontWeight: 'normal'
            }, () => {
                // 点击回调
                if(this.tapBackTime === 2) this.back()
                this.$notice.toast({
                    message: '重写了返回事件，再点一次即可返回。'
                })
                this.tapBackTime ++
            })
        },
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
        setRightItem (){
            this.$notice.toast({
                message: '导航条右侧名称已修改为 right，并给予了点击事件。'
            })
            this.$navigator.setRightItem({
                text: 'right',
                textColor: '#fff',
                fontSize: '32',
                fontWeight: 'normal'
            }, () => {
                // 点击回调
                this.$notice.toast({
                    message: '您点击了导航条右侧区域'
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
        toWebView () {
            this.$router.toWebView({
                url: 'bmlocal://assets/test.html?value=123&vaule2=kdkdkkd',
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
            this.$router.setHomePage('tabBar')
            this.$notice.toast({
                message: '设置成功'
            })
        },
        refresh () {
            this.$router.refresh()
        }
    }
}
</script>
