<template>
    <div style="background-color:white">
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
    </div>
</template>

<script>
import ErosButton from 'eros-ui/components/button'
import ErosIcon from 'eros-ui/components/icon'
export default {
    components: {
        ErosButton,
        ErosIcon,
    },
    data() {
        return {
        
        }
    },
    methods: {
        clicked() {
            this.$notice.toast("clicked")
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
