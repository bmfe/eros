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
            <text class="eros-icon eros-arrow">&#xe775;</text>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "../../../../css/reset.scss";
    .eros-list {
        @extend %bg-white;
    }
    .cell-item {
        position: relative;
        @extend %row-start;
        @extend %bg-white;
        padding-right: 30;
        margin-left: 30;
        height: 90;
    }
    .bor-top {
        @extend %border-top;
    }
    .cell-label {
        width: 180;
        font-size: 30;
        @extend %c-text;
    }
    .cell-flex {
        flex: 1;
        font-size: 30;
        @extend %c-base;
        justify-content: flex-end;
    }
    .row-end {
        text-align: right;
    }
    .cell-title {
        flex: 1;
    }
    .cell-label-text {
        font-size: 30;
        color: #666666;
        width: 188;
        margin-right: 10;
    }
    .cell-arrow-icon {
        width: 22;
        height: 22;
    }
    .cell-content {
        color: #333333;
        font-size: 30;
        line-height: 40;
    }
    .cell-desc-text {
        color: #999999;
        @extend %fs24;
        line-height: 30;
        margin-top: 4;
    }
    .extra-content-text {
        font-size: 28;
        color: #999999;
        margin-right: 4;
    }
</style>
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