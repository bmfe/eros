<template>
    <div class="bui-slider-bar">
        <bui-mask v-if="show" @click="layoutClick"></bui-mask>
        <div v-if="show" class="bui-slider-bar-box" :class="['bui-'+type+'-slider-bar-box']" v-on:swipe="onSwipe($event)" ref="navbar">
            <!--<text class="bui-slider-title">{{type=='left' ? '左':'右'}}侧滑动栏题</text>-->
            <div class="bui-slider-content">
                <scroller>
                    <slot>
                    </slot>
                </scroller>
            </div>
        </div>
    </div>

</template>

<style lang="sass" src="../css/slider-bar.scss"></style>

<script>
    var animation = weex.requireModule('animation');
    module.exports = {
        props: {
            show: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'left'
            }
        },
        components: {
            'bui-mask': require('./bui-mask.vue')
        },
        methods: {
            //动画操作
            animationFn : function (el, translate, timing, fn) {
                animation.transition(el, {
                    styles:{
                        transform: translate,
                        transformOrigin: 'center center'
                    },
                    duration: 300, //ms
                    timingFunction: timing,
                    delay: 0 //ms
                }, function () {
                    fn && fn();
                })
            },
            //打开左侧滑动栏
            "openBar": function () {
                var navbar = this.$refs['navbar'];
                if(this.type == 'left'){
                    this.animationFn(navbar, 'translate(600px, 0)',  'ease-in');
                }else{
                    this.animationFn(navbar, 'translate(-600px, 0)',  'ease-in');
                }

            },
            //点击mask遮罩层
            "layoutClick": function () {
                var _this = this;
                var navbar = this.$refs['navbar'];

                switch(this.type) {
                    case "left":
                        this.animationFn(navbar, 'translate(-600px, 0px)',  'ease-in', function () {
                            _this.show = false;
                            _this.$emit("close");
                        });
                        break;
                    case "right":
                        this.animationFn(navbar, 'translate(600px, 0px)',  'ease-in', function () {
                            _this.show = false;
                            _this.$emit("close");
                        });
                        break;
                    default:
                        console.log("6666");
                }
            },
            //手势
            "onSwipe": function (event) {
                console.log('onSwipe'+11111);
                switch(this.type){
                    case "left":
                        if(event.direction == 'left'){
                            this.layoutClick();
                        }
                        break;
                    case  "right":
                        if(event.direction == 'right'){
                            this.layoutClick();
                        }
                        break;
                    default:
                        console.log("手势无效");
                }
            }
        },
    }
</script>