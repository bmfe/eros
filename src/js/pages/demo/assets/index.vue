<template>
    <div style="width:750px; padding-top:10px; padding-left:10px;padding-right:10px;">
        <text class="title2">本地图片:</text>
        <image style="width:500px; height:500px;margin-top: 20px;margin-left:115px" src="bmlocal://assets/demo.jpg"></image>
        <text class="title2" style='margin-top:20px;width:710px'>本地 ttf: &#xe606;&#xe605;&#xe604;&#xe603;&#xe602;&#xe601;&#xe600;</text>
        <text class="title3" style='margin-top:20px;width:710px'>本地 woff: &#xe606;&#xe605;&#xe604;&#xe603;&#xe602;&#xe601;&#xe600;</text>
    </div>
</template>
<style>
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
    color: #fff;
    font-size: 36;
    font-family: iconfont4;
  }
</style>

<script>
const CODE = `<div style="width:750px; padding-top:100px; padding-left:100px;padding-right:100px;">
        <text class="title2">本地图片:</text>
        <image style="width:550px; height:550px;margin-top: 50" src="bmlocal://assets/demo.jpg"></image>
        <text class="title2" style='margin-top:50px;width:500px'>本地 ttf: &#xe606;&#xe605;&#xe604;&#xe603;&#xe602;&#xe601;&#xe600;</text>
        <text class="title3" style='margin-top:50px;width:500px'>本地 woff: &#xe606;&#xe605;&#xe604;&#xe603;&#xe602;&#xe601;&#xe600;</text>
    </div>`
  export default {
    data() {
      return {
        code: CODE
      }
    },
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
      });
    }
  }
</script>