<template>
    <div class="eros-list">
        <div class="cell-item" :class="cellStyle">
            <!-- <text class="cell-label" :value="label" :style="cellLabelStyle"></text>
            <text class="cell-flex" :value="desc" :class="justifyStyle" :style="cellFlexStyle"></text>
            <text class="arrow-right"></text> -->
            <slot name="label">
                <div v-if="label">
                    <text class="cell-label-text">{{label}}</text>
                </div>
            </slot>
           <div class="cell-title">
                <slot name="title">
                    <text class="cell-content" :class="justifyStyle">{{title}}</text>
                    <text class="cell-desc-text" :class="justifyStyle"
                          v-if="desc">{{desc}}</text>
                </slot>
            </div>
            <slot name="value"></slot>
            <slot></slot>
            <text class="extra-content-text" v-if="extraContent">{{extraContent}}</text>
            <text class="eros-icon eros-arrow" v-if="hasArrow">&#xe775;</text>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        extraContent: {
            type: String,
            default: ''
        },
        desc: {
            type: String,
            default: ''
        },
        border: {
            type: Boolean,
            default: true
        },
        justify: {
            type: Boolean,
            default: false
        },
        hasArrow: {
            type: Boolean,
            default: false
        },
        cellLabelStyle: Object,
        cellFlexStyle: Object
    },
    computed: {
        cellStyle() {
            return [
                this.border && 'bor-top',
            ]
        },
        justifyStyle() {
            return [
                this.justify && 'row-end'
            ]
        }
    }
}    
</script>

<style lang="sass" src="./index.scss"></style>