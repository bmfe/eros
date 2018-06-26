<template>
    <div class="btn-container" :class="innerContainerStyle"
         :style="btnStyle"
         @longpress="_longPress"
         @click="_click">
        <slot></slot>
        <icon 
            class="btn-text"
            v-if="icon && !loading" 
            :name="icon" 
            :class="innerTextStyle" 
            @click="_click"
            @longpress="_longPress"></icon>
        <!--<icon ref="loading" v-if="loading" name="refresh"></icon>-->
        <text 
            class="btn-text"
            :class="innerTextStyle" 
            ref="text"
            :style="textStyle" 
            v-if="text" 
            :value="text"></text>
    </div>
</template>

<script>
import Icon from 'eros-ui/components/icon'
const animation = weex.requireModule('animation')
export default {
    components: { Icon },
    props: {
        text: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        },
        icon: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        },
        hollow: {
            type: Boolean,
            default: false
        },
        raised: {
            type: Boolean,
            default: false
        },
        btnStyle: Object,
        textStyle: Object
    },
    computed: {
        innerContainerStyle() {
            return [
                `eros-border-${this.type}`,
                !this.hollow && `bg-${this.type}`,
                this.disabled && 'btn-disabled',
                this.circle && 'btn-circle',
                this.raised && 'btn-raised',
                this.active && `bg-${this.type}-active`
            ]
        },
        innerTextStyle() {
            if(this.type != `white`) {
                return [
                    !this.hollow && `theme-white`,
                    this.hollow && `theme-${this.type}`,
                    this.icon && this.text && 'pd-rt-18'
                ]
            }
        }
    },
    methods: {
        _click (e) {
            if (!this.disabled) this.$emit('click', e)
        },
        _longPress(e){
            if (!this.disabled) this.$emit('longpress', e)
        }
    }
}
</script>

<style lang="sass" src="./index.scss"></style>