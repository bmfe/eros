<template>
  <div>
    <div class="item-container-home" :style="contentStyle">
        <text> 联系人 </text>
          <wxc-button text="设置红点"
              style="margin-top: 20px; width: 250px;"
              type="blue"
              @wxcButtonClicked="showBadge"></wxc-button>
          <wxc-button text="清除红点"
              style="margin-top: 20px; width: 250px;"
              type="blue"
              @wxcButtonClicked="hideBadge"></wxc-button>
    </div>
  </div>
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
  var tabbar = weex.requireModule('bmTabbar')
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
      showBadge () {
            tabbar.showBadge({
              index:2
            });
      },
      hideBadge () {
        tabbar.hideBadge({
          index:2
        })
      }
    }
  };
</script>