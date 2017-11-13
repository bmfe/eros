<template>
    <div class="bui-header-box" :style="styleNew">
        <div :style="{ 'height': '30px' }" v-if="iosfixed"></div>
        <div class="bui-header">
            <div class="bui-header-main">
                <text class="bui-header-title" @click="_centerClick($event)">{{title}}</text>
            </div>
            <div class="bui-header-left">
                <bui-icon @click="_leftClick($event)" v-if="leftItem.icon||leftItem.icons" :name="leftItem.icon||leftItem.icons" size="45px"
                          color="#ffffff" class="pdr10"></bui-icon>
                <text @click="_leftClick($event)" v-if="leftItem.text" class="bui-header-text">{{leftItem.text}}</text>
                <slot name="left"></slot>
            </div>
            <div class="bui-header-right">
                <bui-icon @click="_rightClick($event)" v-if="rightItem.icon||rightItem.icons" :name="rightItem.icon||rightItem.icons" size="45px"
                          color="#ffffff" class="pdl10"></bui-icon>
                <text @click="_rightClick($event)" v-if="rightItem.text" class="bui-header-text">{{rightItem.text}}
                </text>
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>
<style lang="sass" src="../css/header.scss"></style>

<script>
    var defaultItem = {
        icon:'',
        icons: '',
        text: ''
    };
    import buiIcon from './bui-icon'
    module.exports = {
        components: {buiIcon},
        data:function () {
            return {}
        },
        props: {
            styleEx: {},
            title: {
                type: String,
                default: ''
            },
            leftItem: {
                type: Object,
                default: function () {
                    return defaultItem
                }
            },
            rightItem: {
                type: Object,
                default: function () {
                    return defaultItem
                }
            },
            ios: {
                type: Boolean,
                default: true
            }
        },
        data: function () {
            return {
                height: '117px',
                styleNew: {},
                style: {'background-color': '#4ca4fe'}
            }
        },
        computed: {
            iosfixed: function () {
                var ios = false;
                if (!this.ios) {
                    ios = false;
                }else{
                    //头部位置适配
                    var env = weex.config.env.platform.toLowerCase();
                    switch (env) {
                        case "ios":
                            ios = true;
                            break;
                        case "android":
                            ios = false;
                            break;
                        case "web":
                            ios = false;
                            break;
                        default:
                            ios = false;
                    }
                }
                return ios;
            }
        },
        methods: {
            _leftClick: function ($event) {
                this.$emit('leftClick', $event);
            },
            _rightClick: function ($event) {
                this.$emit('rightClick', $event);
            },
            _centerClick: function ($event) {
                this.$emit('centerClick', $event);
            }
        },
        created: function () {
            var env = weex.config.env.platform.toLowerCase();
            if (!this.ios || env == "android") {
                this.height = '100px';
            }
            this.styleNew = Object.assign({}, this.style, this.styleEx, {'height': this.height});
        }
    }
</script>