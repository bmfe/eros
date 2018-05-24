
<template>
      <carousel :interval="bannerInterval" auto-play style="width:750; heigh:700;" width="750" height="200" :options="imageList"></carousel>
</template>
<script>
    import Carousel from '/Users/zhangjingyi/Documents/eros/src/js/pages/demo/other/_mods/carousel.vue';
    export default {
        components: {  Carousel },
        data () {
            return {
              imageList: [
                { imgUrl: 'http://meisu.huaban.com/data/afficheimg/1524019003416548789.jpg'},
                { imgUrl: 'http://meisu.huaban.com/data/afficheimg/1524022657726935930.jpg'},
                { imgUrl: 'http://meisu.huaban.com/data/afficheimg/1524018815627417492.jpg'},
                { imgUrl: 'http://meisu.huaban.com/data/afficheimg/1524022169253685399.jpg'},
              ],
              bannerInterval: 3000
            }
        }
    }    
</script>
