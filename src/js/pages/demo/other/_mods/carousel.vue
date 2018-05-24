
<template>
    <slider v-if="show"
            :auto-play="autoPlay"
            :interval="interval"
            :style="{ height: height  + 'px'}">
        <div v-for="(v,index) in options"
            :style="{ height: height  + 'px'}"
            :key="index">
        <image  resize="cover"
                :src="v.imgUrl"
                :style= "{ height: height + 'px', width: width  + 'px'} " 
                @click="carouselImgClicked(v.linkUrl)"></image>
        </div>
        <indicator v-if="options.length > 1" class="indicator"
                    :style="indicatorStyle"></indicator>
    </slider>
</template>
<style lang="scss" scoped>
    @import "../../../../css/reset.scss";
    .indicator {
        position: absolute;
        item-color: #ceced9;
        item-selected-color: #07ae9c;
        item-size: 14px;
        height: 6;
        flex-direction: row;
        justify-content: center;
        /* border-radius: 6; */
        bottom: 16;
    }
</style>

<script>
export default {
  props: {
    autoPlay: {
      type: Boolean,
      default: false
    },
    width: {
      type: [Number, String],
      default: 710
    },
    height: {
      type: [Number, String],
      default: 180
    },
    show: {
      type: Boolean,
      default: true
    },
    interval: {
      type: [Number, String],
      default: 1000
    },
    options: Array,
    indicatorColor: {
      type: Object,
      default: () => ({
        "item-color": "#ceced9",
        "item-selected-color": "#0e90d2",
        "item-size": "14px"
      })
    }
  },
  computed: {
    indicatorStyle() {
      return {
        width: this.width + "px",
        ...this.indicatorColor
      };
    }
  },
  methods: {
    carouselImgClicked(url) {
      this.$emit("carouselImgClicked", url);
    }
  }
};
</script>