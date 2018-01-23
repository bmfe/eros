<template>
    <scroller>
        <div class="wrapper">
            <text class="label">ABCDEFG</text>
        </div>
        <div class="wrapper">
            <text class="label">红鲤鱼与绿鲤鱼与驴</text>
        </div>
        <div class="wrapper">
            <text class="label">当前字体大小：{{fontSize}}</text>
        </div>
        <div class="wrapper">
            <text class="button button-small" :class="['size-'+fontSize]" @click="bigger">增大</text>
            <text class="button button-small" :class="['size-'+fontSize]" @click="samller">减小</text>
        </div>
    </scroller>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config')

module.exports = {
    bmRouter: {
        viewWillDisappear (options) {
            // 离开页面时将字体置为NORM
            this.$font.changeFontSize({
                fontSize: 'NORM'
            }).then(resData => {

            }, error => {})
        }
    },
    created () {
        this.getFontSize()
    },
    data () {
        return {
            fontSize: 'NORM',
            fontType: ['NORM', 'BIG', 'EXTRALARGE']
        }
    },
    methods: {
        getFontSize () {
            this.$font.getFontSize().then(resData => {
                this.fontSize = resData.fontSize;
            })
        },
        bigger () {
            const index = this.fontType.indexOf(this.fontSize)
            if (index >= 2) {
                this.$notice.toast({
                    message: '字体已最大'
                })
                return
            }
            this.$font.changeFontSize({
                fontSize: this.fontType[index + 1]
            }).then(resData => {
                this.getFontSize()
            })
        },
        samller () {
            const index = this.fontType.indexOf(this.fontSize)
            if (index === 0) {
                this.$notice.toast({
                    message: '字体已最小'
                })
                return
            }
            this.$font.changeFontSize({
                fontSize: this.fontType[index - 1]
            }).then(resData => {
                this.getFontSize()
            })
        }
    }
}
</script>
<style lang="sass" scoped>
@import 'src/js/css/base';

.label {
    width: 750px;
}

.size-NORM {
    padding-top: 18px;
}

.size-BIG {
    padding-top: 14px;
}

.size-EXTRALARGE {
    padding-top: 14px;
}
</style>