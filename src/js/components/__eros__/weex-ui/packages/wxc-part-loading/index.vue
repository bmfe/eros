<template>
  <div>
    <image :src="PART"
           v-if="show"
           :style="loadingStyle"
           resize="contain"
           quality="original"></image>
  </div>
</template>

<script>
  import { PART } from '../wxc-loading/icon.base64';
  module.exports = {
    props: {
      show: {
        type: Boolean,
        default: false
      },
      width: {
        type: [Number, String],
        default: 36
      },
      height: {
        type: [Number, String],
        default: 36
      }
    },
    data: () => ({
      PART
    }),
    computed: {
      loadingStyle () {
        const { height, width } = this;
        return {
          height: `${height}px`,
          width: `${width}px`
        }
      }
    }
  };
</script>
