<template>
    <scroller>   
        <text>这是一个新的路由页面</text>
        <image @click="preview" style="width: 500px; height: 500px;" :src="imgUrl" resize="contain"></image>
        <!-- <WxcButton text="修改 mediator-store" @wxcButtonClicked="changeStore"></WxcButton>
        <text>{{store}}</text> -->
        <text @click="camera">拍照</text>
        <text @click="pick">相册</text>
    </scroller>
</template>

<script>
var bmImage = weex.requireModule('bmImage')
import { WxcButton } from 'weex-ui';
export default {
    created() {
        this.bindEvent()
    },
    components: {
        WxcButton
    },
    data(){
        return {
            store: null,
            imgUrl: "bmlocal://assets/test.jpeg"
        }
    },
    methods: {
        bindEvent() {
            this.$event.on('store.count.get', data => {
                this.store = data
            })
            this.$event.on('store.change', data => {
                this.store = data
            })
        },
        changeStore() {
            // var self = this
            this.$event.emit('store.count.add')
            // this.$storage.setSync('name',222)
            // var resData = this.$storage.getSync('name')
            // var test = this.$storage.getSync("name")
        },
        camera(){
            bmImage.camera({
                imageWidth:1000,
                allowCrop: true
            }, data => {
                console.log(data.data[0])
                this.imgUrl = data.data[0]
            })
        },
        pick(){
            bmImage.pick({
                maxCount: 9,
                imageWidth: 1000
            }, data => {
                this.imgUrl = data.data[0]
            })
        },
        preview(){
            bmImage.preview({
                index: 0,
                images: [this.imgUrl]
            },data => {

            })
        }
    }
}
</script>
