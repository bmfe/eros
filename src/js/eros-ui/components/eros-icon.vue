<template>
  <text class="icon-font" :style="mergeStyle" @click="_click(name)">{{Icon[name]}}</text>
</template>

<style scoped>
  .icon-font {
    color: #ffffff;
  }
</style>

<script>
  const Icon = {
  less: '\ue6a5',
  'more_unfold': '\ue6a6',
  back: '\ue697',
  more: '\ue6a7',
  add: '\ue6b9',
  subtract: '\ue6fe',
  close: '\ue69a',
  cry: '\ue69c',
  delete: '\ue69d',
  help: '\ue6a3',
  refresh: '\ue6aa',
  search: '\ue6ac',
  success: '\ue6b1',
  warning: '\ue6b6',
  wrong: '\ue6b7',
  clock: '\ue6bb',
  scanning: '\ue6ec',
  filter: '\ue6f1',
  map: '\ue715',
  play: '\ue719'
}


  const dom = weex.requireModule('dom')

  export default {
    props: {
      name: {
        default: 'success',
        type: String
      },
      size: {
        default: 'small',
        type: String
      },
      iconStyle: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({
      Icon
    }),
    beforeCreate () {
      dom.addRule('fontFace', {
        'fontFamily': "weexUiIconFont",
        'src': "url('//at.alicdn.com/t/font_520368_r89ekv69euahsemi.ttf')"
      })
    },
    computed: {
      mergeStyle () {
        const { iconStyle, size } = this
        let fontSize = '48px'
        switch (size) {
          case 'xs':
            fontSize = '24px'
            break
          case 'small':
            fontSize = '48px'
            break
          case 'medium':
            fontSize = '72px'
            break
          case 'big':
            fontSize = '128px'
            break
          default:
            fontSize = '48px'
        }
        return {
          fontFamily: 'weexUiIconFont',
          fontSize,
          ...iconStyle
        }
      }
    },
    methods: {
      _click (name) {
        this.$emit('click', {
          name
        })
      }
    }
  }
</script>
