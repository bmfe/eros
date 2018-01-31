<template>
  <wxc-tab-bar :tab-titles="tabTitles" :tab-styles="tabStyles" title-type="icon" @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <!--The first page content-->
    <div class="item-container" :style="contentStyle">
      <text>Home</text>
    </div>

    <!--The second page content-->
    <div class="item-container" :style="contentStyle">
      <text>Hot</text>
    </div>

    <!-- The third page content-->
    <div class="item-container" :style="contentStyle">
      <text>Message</text>
    </div>

    <!-- The fourth page content-->
    <div class="item-container" :style="contentStyle">
      <text>My</text>
    </div>
  </wxc-tab-bar>
</template>

<script>
import { WxcTabBar, Utils } from "weex-ui";
import Config from "./config";
var modal = weex.requireModule("modal");
export default {
  data() {
    return {
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles
    };
  },
  created() {
    this.$notice.toast({
      message: "hello" // 展示内容
    });
    this.$navigator.setNavigationInfo({
      statusBarStyle: "LightContent"
    });
    const tabPageHeight = Utils.env.getPageHeight();
    // If the page doesn't have a navigation bar
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    const { tabStyles } = this;
    this.contentStyle = { height: tabPageHeight - tabStyles.height + "px" };
  },
  components: { WxcTabBar },
  methods: {
    wxcTabBarCurrentTabSelected(e) {
      const index = e.page;
      console.log(e.page,'###########')

    // FIXME 崩溃
    //   this.$notice.toast({
    //     message: index // 展示内容
    //   });
      // if (index == 3) {
      //   this.$navigator.setNavigationInfo({
      //     statusBarStyle: "LightContent"
      //   });
      // }
    }
  }
};
</script>
<style scoped>
.item-container {
  width: 750px;
  background-color: #f2f3f4;
  align-items: center;
  justify-content: center;
}
</style>