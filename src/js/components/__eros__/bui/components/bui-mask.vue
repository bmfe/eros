<template>
    <div class="bui-mask" :style="{'opacity': opacity}" @click="_click"></div>
</template>

<script>

    export default {
        props: {
            "opacity": {
                default: '0.2'
            }
        },
        methods: {
            "_click": function () {
                this.$emit("click");
            }
        }
    }
</script>
<style lang="sass" src="../css/mask.scss"></style>