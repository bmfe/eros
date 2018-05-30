<template>
  <div>
    <div class="item-container" :style="contentStyle"><text>个人中心</text></div>
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
    }
  };
</script>