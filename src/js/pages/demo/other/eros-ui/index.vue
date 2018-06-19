<template>
    <list>
        <cell>
            <wxc-cell title="button" desc="button" :has-arrow="true" :has-top-border="true" @wxcCellClicked="jump('button')">
            </wxc-cell>
            <wxc-cell title="cell" desc="cell" :has-arrow="true" :has-top-border="true" @wxcCellClicked="jump('cell')">
            </wxc-cell>
            <wxc-cell title="tab-bar" desc="tab-bar" :has-arrow="true" :has-top-border="true" @wxcCellClicked="jump('tab-bar')">
            </wxc-cell>
            <wxc-cell title="tab-page" desc="tab-page" :has-arrow="true" :has-top-border="true" @wxcCellClicked="jump('tab-page')">
            </wxc-cell>
            <wxc-cell title="carousel" desc="轮播图" :has-arrow="true" :has-top-border="true" @wxcCellClicked="jump('carousel')">
            </wxc-cell>
            <wxc-cell title="checkBox" desc="checkBox。" :has-arrow="true" :has-top-border="true" @wxcCellClicked="jump('checkBox')">
            </wxc-cell>
            <wxc-cell title="checkBox-list" desc="checkBox-list。" :has-arrow="true" :has-top-border="true" @wxcCellClicked="jump('checkBox-list')">
            </wxc-cell>
            <wxc-cell title="radio" desc="radio。" :has-arrow="true" :has-top-border="true" @wxcCellClicked="jump('radio')">
            </wxc-cell>
            <wxc-cell title="input" desc="input" :has-arrow="true" :has-top-border="true" @wxcCellClicked="jump('input')">
            </wxc-cell>
            <wxc-cell title="search" desc="search" :has-arrow="true" :has-top-border="true" @wxcCellClicked="jump('search')">
            </wxc-cell>
            <wxc-cell title="container" desc="兼容iPhone X" :has-arrow="true" :has-top-border="true" @wxcCellClicked="jump('container')">
            </wxc-cell>
        </cell>
    </list>
</template>

<script>
import { WxcCell } from 'weex-ui'

export default {
    components: {
        WxcCell
    },
    data() {
        return {

        }
    },
    methods: {
        jump(name) {
            this.$router.open({
                name: `demo.other.${name}`
            })
        }
    }
}
</script>
