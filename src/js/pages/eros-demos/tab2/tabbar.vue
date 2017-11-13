<template>
    <div>
        <bui-tabbar
            :tabItems="tabItems"
            :currentTab="currentTab"
            showSelectedLine="true"
            @load="onTabLoad"
            @itemClick="onTabItemClick">
        </bui-tabbar>

        <!--内容部分-->
        <slider class="slider" :index="index" auto-play="false" @change="change($event)">
            <!--选项卡内容-->
            <bui-tabbar-item tabId="tab1" :currentTab="currentTab">
                <scroller style="width: 750px;flex: 1">
                    <div>
                        <text v-for="i in 100">选项卡{{i}}</text>
                        <text>我是滚动的内容</text>
                    </div>
                </scroller>
            </bui-tabbar-item>
            <bui-tabbar-item tabId="tab2" :currentTab="currentTab">
              <div class="slider-item">
                  <scroller style="width: 750px;flex: 1">
                    <div>
                        <text v-for="i in 100">选项卡{{i}}</text>
                        <text>我是滚动的内容</text>
                    </div>
                </scroller>
              </div>
            </bui-tabbar-item>
            <bui-tabbar-item tabId="tab3" :currentTab="currentTab">
                <text>选项卡3</text>
            </bui-tabbar-item>
            <bui-tabbar-item tabId="tab4" :currentTab="currentTab">
                <text>选项卡4</text>
            </bui-tabbar-item>
        </slider>
    </div>
</template>
<style scoped>
.slider {
  width: 750;
  position: absolute;
  top: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
}

.slider-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
}
</style>
<script>
import {buiTabbar, buiTabbarItem} from 'Eros/bui'
export default {
    data() {
        return {
            //当前选择的tab
            currentTab: "tab1",
            index:1,
            tabItems: [
                {
                    tabId: "tab1",
                    title: "首页",
                    icon: "icon-home"
                },
                {
                    tabId: "tab2",
                    icon: "icon-liwu",
                    title: "动态"
                },
                {
                    tabId: "tab3",
                    icon: "icon-user",
                    title: "我的"
                },
                {
                    tabId: "tab4",
                    icon: "icon-video",
                    title: "直播"
                }
            ]
        }
    },
    components: {
        buiTabbar, buiTabbarItem
    },
    methods: {
        //选项卡加载完成事件,必须实现
        onTabLoad(tabId, index) {
            this.currentTab = tabId;
            this.index=index;
        },
        //选项卡点击事件,必须实现
        onTabItemClick(e, tabId, index) {
            this.currentTab = tabId;
            this.index = index;
        },
        //slider 在改变的时候
        change(e) {
            console.log(e.index)
            this.index = e.index;
            this.currentTab = this.tabItems[index].tabId;
        }
    }
}
</script>