<template>
    <div>
        <text class="stylus-test">{{storageVal}}</text>
        <bui-button></bui-button>
        <bui-button type="primary" value="Primary" @click="setStorage"></bui-button>
        <bui-button type="success" value="Success" @click="clearStorage"></bui-button>
        <bui-button type="warning" value="Warning"></bui-button>
        <bui-button type="danger" value="Danger"></bui-button>
        <bui-button disabled="true" value="Disabled"></bui-button>
        <bui-image-slider :items="itemList" 
        @itemClick="onItemClick" 
        @change="onChange">
        </bui-image-slider>
    </div>
</template>

<script>
import buiButton from 'Eros/bui/components/bui-button'
import buiImageSlider from 'Eros/bui/components/bui-image-slider'
export default {
    components: { buiButton, buiImageSlider },
    data: function () {
        return {
            storageVal: {},
            itemList: [
                {
                    url: 'bmlocal://assets/test.jpeg'
                },
                {
                    url: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'
                },
                {
                    url: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'
                },
                {
                    url: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'
                }
            ]
        }
    },
    methods: {
         //图片切换时候的事件
        "onChange": function (e) {
            // console.log(e);
        },
        //点击图片的事件
        "onItemClick": function (e, index) {
            // console.log(index);
            // console.log(e);
        },
        setStorage() {
            this.$storage.setSync('name', '哈哈哈')
            this.storageVal = this.$storage.getSync('name')
        },
        clearStorage() {
            this.$storage.removeAllSync()
            this.storageVal = this.$storage.getSync('name')
        }
    }
}
</script>
