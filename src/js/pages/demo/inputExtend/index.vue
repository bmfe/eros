<template>
    <div>
        <title title="光标拓展"></title>
        <category title="颜色修改"></category>
        <wxc-cell title="绿色"
            :has-top-border="true">
            <input class="input" style="tint-color: #4cbd34;" type="text" placeholder="请输入..." value="" />
        </wxc-cell>
        <wxc-cell title="蓝色"
            :has-top-border="true">
            <input class="input" style="tint-color: #1da1f2;" type="text" placeholder="请输入..." value="" />
        </wxc-cell>
    </div>
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
.input {
    width: 500px;
    height: 100px;
    margin-left: 10px;
    color: #6a737d;
}
</style>