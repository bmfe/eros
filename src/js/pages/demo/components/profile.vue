<template>
    <header class="desc" ref="profile">
        <text class="desc-title icon" ref="logo" style="font-size: 100px">&#xe618;</text>
        <!--<text class="desc-info">eros 的定位不是仅仅是一个库，由于 app 开发的特殊性，则更偏重关心于整个 app 项目。</text>-->
        <div class="desc-info-1">
            <bmrichtext style="height: 100px;">
                <bmspan class="desc-info-text-bold" value="eros"></bmspan>
                <bmspan class="desc-info-text" value=" 是什么？"></bmspan>
            </bmrichtext>
        </div>
        <text class="desc-info-2">二次封装 weex，用 Vue 写一个属于自己的 APP。</text>
        <div class="desc-detail">
            <text class="desc-detail-item" v-for="(desc,index) in DESC_TYPE" :key="index"> {{desc}} </text>
        </div>
        <div class="desc-detail" style="margin-top: 100px;">
            <text class="desc-detail-github icon" @click="openWebView('https://github.com/bmfe/eros-template')">&#xeee2;</text>
            <text class="desc-detail-wiki icon" @click="openWebView('https://github.com/bmfe/eros-template/wiki')">&#xe713;</text>
        </div>
    </header>
</template>

<script>
const DESC_TYPE = [
    'iOS', 'Android', 'VUE', 
    'Widget', 'Module', 'Appboard',
    'Mediator', 'BS diff', 'eros-cli', 'eros-publish', 
    'weex debug', 
    'Camera', 'Image', 'Contacts', 'ESlint', 'hot-refresh', 'weex-ui']
import { WxcTag } from 'weex-ui'
export default {
    components: { WxcTag },
    data() {
        return {
            DESC_TYPE
        }
    },
    methods: {
        openWebView (url) {
            this.$router.toWebView({
                url
            })
        }
    }
}
</script>
<style scoped>
.desc {
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  background-color: #1da1f2;
}

.desc-title {
  width: 700px;
  text-align: center;
  font-weight: 600;
  font-size: 100;
  color: #FFFFFF;
  margin-bottom: 30px;
}

.desc-info-1,
.desc-info-2 {
  color: #FFFFFF;
  font-weight: 500;
  font-size: 30px;
}

.desc-info-2 {
  margin-top: 30px;
}

.desc-detail {
  flex-direction: row;
  flex-wrap: wrap;
  width: 750px;
}

.desc-detail-item {
  margin-top: 20px;
  margin-right: 20px;
  color: #7d7d7d;
  font-weight: 300;
  font-size: 30px;
  background-color: #FFFFFF;
  padding: 5px;
  border-radius: 6px;
}

.desc-detail-github,
.desc-detail-wiki {
  width: 375px;
  font-weight: 500;
  font-size: 50px;
}

.desc-detail-github {
  text-align: right;
  padding-right: 50px;
}

.desc-detail-wiki {
  padding-left: 50px;
}

.desc-info-text {
  color: #FFFFFF;
  font-weight: 300;
  font-size: 30px;
}

.desc-info-text-bold {
  color: #FFFFFF;
  font-weight: 600;
  font-size: 80px;
}

.icon {
  color: #FFFFFF;
  font-family: iconfont-eros;
}
</style>
