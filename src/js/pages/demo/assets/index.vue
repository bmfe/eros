<template>
    <scroller>
        <title title="本地资源"></title>
        <category title="本地图片"></category>
        <wxc-cell title="assets"
            desc="将图片放到 src/assets 目录下即可使用"
            :has-top-border="true"></wxc-cell>
        <image style="width:500px; height:500px;margin-top: 20px;margin-left:115px" src="bmlocal://assets/demo.jpg"></image>
        <category title="本地图标"></category>
        <wxc-cell title="assets"
            desc="将图标放到 src/iconfont 目录下即可使用"
            :has-top-border="true"></wxc-cell>
        <wxc-cell title="本地 ttf:"
            :has-top-border="true">
            
              <text class="title2" style='width:500px'> &#xe606;&#xe605;&#xe604;&#xe603;&#xe602;&#xe601;&#xe600;</text>
            </wxc-cell>
            <wxc-cell title="本地 woff:"
            :has-top-border="true">
            
              <text class="title3" style='width:500px'> &#xe606;&#xe605;&#xe604;&#xe603;&#xe602;&#xe601;&#xe600;</text>
            </wxc-cell>
    </scroller>
</template>
<script>
import { WxcCell } from 'weex-ui'
import Title from '../_mods/title'
import Category from '../_mods/category'
export default {
    components: { WxcCell, Title, Category }, 
    beforeCreate () {
      var domModule = weex.requireModule('dom');
      // 目前支持ttf、woff文件，不支持svg、eot类型,moreItem at http://www.iconfont.cn/

      domModule.addRule('fontFace', {
        'fontFamily': 'iconfont2',
        'src': 'url(\'bmlocal://iconfont/font_1469606063_76593.ttf\')'
      });
      domModule.addRule('fontFace', {
        'fontFamily': 'iconfont3',
        'src': 'url(\'bmlocal://iconfont/font_1469606522_9417143.woff\')'
      })
    }
}
</script>
<style scoped>
  .title1 {
    color: #1DA1F2;
    font-size: 36;
    font-family: iconfont1;
  }

  .title2 {
    color: #1DA1F2;
    font-size: 36;
    font-family: iconfont2;
  }

  .title3 {
    color: #1DA1F2;
    font-size: 36;
    font-family: iconfont3;
  }

  .title4 {
    color: #ffffff;
    font-size: 36;
    font-family: iconfont4;
  }
</style>