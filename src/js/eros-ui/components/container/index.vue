<template>
    <div>
        <div v-if="statusBar" class="status-bar" :style="{'height': statusHeight,'background-color': statusBarColor}"></div>
        <slot></slot>
        <div v-if="touchBar" class="touch-bar" :style="{'height': touchHeight,'background-color': touchBarColor}"></div>
    </div>
</template>
<script>
export default {
    props: {
        statusBar: {
            type: Boolean,
            default: true
        },
        statusBarColor: {
            type: String,
            default: "#fff"
        },
        statusBarHeight: {
            type: String,
            default: ""
        },
        touchBar: {
            type: Boolean,
            default: false
        },
        touchBarColor: {
            type: String,
            default: "#fff"
        },
        touchBarHeight: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            statusHeight: Number.parseInt(
                this.statusBarHeight || weex.config.env.statusBarHeight || 40
            ),
            touchHeight: Number.parseInt(
                this.touchBarHeight || weex.config.env.touchBarHeight || 0
            )
        };
    },
    created() {},
    mounted() {
        console.log("statusHeight: " + this.statusHeight);
        console.log("touchHeight: " + this.touchHeight);
    },
    methods: {}
};
</script>
<style lang="sass" src="./index.scss"></style>
