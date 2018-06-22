<template>
        <div class="eros-cell-checkbox" :class="erosCheckbox" @click="_toggle">
            <icon 
            v-if="icon && !loading" 
            :name="icon" 
            :class="erosCheckTheme" 
            ></icon>
            <slot name="label" :class="justifyStyle">
                <div v-if="label" :class="justifyStyle">
                    <text class="cell-label-text" :class="erosCheckTheme">{{label}}</text>
                </div>
            </slot>
        </div>
</template>

<script>
    import erosCell from "../cell"
    import Icon from 'eros-ui/components/iconEros'
    export default {
       components: { 
            erosCell,
            Icon
        },
        props: {
            label: {
                type: String,
            },
            theme: {
                type: String,
                default: 'primary'
            },
            icon: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            checked: {
                type: Boolean,
                default: false
            },
            border: {
                type: Boolean,
                default: true
            },
            justify: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            erosCheckbox() {
                return [
                     this.border && 'bor-top',
                ]
            },
            erosCheckTheme() {
                return [
                    this.icon, 
                    `theme-${this.theme}`,
                    this.disabled && 'theme-gray-light',
                    !this.checked && 'theme-gray-light'
                ]
            },
            justifyStyle() {
                return [
                    this.justify && 'flex-1'
                ]
            }
        },
        methods: {
            _toggle(){
               this.checked = !checked;
            },
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
 