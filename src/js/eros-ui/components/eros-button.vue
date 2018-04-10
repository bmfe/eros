<template>
    <div class="btn-container" :class="innerContainerStyle"
         :style="btnStyle"
         @longpress="_longPress"
         @click="_click">
        <slot></slot>
        <icon 
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

<style lang="scss" scoped>
    @import '../style/variables';
    @import '../style/util';
    .btn-container {
        width: 700px;
        height: 88px;
        border-radius: 3px;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        background-color: #FFFFFF;
        border-width: 3px;
    }
   
    .btn-text {
        text-overflow: ellipsis;
        lines: 1;
        font-size: 36px;
        color: #FFFFFF;
    }
    .btn-raised {
        box-shadow: $box-shadow-raised;
    }
    .btn-circle {
        border-radius: 88px;
    }
    .btn-background-default {
        background-color: $color-default;
    }
    .btn-background-primary {
        background-color: $color-primary;
    }
    .btn-background-warning {
        background-color: $color-warning;
    }
    .btn-background-danger {
        background-color: $color-danger;
    }
    .btn-background-success {
        background-color: $color-success;
    }
    .btn-border-default {
        border-color: $color-default;
    }
    .btn-border-primary {
        border-color: $color-primary;
    }
    .btn-border-warning {
        border-color: $color-warning;
    }
    .btn-border-danger {
        border-color: $color-danger;
    }
    .btn-border-success {
        border-color: $color-success;
    }
    .btn-color-default {
        border-color: $color-default;
    }
    .btn-color-default {
        color: $color-default;
    }
    .btn-color-primary {
        color: $color-primary;
    }
    .btn-color-warning {
        color: $color-warning;
    }
    .btn-color-danger {
        color: $color-danger;
    }
    .btn-color-success {
        color: $color-success;
    }
</style>

<script>
    import Icon from './eros-icon'
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
                default: 'default'
            },
            icon: {
                type: String
            },
            disabled: {
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
                    !this.hollow && `btn-background-${this.type}`,
                    `btn-border-${this.type}`,
                    this.circle && 'btn-circle',
                    this.raised && 'btn-raised'
                ]
            },
            innerTextStyle() {
                return [
                    this.hollow && `btn-color-${this.type}`,
                    this.icon && this.text && 'pd-rt-18'
                ]
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