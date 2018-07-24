<template>
  <div>
    <div class="item-container-home" :style="contentStyle">
        <text> tabbar相关方法 </text>
          <wxc-button text="设置角标"
              style="margin-top: 20px; width: 250px;"
              type="blue"
              @wxcButtonClicked="showBadge"></wxc-button>
          <wxc-button text="清除角标"
              style="margin-top: 20px; width: 250px;"
              type="blue"
              @wxcButtonClicked="hideBadge"></wxc-button>
          <wxc-button text="获取下标"
              style="margin-top: 20px; width: 250px;"
              type="blue"
              @wxcButtonClicked="getIndex"></wxc-button>
          <wxc-button text="监听index"
              style="margin-top: 20px; width: 250px;"
              type="blue"
              @wxcButtonClicked="watchIndex"></wxc-button>
          <wxc-button text="取消监听"
              style="margin-top: 20px; width: 250px;"
              type="blue"
              @wxcButtonClicked="clearWatch"></wxc-button>
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
              index:1,
              value:3
            });
      },
      hideBadge () {
        tabbar.hideBadge({
          index:1
        })
      },
      getIndex () {
        var index = tabbar.getIndex()
        this.$notice.toast({
                message: index
            });
      },
      watchIndex(){
        tabbar.watchIndex(resData => {
          this.$notice.toast({
                message: resData
            });
        })
      },
      clearWatch(){
        tabbar.clearWatch()
      }
    }
  };
</script>