
<template>
    <tabs :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></tabs>
</template>
<script>
import tabs from 'Components/tabs/bar'
const IMAGE ='http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png'
const SELECTED_IMAGE = 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png'
export default {
    globalEvent: {
        appActive() {
            console.log('active')
        },
        appDeactive() {
            console.log('deactive')
        }
    },
    bmRouter: {
        viewWillAppear() {
            console.log('viewWillAppearTrigger')
        }
    },
    created() {
        let globalEvent = weex.requireModule('globalEvent')
        globalEvent.addEventListener("homeBack", options => {
            (this.curHomeBackTriggerTimes === this.maxHomeBackTriggerTimes) && this.$router.finish()
            this.curHomeBackTriggerTimes ++
            this.$notice.toast({message: `点击返回${this.maxHomeBackTriggerTimes}次之后，会关闭应用，当前点击第${this.curHomeBackTriggerTimes }次`})
        })
    },
    data() {
        return {
            curHomeBackTriggerTimes: 0,
            maxHomeBackTriggerTimes: 5,
            bundleUrl: '',
            tabItems: [{
                index: 0,
                title: 'weex-ui',
                titleColor: '#000000',
                icon: '',
                image: IMAGE,
                selectedImage: SELECTED_IMAGE,
                src: `${weex.config.eros.jsServer}/dist/js/pages/eros-demos/tab1/tab-page/index.js`,
                visibility: 'visible',
            },
            {
                index: 1,
                title: 'eros-widget',
                titleColor: '#000000',
                icon: '',
                image: IMAGE,
                selectedImage: SELECTED_IMAGE,
                src: `${weex.config.eros.jsServer}/dist/js/pages/eros-demos/tab2/index.js`,
                visibility: 'hidden',
            },
            {
                index: 2,
                title: 'eros-demo',
                titleColor: '#000000',
                icon: '',
                image: IMAGE,
                selectedImage: SELECTED_IMAGE,
                src: `${weex.config.eros.jsServer}/dist/js/pages/eros-demos/tab3/index.js`,
                visibility: 'hidden',
            }],
        }
    },
    components: {
        tabs
    },
    methods: {
       tabBarOnClick(e) {
            console.log('tabsOnClick', e.index)
        }
    }
}
</script>
