<template>
        <div class="cell-item" :class="cellStyle" :style="{ height: cellHeight + 'px'}">
            <slot></slot>
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
            <text class="extra-content-text" v-if="extraContent">{{extraContent}}</text>
            <text class="eros-icon eros-arrow" v-if="hasArrow">&#xe775;</text>
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
        wrap: {
            type: Boolean,
            default: false
        },
        cellHeight: {
            type: Number,
            default: 90
        },
        cellPadding: {
            type: Boolean,
            default: true
        },
        cellMargin: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        cellStyle() {
            return [
                this.border && 'bor-top',
                this.wrap && 'cell-wrap',
                this.cellHeight,
                this.cellPadding && 'cell-padding',
                this.cellMargin && 'cell-margin'
            ]
        },
        justifyStyle() {
            return [
                this.justify && 'row-end'
            ]
        },
    }
}    
</script>


<style lang="sass" src="./index.scss"></style>
