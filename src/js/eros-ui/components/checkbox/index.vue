<template>
        <erosCell>
            <icon 
            v-if="icon && !loading" 
            :name="icon" 
            :class="erosCheckbox" 
            @click="_click"
            @longpress="_longPress"></icon>
            <!-- <unicodeIcon 
            v-if="unicodeIcon" 
            :name="unicodeIcon" 
            :class="erosCheckbox"></unicodeIcon>
            <text class="eros-check-txt" 
            :class="erosCheckbox"
            :value="title" ></text> -->
        </erosCell>
</template>

<script>
    import erosCell from "../cell"
    import Icon from 'eros-ui/components/icon'

    // import unicodeIcon from "../icon-type"
    export default {
       components: { 
            erosCell,
            Icon
            // unicodeIcon,
        },
        props: {
            title: {
                type: String,
                default: "text"
            },
            type: {
                type: String,
                default: 'default'
            },
            icon: {
                type: String
            },
            unicodeIcon: {
                type: String,
            },
            checked: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            justify: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            erosCheckbox() {
                return [
                     `theme-${this.type}`,
                     this.unicode && this.title,
                     this.icon 
                ]
            },
            justify() {
                return [
                    this.justify && 'flex-1'
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

<style lang="sass" src="./index.scss"></style>
 