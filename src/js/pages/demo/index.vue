<template>
    <div>
        <div class="status-bar" :style="{'height': statusBarHeight}"></div>
        <waterfall class="container" :show-scrollbar="false">
            <eros-profile></eros-profile>
            <cell class="line"></cell>
            
            <eros-core></eros-core>
            <eros-native></eros-native>
            <eros-notice></eros-notice>
            <eros-tools></eros-tools>
            <eros-three></eros-three>
            
            <eros-expand></eros-expand>

            <eros-components></eros-components>

            <eros-uilib></eros-uilib>
            <eros-advanced></eros-advanced>
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
import ErosCore from './components/core'
import ErosNotice from './components/notice'
import ErosNative from './components/native'
import ErosThree from './components/three'
import ErosExpand from './components/expand'
import ErosTools from './components/tools'
import ErosProfile from './components/profile'
import ErosComponents from './components/components'
import ErosUilib from './components/uilib'
import ErosAdvanced from './components/advanced'
import { buiButton } from 'bui-weex';

export default {
    components: { 
        ErosCore, ErosTools, ErosNative, 
        ErosProfile, ErosExpand, ErosNotice, 
        ErosThree, ErosComponents, ErosUilib,
        ErosAdvanced, buiButton
    },
    data () {
        return {
            curHomeBackTriggerTimes: 1,
            maxHomeBackTriggerTimes: 5,

            statusBarHeight: weex.config.eros.statusBarHeight ? weex.config.eros.statusBarHeight : 40,
            touchBarHeight: weex.config.eros.touchBarHeight ? weex.config.eros.touchBarHeight : 20
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

        this.$event.on('popBmMask', () => {
            this.$refs['bmmask'].show()
        })
        // 安卓自定义退出 app
        this.androidFinishApp()
    },
    methods: {
        androidFinishApp () {
            const globalEvent = weex.requireModule('globalEvent')
            globalEvent.addEventListener('homeBack', options => {
                (this.curHomeBackTriggerTimes === this.maxHomeBackTriggerTimes) && this.$router.finish()
                this.curHomeBackTriggerTimes++
                this.$notice.toast({ message: `点击返回${this.maxHomeBackTriggerTimes}次之后，会关闭应用，当前点击第${this.curHomeBackTriggerTimes}次` })
            })
        }
    }
}
</script>
<style lang="scss" src='./index.scss'></style>