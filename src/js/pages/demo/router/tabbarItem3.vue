<template>
  <div>
    <div class="item-container-home" :style="contentStyle">
        <text> tabbar相关方法 </text>
          <wxc-button text="设置红点"
              style="margin-top: 20px; width: 250px;"
              type="blue"
              @wxcButtonClicked="showBadge"></wxc-button>
          <wxc-button text="清除红点"
              style="margin-top: 20px; width: 250px;"
              type="blue"
              @wxcButtonClicked="hideBadge"></wxc-button>
          <wxc-button text="获取信息"
              style="margin-top: 20px; width: 250px;"
              type="blue"
              @wxcButtonClicked="getInfo"></wxc-button>
          <wxc-button text="修改配置"
              style="margin-top: 20px; width: 250px;"
              type="blue"
              @wxcButtonClicked="setInfo"></wxc-button>
          <wxc-button text="重置页面"
              style="margin-top: 20px; width: 250px;"
              type="blue"
              @wxcButtonClicked="resetTabbar"></wxc-button>
          <wxc-button text="清除配置信息"
              style="margin-top: 20px; width: 250px;"
              type="blue"
              @wxcButtonClicked="clearInfo"></wxc-button>
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
      tabStyles: Config.tabStyles,
      tabbarInfo: null,
      isChinese: true,
      engInfo:[
        {
          text:'Home',
          navTitle:'HomePage'
        },
        {
          text:'Contact',
          navTitle:'Contacts'
        },
        {
          text:'Center',
          navTitle:'My'
        }
      ],
      chineseInfo:[
        {
          text:'首页',
          navTitle:'首页'
        },
        {
          text:'联系人',
          navTitle:'联系人'
        },
        {
          text:'我',
          navTitle:'个人中心'
        }
      ]
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
      },
      getInfo(){
        this.tabbarInfo = tabbar.getInfo()
        this.$notice.toast({
                message: '获取成功'
            });
      },
      setInfo(){

        if (this.tabbarInfo == null)
        {
          this.$notice.toast({
                message: '请先获取信息'
            });
          return;
        }

        var list = this.tabbarInfo.list;
        var tmpInfo = this.isChinese ? this.engInfo : this.chineseInfo
        for (var i=0;i<list.length;i++) {
          var tmpItem = list[i]
          tmpItem.text = tmpInfo[i].text
          tmpItem.navTitle = tmpInfo[i].navTitle
        }
        this.isChinese = !this.isChinese

        tabbar.setInfo(this.tabbarInfo)

        var msg = this.isChinese ? '已设置中文' : '已设置英文';
        this.$notice.toast({
                message: msg
            });
      },
      resetTabbar()
      {
        this.$router.setHomePage('tabBar');
      },
      clearInfo(){
        tabbar.clearInfo()
        this.$notice.toast({
                message: '清除成功'
            });
      }
    }
  };
</script>