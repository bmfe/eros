<template>
  <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="icon"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <div class="item-container-home" :style="contentStyle">
        <text> 可以重启 app 来查看变更效果</text>
          <wxc-button text="重置主页"
              style="margin-top: 20px;"
              type="normal"
              @wxcButtonClicked="reset"></wxc-button>
    </div>
    <div class="item-container" :style="contentStyle"><text>特别推荐</text></div>
    <div class="item-container" :style="contentStyle"><text>消息中心</text></div>
    <div class="item-container" :style="contentStyle"><text>我的主页</text></div>
  </wxc-tab-bar>
</template>

<style scoped>
  .item-container-home {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
  }
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
  }
</style>
<script>

  import { WxcTabBar, WxcButton, Utils } from 'weex-ui';
  import Config from './config'
  export default {
    components: { WxcTabBar, WxcButton },
    data: () => ({
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles
    }),
    created () {
      const tabPageHeight = Utils.env.getPageHeight();
      const { tabStyles } = this;
      this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
    },
    methods: {
      wxcTabBarCurrentTabSelected (e) {
        const index = e.page;
        // console.log(index);
      },
      reset () {
            this.$router.setHomePage('/pages/demo/index.js');
            this.$notice.toast({
                message: '重置成功'
            });
        }
    }
  };
</script>