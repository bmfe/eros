<template>
  <div>
    <div class="item-container-home" :style="contentStyle">
        <text> 可以重启 app 来查看变更效果</text>
          <wxc-button text="重置主页"
              style="margin-top: 20px; width: 250px;"
              type="blue"
              @wxcButtonClicked="reset"></wxc-button>
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
  export default {
    components: { WxcTabBar, WxcButton },
    data: () => ({
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles
    }),
    created () {
      this.$navigator.setNavigationInfo({
            statusBarStyle: 'LightContent'
      });
      const tabPageHeight = Utils.env.getPageHeight();
      const { tabStyles } = this;
      this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
    },
    methods: {
      reset () {
            this.$router.setHomePage('/pages/demo/index.js');
            this.$notice.toast({
                message: '重置成功'
            });
        }
    }
  };
</script>