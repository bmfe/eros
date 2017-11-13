<template>
    <div class="bui-dialog-layout">
        <bui-mask v-if="show" @click="_maskClick"></bui-mask>
        <div class="bui-dialog" v-if="show">
            <div class="bui-dialog-title">
                <text class="dialog-title-text">{{title}}</text>
            </div>
            <div class="bui-dialog-content">
                <scroller>
                    <slot>
                    </slot>
                </scroller>
            </div>
            <div class="bui-dialog-footer">
                <text class="dialog-action-text" v-for="btn in getButtons" @click="_click(btn)">{{btn}}</text>
            </div>
        </div>
    </div>
</template>

<style lang="sass" src="../css/dialog.scss"></style>
<script>
    module.exports = {
        props: {
            show: {
                type: Boolean,
                default: false
            },
            title: {default: "标题"},
            buttons: {
                default: "取消,确定"
            }
        },
        computed: {
            "getButtons": function () {
                return this.buttons.split(',');
            }
        },
        components: {
            'bui-mask': require('./bui-mask.vue')
        },
        methods: {
            "_click": function (text) {
                this.$emit("btnClick", text);
            },
            "_maskClick": function () {
                this.$emit("maskClick");
            }
        }

    }
</script>