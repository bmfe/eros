<template>
    <list>
        <cell>
        <category title="默认按钮" hollow color="dark"></category>
        <div class="row">
            <eros-button text="white" hollow></eros-button>
        </div>

        <category title="颜色样式" hollow color="dark"></category>
        <div class="row mg-tp-20 wrap">
            <eros-button class="space" text="Primary" type="primary" @click="clicked" raised></eros-button>
            <eros-button class="space" text="Secondary" type="secondary" @click="clicked"></eros-button>
            <eros-button class="space" text="Success" type="success" @click="clicked"></eros-button>
            <eros-button class="space" text="Warning" type="warning" @click="clicked"></eros-button>
            <eros-button class="space" text="Danger" type="danger" @click="clicked"></eros-button>
            <eros-button class="space" text="Dark" type="dark" @click="clicked"></eros-button>
            <eros-button class="space" text="Default" hollow @click="clicked"></eros-button>
            <eros-button class="space" text="Silver" type="silver" @click="clicked"></eros-button>
        </div>
        <category title="通栏按钮" hollow color="dark" ></category>
        <eros-button type="success" raised>
            <eros-icon name="success" style="padding-right: 20px;"></eros-icon>
            <text style="color: white;">Success</text>
        </eros-button>
        <category title="按钮状态" hollow color="default"></category>
        <div class="row">
            <div class="describe">disabled</div>
            <eros-button class="space" type="primary" text="primary" disabled></eros-button>
            <div class="describe">active</div>
            <eros-button class="space" type="secondary" text="secondary" active></eros-button>
        </div>
        
       
        <category title="大圆角按钮" hollow color="dark" ></category>
        <eros-button class="space" type="warning" text="warning" circle></eros-button>

        <category title="空心按钮" hollow color="dark"></category>
        <div class="row mg-tp-20 wrap">
            <eros-button class="space" hollow text="Primary" type="primary" @click="clicked"></eros-button>
            <eros-button class="space" hollow text="Secondary" type="secondary" @click="clicked"></eros-button>
            <eros-button class="space" hollow text="Success" type="success" @click="clicked"></eros-button>
            <eros-button class="space" hollow text="Warning" type="warning" @click="clicked"></eros-button>
            <eros-button class="space" hollow text="Danger" type="danger" @click="clicked"></eros-button>
            <eros-button class="space" hollow text="Dark" type="dark" @click="clicked"></eros-button>
            <eros-button class="space" hollow text="Default" @click="clicked"></eros-button>
            <eros-button class="space" hollow text="Silver" type="silver" @click="clicked"></eros-button>
        </div>
        <category title="带自定义图标" hollow color="dark" ></category>
        <div class="row mg-tp-20 wrap">
            <eros-button class="space" text="带自定义图标" icon="back" hollow @click="clicked"></eros-button>
            <eros-button class="space" text="带自定义图标" icon="add" type="primary" @click="clicked"></eros-button>
            <eros-button class="space" text="带自定义图标" icon="success" type="success" @click="clicked"></eros-button>
            <eros-button class="space" text="带自定义图标" icon="search" type="warning" @click="clicked"></eros-button>
            <eros-button class="space" text="带自定义图标" icon="close" type="danger" @click="clicked"></eros-button>
            <eros-button class="space" text="带自定义图标" icon="success" type="dark" @click="clicked"></eros-button>
        </div>
        </cell>
    </list>
</template>

<script>
import Category from 'eros-ui/components/category';
import ErosButton from 'eros-ui/components/button'
import ErosIcon from 'eros-ui/components/icon'
export default {
    components: {
        Category, 
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
    .space {
        margin-left:25
    }
    .row {
        padding-top: 30;
        padding-bottom: 30;
        padding-right: 30;
        padding-left: 30;
        flex-direction: row;
        background-color: #fff;
        overflow: hidden;
    }
    .space {
        margin: 10;
    }
    .wrap {
        flex-wrap: wrap;
    }
    .describe {
        font-weight: 700;
        color: #333;
        line-height: 1.2;
    }
</style>
