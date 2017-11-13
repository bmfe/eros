<template>
    <slider :style="sliderStyle" :interval="interval" :auto-play="autoplay" :infinite="infinite"
            @change="_change">
        <div v-for="(item,index) in items">
            <bui-image @click="_click($event,index)"
                       :width="imgWidth"
                       :resize="imgResize"
                       :height="imgHeight"
                       :placeholder="placeholder"
                       :src="item.url">
            </bui-image>
        </div>
        <indicator class="indicator" :style="indicatorStyle"></indicator>
    </slider>
</template>

<style>
    .indicator {
        width: 750px;
        height: 100px;
        position: absolute;
        bottom: 0;
        left: 0;
        item-color: #ffffff;
        item-selectedColor: #747474;
        item-size: 20px;
        opacity: 0.8;
    }
</style>
<script>
import buiImage from './bui-image'
    module.exports = {
        components: {buiImage},
        props: {
            sliderStyle: {
                default: {
                    "width": "750px",
                    "height": "400px"
                }
            },
            indicatorStyle: {
                default: ""
            },
            items: {
                default: []
            },
            interval: {
                default: 2000
            },
            autoplay: {
                default: true
            },
            infinite: {
                default: true
            },
            imgResize: {
                default: "stretch"
            },
            imgWidth: {
                default: "750px"
            },
            imgHeight: {
                default: "750px"
            },
            placeholder: {
                default: ""
            }
        },
        data: function () {
            return {}
        },
        methods: {
            "_change": function (e) {
                this.$emit("change", e);
            },
            "_click": function (e, index) {
                this.$emit("itemClick", e, index);
            }
        }
    }
</script>
