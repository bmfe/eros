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

        <category title="事件-滑动/点击" type="primary" style="margin-bottom:10px;"></category>
        <carousel style="margin-bottom:20px;" :options="imageList" @change="change" @click="carouselImgClicked"></carousel>
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
                { imgUrl: 'http://meisu.huaban.com/data/afficheimg/1524019003416548789.jpg',desc: '序号：0'},
                { imgUrl: 'http://meisu.huaban.com/data/afficheimg/1524022657726935930.jpg',desc: '序号：1'},
                { imgUrl: 'http://meisu.huaban.com/data/afficheimg/1524018815627417492.jpg',desc: '序号：2'},
                { imgUrl: 'http://meisu.huaban.com/data/afficheimg/1524022169253685399.jpg',desc: '序号：3'}
            ],
            bannerInterval: 3000,
            indicatorColor: {
                "item-color": "#fff",
                "item-selected-color": "#000",
                "item-size": "50px"
            }
        }
    },
    methods: {
        change(index) {
            this.$notice.toast({
                message: '这是第'+index+'个图片'
            })
            console.log('这是第'+index+'个图片');
        },
        carouselImgClicked(index) {
            this.$notice.toast({
                message: this.imageList[index].desc
            })
        }
    }
}    
</script>
