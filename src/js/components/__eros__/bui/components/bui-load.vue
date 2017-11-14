<template>
    <div class="load-layout">
        <bui-mask v-if="show" @click="layoutClick"></bui-mask>
        <div v-if="show" class="load-block">
            <bui-icon class="load-icon" name="icon-loadding"></bui-icon>
            <text class="load-text">{{message}}</text>
        </div>
    </div>
</template>

<script>
    var animation = weex.requireModule('animation');
    import buiIcon from './bui-icon'
    module.exports = {
        components: {buiIcon},
        props: {
            show: {
                type: Boolean,
                default: false
            },
            message: {
                type: String,
                default: '努力加载中...'
            }
        },
        data: function () {
            return {}
        },
        components: {
            'bui-mask': require('./bui-mask.vue'),
        },
        methods: {
            //点击mask遮罩层
            "layoutClick": function () {
                var _this = this;
                _this.$emit("close");
            },

        },
        created: function () {

        }
        
    }
</script>

<style lang="sass" src="../css/loading.scss"></style>
