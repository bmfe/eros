<template>
    <list style="flex-direction: column; width: 750;top: 0" ref="list" showRefresh="true" @refresh="onrefresh">
        <cell>
            <text>这是一个新的路由页面</text>
            <image v-for="(imgUrl, index) in imgUrls" :key="index" @click="preview(index)" style="width: 500px; height: 500px;" :src="imgUrl" resize="contain"></image>
            <WxcButton text="修改 mediator-store" @wxcButtonClicked="changeStore"></WxcButton>
            <text>{{store}}</text> 
            <text>{{contacts}}</text>
        </cell>
    </list>
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
            imgUrls: [],
            contacts: null
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
            // this.$event.emit('store.count.add')
            // this.$storage.setSync('name',222)
            // var resData = this.$storage.getSync('name')
            // var test = this.$storage.getSync("name")
            this.$image.pick({
                maxCount: 9,
                imageWidth: '800',                  
                allowCrop: true                  
            }).then(imgUrls => {
                this.imgUrls = imgUrls
            }, error => {
                console.log(error)
            })
            // this.$coms.contacts().then(data => {
            //     this.contacts = data
            // })
            
        },
        pick(){
            bmImage.pick({
                maxCount: 9,
                imageWidth: 1000
            }, data => {
                this.imgUrl = data.data[0]
            })
        },
        preview(index){
            this.$image.preview({
                index,
                images: this.imgUrls
            })
        },
        onrefresh() {
            this.$geo.get().then(resData =>{
                setTimeout(() => {
                    this.$refs["list"].refreshEnd()
                },1000)
            })
        }
    }
}
</script>
