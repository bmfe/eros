<template>
  <text class="icon-font" :style="mergeStyle" @click="_click(name)">{{Icon[name]}}</text>
</template>

<script>
const Icon = {
    checked: '\ue722',
    unChecked: '\ue720',
    checkedDisabled: '\ue721',
    unCheckedDisabled: '\ue63a',
    radio: '\ue71e',
    unRadio: '\ue72f',
    radioDsabled: '\ue71f',
    unRadioDsabled: '\ue71a'
}

const dom = weex.requireModule('dom')

export default {
    props: {
      name: {
        default: 'unChecked',
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
      domModule.addRule('fontFace', {
          fontFamily: 'eros-icon',
          'src': 'url(\'bmlocal://iconfont/eros-iconfont.ttf\')'
      });
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
          fontFamily: 'eros-icon',
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

<style lang="sass" src="./index.scss"></style>
