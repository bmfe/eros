<template>
    <!-- <div style="background-color:white">
        <eros-button class="mg-tp-20 mg-lf-25" circle text="default" raised></eros-button>
        <eros-button class="mg-tp-20 mg-lf-25" circle type="primary" text="primary"></eros-button>
        <eros-button class="mg-tp-20 mg-lf-25" type="danger" text="danger"></eros-button>
        <eros-button class="mg-tp-20 mg-lf-25" type="success" raised>
            <eros-icon name="success" style="padding-right: 20px;"></eros-icon>
            <text style="color: white;">success</text>
        </eros-button>
        <eros-button class="mg-tp-20 mg-lf-25" circle type="primary" text="primary" hollow></eros-button>
        <eros-button class="mg-tp-20 mg-lf-25" type="warning" text="warning" hollow></eros-button>
        <eros-button class="mg-tp-20 mg-lf-25" icon="success" type="success" hollow></eros-button>
        <div class="row mg-tp-20">
            <eros-button class="mg-lf-25" style="width: 88px;" icon="success" type="success" circle @click="clicked"></eros-button>
            <eros-button class="mg-lf-25" style="width: 88px;" icon="add" type="primary" circle @click="clicked"></eros-button>
            <eros-button class="mg-lf-25" style="width: 88px;" icon="search" type="warning" circle @click="clicked"></eros-button>
            <eros-button class="mg-lf-25" style="width: 88px;" icon="close" type="danger" circle @click="clicked"></eros-button>
            <eros-button class="mg-lf-25" style="width: 88px;" icon="back" type="default" circle @click="clicked" raised></eros-button>
            <eros-button class="mg-lf-25" style="width: 88px;" icon="success" type="success" circle hollow @click="clicked"></eros-button>
        </div>
    </div> -->
    <cell>
        <wxc-cell title="cell" desc="cell" :has-arrow="true" :has-top-border="true" @wxcCellClicked="jump('cell')">
        </wxc-cell>
        <wxc-cell title="tab-bar" desc="tab-bar" :has-arrow="true" :has-top-border="true" @wxcCellClicked="jump('tab-bar')">
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
    </cell>
</template>

<script>
import { WxcCell } from 'weex-ui'
// import ErosButton from 'eros-ui/components/eros-button'
// import ErosIcon from 'eros-ui/components/eros-icon'
export default {
    components: {
        // ErosButton,
        // ErosIcon,
        WxcCell
    },
    data() {
        return {
            loading: false
        }
    },
    methods: {
        clicked() {
            this.$notice.toast("clicked")
        },
        jump(name) {
            this.$router.open({
                name: `demo.other.${name}`
            })
        }
    }
}
</script>

<style scoped>
.mg-tp-20 {
    margin-top:20
}
.mg-lf-25 {
    margin-left:25
}
.row {
    flex-direction: row
}
</style>
