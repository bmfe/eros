
<template>
    <div>
        <title title="富文本组件"></title>
        <category title="bmrichtext/bmspan"></category>
        <wxc-cell label="展示">
             <bmrichtext class="item-container hd-txt">
                <bmspan value="已提交"></bmspan>
                <bmspan class="f-green" value="18"></bmspan>
                <bmspan  value="天"></bmspan>
                <bmspan class="f-green" value="3"></bmspan>
                <bmspan  value="小时"></bmspan>
                <bmspan class="f-green" value="1"></bmspan>
                <bmspan value="分"></bmspan>
            </bmrichtext>
        </wxc-cell>
       
         <wxc-cell label="展示">
             <bmrichtext class="item-container protocol-txt">
                <bmspan value="这是正常的文字，"></bmspan>
                <bmspan class="underline" value="这是带下划线的文字。"></bmspan>
            </bmrichtext>
        </wxc-cell>
    </div>
</template>
<script>
import { WxcCell } from 'weex-ui'
import Title from '../_mods/title'
import Category from '../_mods/category'
export default {
    components: { WxcCell, Title, Category }
}
</script>
<style scoped>
.item-container {
    width: 500px;
    height: 100px;
}
.hd-txt {
    line-height: 100;
    color: #7d7d7d;
    font-weight: 500;
}
.f-green {
    color: #07ae9c;
}
.protocol-txt {
    font-size: 32;
    /*color: #333;*/
    line-height: 62;
    color: #7d7d7d;
    font-weight: 500;
}
.underline {
  font-weight: bold;
  text-decoration: underline;
}
</style>

