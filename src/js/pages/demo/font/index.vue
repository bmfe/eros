
<template>
    <div>
        <title title="字体设置"></title>
        <category title="大小"></category>
        <wxc-cell title="字母"
            desc="ABCDEFG"
            :has-top-border="true">
        </wxc-cell>
        <wxc-cell title="混合"
            desc="用 VUE 写一个属于自己的 APP。 "
            :has-top-border="true">
        </wxc-cell>
        <wxc-cell title="当前字体大小"
            :desc="fontSize"
            :has-top-border="true">
            <input class="input" style="tint-color: #1da1f2;" type="text" placeholder="请输入..." value="" />
        </wxc-cell>
        <div class="item-container">
            <wxc-button text="+"
                type="red"
                style="width: 100px;"
                @wxcButtonClicked="bigger"></wxc-button>
            <wxc-button text="-"
                type="blue"
                style="width: 100px;margin-left:40px;"
                @wxcButtonClicked="samller"></wxc-button>
        </div>
    </div>
</template>
<script>
import { WxcCell, WxcButton } from 'weex-ui'
import Title from '../_mods/title'
import Category from '../_mods/category'
export default {
    components: { WxcCell, WxcButton, Title, Category }, 
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
<style scoped>
.size-NORM {
    padding-top: 18px;
}

.size-BIG {
    padding-top: 14px;
}

.size-EXTRALARGE {
    padding-top: 14px;
}
.item-container {
    margin-top: 40px;
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
    flex-direction:row;
}
</style>