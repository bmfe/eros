<template>
<div class="container">
    <div class="category">
        <text class="category-text">bui-weex</text>
    </div>
    <list class="bui-list">
        <cell class="bui-cell" v-for="(item, index) in eros" :key="index" @click="go(item.name)" @longpress="onLongpress">
            <div class="bui-list-main">
                <text class="bui-list-title">{{item.label}}</text>
            </div>
            <div class="bui-list-right">
                <!--<bui-icon name="icon-go"></bui-icon>-->
            </div>
        </cell>
    </list>
</div>
</template>

<script>
if (process.env.NODE_ENV === 'development')  require('Config')
import { buiIcon } from 'Eros/bui'
export default {
    components: { buiIcon },
    data: {
        eros: [{
            label: '按钮',
            name: 'tab2.button'
        },{
            label: '提示',
            name: 'tab2.tip'
        },{
            label: '标题',
            name: 'tab2.header'
        },{
            label: '图片',
            name: 'tab2.image'
        },{
            label: '选项卡',
            name: 'tab2.tabbar'
        }]
    },
    methods: {
        go(name) {
            this.$router.open({name})
        }
    }
}
</script>

<style lang="sass" scoped>
@import "../../../components/__eros__/bui/css/list.scss";
.container {
    background-color: #f2f3f4;
}
.category {
    margin-bottom: 10px;
    margin-top: 0px;
    padding-left: 24px;
    width: 750px;
    height: 200px;
    background-color: #ffffff;
    justify-content: center;
}

.category-text {
    font-weight: 600;
    font-size: 50px;
}
</style>
