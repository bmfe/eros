<template>
    <scroller style="overflow:hidden">
        <title title="bui-swipe-cell 滑动组件"></title>
        <category title="简单滑动菜单-手势向左边滑动,菜单按钮操作"></category>
        <bui-swipe-cell @actionClick="clickmenu"
                        :items="btnAry1"
                        :title="'腾讯新闻-今日头条'"></bui-swipe-cell>
        <category title="滑动菜单-高度设置"></category>
        <bui-swipe-cell @actionClick="clickmenu"
                        :height="'150px'"
                        :items="btnAry1"
                        :title="'腾讯新闻-今日头条'"></bui-swipe-cell>
            <category title="场景1-组件扩展案例"></category>
        <bui-swipe-cell :items="btnAry1"
                        :title="'腾讯新闻-今日头条'">
            <div slot="content">
                <text style="color: red">自定义内容</text>
            </div>
        </bui-swipe-cell>
        <category title="场景2-与列表结合案例"></category>
        <div v-for="(i, index) in items" :key="index">
            <bui-swipe-cell :items="btnAry"
                            :title="i.title" 
                            :ref="`swipe_${index}`" 
                            ></bui-swipe-cell>
        </div>
    </scroller>
</template>

<script>
import { buiSwipeCell } from 'bui-weex'
import { WxcCell } from 'weex-ui'
import Title from '../_mods/title'
import Category from '../_mods/category'
export default {
    components: { buiSwipeCell, WxcCell, Title, Category },
    data () {
        return {
            btnAry1: [
                {
                    'title': '取消',
                    'bgcolor' : '#c6c7c8'
                },
                {
                    'title': '标记',
                    'bgcolor' : '#3399ff'
                }
            ],
            btnAry: [
                {
                    'title': '取消',
                    'bgcolor' : '#c6c7c8'
                },
                {
                    'title': '删除',
                    'bgcolor' : '#fa3300'
                },
                {
                    'title': '标记',
                    'bgcolor' : '#3399ff'
                }
            ],
            items: [
                {
                    'title':'行无止尽'
                },
                {
                    'title':'柠檬'
                },
                {
                    'title':'樊登读书会'
                },
                {
                    'title':'云应用平台'
                }
            ]
        }
    },
    methods: {
        clickmenu(e){
            if(e == 0){
                this.$notice.toast(this.btnAry1[e-0].title);
            }else if(e == 1){
                this.$notice.toast(this.btnAry1[e-0].title);
            }
        }
    }
}
</script>
