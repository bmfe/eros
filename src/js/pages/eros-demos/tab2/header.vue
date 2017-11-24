<template>
<div>
    <bui-header title="标题栏" :leftItem="leftItem" :styleEx="{'background-color': 'black'}" :rightItem="rightItem" @leftClick="back" @rightClick="rightclick" @centerClick="centerclick" ios>
    </bui-header>
    <bui-header title="头部">
        <bui-icon slot="left" name="icon-search" size="45px" color="#ffffff" class="pdl10"></bui-icon>
        <bui-icon slot="right" name="icon-search" size="45px" color="#ffffff" class="pdl10"></bui-icon>
    </bui-header>
</div>
</template>

<script>

import buiHeader from 'Eros/bui/components/bui-header'
import buiIcon from 'Eros/bui/components/bui-icon'
import {foo1} from './test'
export default {
    components: {
        buiHeader, buiIcon
    },
    data () {
        return {
            leftItem: {
                icon: 'icon-back',
            },
            rightItem: {
                text: '更多'
            }
        }
    },
    methods: {
        back() {
            this.$router.back(1)
        },
        rightclick() {
            this.$notice.toast('right')
        },
        centerclick() {
            this.$notice.toast('center')
        }
    }
}
</script>

<style>
  
</style>
