<template>
    <text :class="['btn', 'btn-' + (disabled?'disabled':type)]"
          :style="{'border-radius':radius}"
          @longpress="_longpress($event)"
          @click="_click($event)">{{value}}</text>
</template>
<style lang="sass" src="../css/button.scss"></style>

<script>
    module.exports = {
        props: {
            "type": {default: 'default'},
            "value": {default: 'Button'},
            "disabled": {default: false},
            "radius": {default: "0px"}
        },
        methods: {
            "_click": function (e) {
                if (!this.disabled) {
                    this.$emit("click",e);
                }
            },
            "_longpress": function (e) {
                if (!this.disabled) {
                    this.$emit("longpress",e);
                }
            }
        }
    }
</script>

