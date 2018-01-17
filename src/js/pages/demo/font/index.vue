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
            <text class="button" @click="bigger">增大</text>
            <text class="button" @click="samller">减小</text>
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
            fontSize: '',
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
<style>
.wrapper {
    flex-direction: row;
    justify-content: space-around;
}

.button {
    font-size: 32px;
    width: 180px;
    height: 80px;
    text-align: center;
    margin-top: 30px;
    padding-top: 18px;
    border-width: 2px;
    border-style: solid;
    color: #fff;
    border-color: #0473a5;
    border-radius: 15px;
    background-color: #0473a5;
}

.label {
    text-align: center;
    margin-top: 30px;
}
</style>