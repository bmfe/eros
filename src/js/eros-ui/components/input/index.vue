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

<script>
export default {
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

<style lang="sass" src="./index.scss"></style>
 