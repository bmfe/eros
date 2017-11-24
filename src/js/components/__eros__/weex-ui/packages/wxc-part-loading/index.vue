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
  import icon from '../wxc-loading/icon.base64';
  console.log(icon)
  export default {
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
