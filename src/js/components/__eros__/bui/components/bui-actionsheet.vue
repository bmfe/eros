<template>
    <div class="bui-actionsheet">
        <bui-mask v-if="show" @click="layoutClick"></bui-mask>
        <div v-if="show" class="bui-actionsheet-box" :style="{'bottom': '-'+bottom+'px'}" ref="actionsheetBox">
            <div class="bui-actionsheet-top">
                <text class="bui-actionsheet-title">{{title}}</text>
                <div class="bui-actionsheet-content">
                    <text class="bui-actionsheet-list" v-for="item in items" @click="actionsheetItemClick(item)">{{item}}</text>
                </div>
            </div>
            <div class="bui-actionsheet-bottom">
                <text class="bui-actionsheet-btn" @click="actionsheetBtnClick">{{button}}</text>
            </div>
        </div>
    </div>

</template>

<script>
    var animation = weex.requireModule('animation');
    module.exports = {
        props: {
            title: {
                default: "请选择操作"
            },
            items: {
                type: Array
            },
            show: {
                type: Boolean,
                default: false
            },
            button: {
                default: "取消"
            }
        },
        computed:{
            "bottom":function () {
                //根据下拉菜单内容计算bottom距离
                var length = this.items.length;
                var len = (length+1)*100+80;
                console.log(len);
                return len;
            }
        },
        components: {
            'bui-mask': require('./bui-mask.vue'),
        },
        methods: {
            //动画操作
            animationFn : function (el, translate, timing, fn) {
                animation.transition(el, {
                    styles:{
                        transform: translate,
                        transformOrigin: 'center center'
                    },
                    duration: 200, //ms
                    timingFunction: timing,
                    delay: 0 //ms
                }, function () {
                    fn && fn();
                })
            },
            //打开上拉菜单
            "open": function () {
                console.log("open"+this.bottom);
                var _this = this;
                var el = _this.$refs.actionsheetBox;
                var translate = 'translate(0px, -'+ (_this.bottom+20) +'px, 0px)';
                _this.animationFn(el, translate,  'ease-in')
            },
            //点击mask遮罩层
            "layoutClick": function () {
                var _this = this;
                var el = this.$refs.actionsheetBox;
                var translate = 'translate(0px, '+ (_this.bottom+20) +'px, 0px)';
                _this.animationFn(el, translate,  'ease-in', function () {
                    _this.show = false;
                    _this.$emit("close");
                });
            },
            //上拉菜单项点击事件
            "actionsheetItemClick": function (item) {
                var _this = this;
                var el = this.$refs.actionsheetBox;
                var translate = 'translate(0px, '+ (_this.bottom+20) +'px, 0px)';
                _this.animationFn(el, translate,  'ease-in', function () {
                    _this.show = false;
                    _this.$emit('itemClick', item);
                });
            },
            //上拉菜单按钮点击事件
            "actionsheetBtnClick": function () {
                var _this = this;
                var el = this.$refs.actionsheetBox;
                var translate = 'translate(0px, '+ (_this.bottom+20) +'px, 0px)';
                _this.animationFn(el, translate,  'ease-in', function () {
                    _this.show = false;
                    _this.$emit('btnClick');
                });
            }
        }
    }
</script>

<style lang="sass" src="../css/actionsheet.scss" />