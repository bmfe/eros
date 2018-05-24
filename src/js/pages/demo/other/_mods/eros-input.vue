<template>
    <div class="eros-form" :class="listStyle">
        <div class="eros-item" :class="cellStyle" :style="cellStyle">
            <div class="flex-row" :class="justify" :style="fullJustified">
                <text class="icon"></text>
                <input class="eros-input" type="text" :placeholder="placeholder">
            </div>
            <text class="eros-input-right" :value="descripe"></text>
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
        flex-direction: row;
        @extend %bg-white;
        padding-right: 30;
        margin-left: 30;
        height: 90;
        align-items: center;
    }
    .bor-top {
        border-top-width: 1px;
        border-style: solid;
        border-color: #eee;
        &:first-child {
            border: 0;
        }
    }
    .cell-tit {
        width: 180;
        font-size: 30;
        @extend %c-text;
    }
    .cell-flex {
        flex: 1;
        font-size: 30;
        @extend %c-base;
        text-align: left;
    }
    .eros-input {
        font-size: 30;
        color: red;
    }
    .flex-row {
        @include align($justify-content: flex-start);
    }
    .flex-1 {
        @include flex-direction(row);
        @include flex();
        @include justify-content(flex-start);
    }
</style>
<script>
   export default {
        name: 'eros-list',
        props: {
            type: {
                type: String,
                default: "text"
            },
            placeholder: {
                type: String,
                default: "请输入~"
            },
            disabled: {
                type: Boolean,
                default: true
            },
            descripe: {
                type: String,
                default: "",
            },
            border: {
                type: Boolean,
                default: true
            },
            cellStyle: Object,
            fullJustified: Object
        },
        computed: {
            cellStyle() {
                return [
                    this.border && 'bor-top',
                ]
            },
            justify() {
                return [
                    this.flex && 'flex-1'
                ]
            }
        },
   }
</script>
 