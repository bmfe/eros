<template>
    <div class="bui-tabbar-wrapper">

        <div class="bui-scroller-bar-top" append="tree">
            <scroller class="bui-scroller-tabbar" scroll-direction="horizontal" show-scrollbar=false>
                <tabitem
                        v-for="item in tabItems"
                        :key="item.index"
                        :index="item.index"
                        :title="item.title"
                        :titleColor="item.titleColor"
                        :titleSize="titleSize"
                        :selected="item.selected"
                        :length="tabItems.length"
                        :scroll="scroll"
                        @tabItemOnClick="tabItemOnClick"
                ></tabItem>
            </scroller>
        </div>

        <embed
                v-for="(item , i) in tabItems"
                :src="item.src"
                :key="i"
                type="weex"
                :style="{ visibility: item.visibility }"
                class="bui-scroller-tabbar-content"
        ></embed>
    </div>
</template>

<style lang="sass" src="../css/tabbar.scss"></style>

<script>
    module.exports = {
        props: {
            scroll: {},
            tabItems: {default: []},
            selectedColor: {default: '#3399ff'},
            unselectedColor: {default: '#8a8a8a'},
            titleSize: {},
            top: {default: "0px"}, //内容区域离顶部的距离
            selectedIndex: {default: 0} //当前选中的索引
        },
        data: function () {
            return {}
        },
        components: {
            tabitem: require('./bui-tabbar-scroll-item.vue')
        },
        created: function () {
            this.select(this.selectedIndex);
        },
        methods: {
            tabItemOnClick: function (e) {
                this.selectedIndex = e.index;
                this.select(e.index);
                this.$emit('tabItemOnClick', e);
            },
            select: function (index) {
                for (var i = 0; i < this.tabItems.length; i++) {
                    var tabItem = this.tabItems[i];
                    if (i == index) {
                        tabItem.selected = true;
                        tabItem.titleColor = this.selectedColor;
                        tabItem.visibility = 'visible';
                    }
                    else {
                        tabItem.selected = false;
                        tabItem.titleColor = this.unselectedColor;
                        tabItem.visibility = 'hidden';
                    }
                }
            }
        }
    }
</script>
