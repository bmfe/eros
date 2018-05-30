<template>
    <scroller>
        <category title="默认" type="primary" style="margin-bottom:10px;"></category>
        <carousel style="margin-bottom:20px;" :options="imageList"></carousel>

        <category title="开启自动滑动" type="primary" style="margin-bottom:10px;"></category>
        <carousel style="margin-bottom:20px;" auto-play :options="imageList"></carousel>

        <category title="自定义宽高-默认会居中" type="primary" style="margin-bottom:10px;"></category>
        <carousel style="margin-bottom:20px;" :options="imageList" width="700" height="250"></carousel>

        <category title="自定义指示器" type="primary" style="margin-bottom:10px;"></category>
        <carousel style="margin-bottom:20px;" :options="imageList" :indicatorColor="indicatorColor"></carousel>
    </scroller>
</template>
<script>
import Category from 'eros-ui/components/category';
import Carousel from 'eros-ui/components/carousel';

export default {
    components: {  
        Carousel,
        Category
    },
    data () {
        return {
            imageList: [
                { imgUrl: 'http://meisu.huaban.com/data/afficheimg/1524019003416548789.jpg'},
                { imgUrl: 'http://meisu.huaban.com/data/afficheimg/1524022657726935930.jpg'},
                { imgUrl: 'http://meisu.huaban.com/data/afficheimg/1524018815627417492.jpg'},
                { imgUrl: 'http://meisu.huaban.com/data/afficheimg/1524022169253685399.jpg'},
            ],
            bannerInterval: 3000,
            indicatorColor: {
                "item-color": "#fff",
                "item-selected-color": "#000",
                "item-size": "30px"
            }
        }
    }
}    
</script>
