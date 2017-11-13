<template>
    <div class="bui-dropdown">
        <bui-mask v-if="show" @click="layoutClick"></bui-mask>
        <div v-if="show" class="bui-dropdown-box" ref="dropdownBox" :style="{'left': left, 'top': top, 'width': widthDrop}">
            <div class="bui-dropdown-content" :style="{ 'background-color': bgColor }">
                <slot>
                </slot>
            </div>
            <text class="bui-dropdown-jiantou" :style="{color: iconColor, fontSize: '40px', 'font-family': 'jiantou' ,'left': sanjiaoLeft}">&#xe646;</text>
            <!--<bui-icon name="icon-jiantou" :color="iconColor" class="bui-dropdown-jiantou" :style="{'left': sanjiaoLeft}"></bui-icon>-->
        </div>
    </div>
</template>

<script>
    var animation = weex.requireModule('animation');
    module.exports = {
        data: function () {
            return {
                widthDrop: "260px",
                left: "0px",
                top: "0px",
                sanjiaoLeft: "40px",
                position: {
                    width: '0px',
                    height: '0px',
                    left: '0px',
                    right: '0px'
                }
            }
        },
        props: {
            datadrop: {},
            bgColor: {
                type: String,
                default: "#ffffff"
            },
            iconColor: {
                type: String,
                default: "#ffffff"
            },
            show: {
                type: Boolean,
                default: false
            },
            center: {
                type: Boolean,
                default: false
            },
            autowidth: {
                type: Boolean,
                default: true
            }
        },
        created: function () {
            //此url可以是指向本地字体图标文件路径 也可以直接用阿里巴巴字体图标库的的字体图标地址 ,比如'https://at.alicdn.com/t/font_3ppcziztn5wpcik9.ttf'
            var bundleUrl = weex.config.bundleUrl;
            var url = bundleUrl.split('/').slice(0, -1).join('/');
            url += '/font/jiantou.ttf';
            var domModule = weex.requireModule("dom");
            domModule.addRule('fontFace',{
                'fontFamily': 'jiantou',
                'src': "url('"+url+"')"
            });
        },
        computed:{
        },
        components: {
            'bui-mask': require('./bui-mask.vue'),
        },
        methods: {
            //动画操作
            animationFn : function (el, opacity, translate, timing, fn) {
                animation.transition(el, {
                    styles:{
                        opacity: opacity,
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
            "open": function (data) {
                var _this = this;
                var el = _this.$refs.dropdownBox;

                _this.position = data.position;
                //autowidth默认true，宽度按触发元素宽度自适应，如果控制宽度可设置为false，宽度为260px
                if(_this.autowidth){
                    if(_this.position.width >= 260) {
                        _this.widthDrop = _this.position.width;
                        if(_this.center){
                            _this.sanjiaoLeft = _this.position.width/2-20;
                            _this.left = _this.position.x;
                        }else{
                            if((750 - _this.position.x) < 260){
                                _this.left = _this.position.x - (260 - (750 - _this.position.x))-20;
                                _this.sanjiaoLeft = 260 - 80;
                            }else{
                                _this.left = _this.position.x + "px";
                            }
                        }
                    }else{
                        if(_this.center){
                            _this.sanjiaoLeft = 260/2 - 20;
                            _this.left = _this.position.x - (260-_this.position.width)/2;
                        }else{
                            if((750 - _this.position.x) < 260){
                                _this.left = _this.position.x - (260 - (750 - _this.position.x))-20;
                                _this.sanjiaoLeft = 260 - 80;
                            }else{
                                _this.left = _this.position.x + "px";
                            }
                        }
                    }

                }else{
                    if(_this.center){
//                        _this.sanjiaoLeft = _this.position.x + 260/2 -40;
                        _this.sanjiaoLeft = 260/2 - 20;
                        _this.left = _this.position.x + _this.position.width/2 - 130;
                    }else{
                        if(_this.position.x == 0) {
                            _this.left = _this.position.x+20;
                        }
                        if((750 - _this.position.x) <= 260){
                            _this.left = _this.position.x - (260 - (750 - _this.position.x))-20;
                            _this.sanjiaoLeft = 260 - 80;
                        }
                    }

                }
                //top位置适配
                var env = weex.config.env.platform.toLowerCase();

                switch(env){
                    case "ios":
                        _this.top = _this.position.y-20;
                        break;
                    case "android":
                        _this.top = (_this.position.y-20);
                        break;
                    case "web":
                        _this.top = _this.position.y-20;
                        break;
                    default:
                        console.log(env);
                }

                var translate = 'translate(0px, '+ parseInt(_this.position.height)+'px)';
                _this.animationFn(el, "1", translate,  'ease-in');

            },
            //点击mask遮罩层
            "layoutClick": function () {
                var _this = this;
                var el = this.$refs.dropdownBox;

//                var translate = 'translate(0px, -'+parseInt(_this.position.height)+'px)';
                var translate = 'scale(0.9, 0.9)';
                _this.animationFn(el, "0", translate,  'ease-out', function () {
                    _this.show = false;
                    _this.$emit("close");
                });
            },

        }
    }
</script>

<style lang="sass" src="../css/dropdown.scss"></style>