<template>
    <div class="switch-box">
        <switch  class="switch"
                 @change="onchange"
                 :checked="checked"
                 :disabled="disabled"></switch>
        <text class="switch-label">{{title}}</text>
    </div>
</template>


<style lang="sass" src="../css/radio.scss"></style>

<script>
    module.exports = {
        props: {
            "title": {      //文本
                type: String
            },
            "checked": {    //默认值为 false，表明按钮是否开启 is on or not.
                type: Boolean,
                default: false
            },
            "disabled": {   //默认值为 false，表明是否激活按钮
                type: Boolean,
                default: false
            }

        },
        methods: {
            "onchange": function (event) {
                this.checked = event.value;
                this.$emit("change", this.checked);
            }
        }
    }
</script>