<template>
    <slider v-if="show" :auto-play="autoPlay" :interval="interval" :style="{ height: height  + 'px'}" @change="change">
        <div class="set-center" v-for="(v,index) in options" :style="{ height: height  + 'px'}" :key="index">
            <image  resize="cover" :src="v.imgUrl" :style= "{ height: height + 'px', width: width  + 'px'} "  @click="carouselImgClicked(index)">
        </div>
        <indicator v-if="options.length > 1" class="indicator" style="align-self: center" :style="indicatorStyle"></indicator>
    </slider>
</template>

<script>
export default {
    props: {
        autoPlay: {
            type: Boolean,
            default: false
        },
        width: {
            type: [Number, String],
            default: 750
        },
        height: {
            type: [Number, String],
            default: 300
        },
        show: {
            type: Boolean,
            default: true
        },
        interval: {
            type: [Number, String],
            default: 1000
        },
        options: {
            type: Array
        },
        indicatorColor: {
            type: Object,
            // default: () => ({
            //   "item-color": "#ceced9",
            //   "item-selected-color": "#0e90d2",
            //   "item-size": "14px"
            // })
        }
    },
    computed: {
        indicatorStyle() {
            return {
                "item-color": "#ceced9",
                "item-selected-color": "#0e90d2",
                "item-size": "14px",
                ...this.indicatorColor
            };
        }
    },
    methods: {
        carouselImgClicked(index) {
            this.$emit("click", index);
        },
        change(e) {
            this.$emit('change',e.index)
        }
    }
};
</script>

<style lang="sass" src="./index.scss"></style>
