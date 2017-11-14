<template>
    <div class="lazy-load">
        <slot v-if="show"></slot>
        <div ref="mask" v-if="!show" :class="[maskClass ? maskClass : 'lazy-load-mask']">
            <text class="lazy-tip">{{tip}}</text>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                show: true // 是否渲染组件
            }
        },
        props: {
            data: Array,  // 需要在组件内渲染的数据
            maskClass: String, // 遮罩层样式
            tip: {
                type: String,
                default: function () {
                    return '正在渲染,请稍候'
                }
            },
            time: { // 延迟渲染的时间
                type: Number,
                default: function () {
                    return 10;
                }
            },
            limit: {  // 超过多少条数据开启延迟渲染
                type: Number,
                default: function () {
                    return 30
                }
            },
            trackByData: Boolean, // 是否跟踪data的变化来渲染列表
            immediately: Boolean // 是否立即重新渲染
        },
        created: function () {
            this.showLazy()
        },
        watch: {
            data: function () { // 数据变化时重新渲染
                if (this.trackByData) {
                    this.showLazy()
                }
            },
            // 路由变化,重新渲染
            $route: function () {
                if (!this.trackByData) {
                    this.showLazy()
                }
            },
            // 立即重新变为true时,重新渲染
            immediately: function () {
                if (this.immediately) {
                    this.showLazy()
                }
            }
        },
        methods: {
            //延迟渲染数据,在数据渲染完成后触发loaded事件
            showLazy: function () {
                if ((this.data && this.data.length > this.limit) || !this.data) {
                    // 如果数据存在并且数据的数量比限定的数量大,则开启延迟渲染 如果不是列表调用组件,也开启延迟渲染
                    this.syncLoader()
                } else {  // 其他情况,不开启延迟渲染
                    this.show = true
                    this.$emit('loaded')
                }
            },
            //延迟渲染
            syncLoader: function () {
                this.show = false
                setTimeout(() => {
                    this.show = true
                    this.$emit('loaded');
                }, parseInt(this.time))
            }
        }
    };
</script>

<style>
    .lazy-load {

    }

    .lazy-tip {
        text-align: center;
        font-size: 30px;
    }

    .lazy-load-mask {
        height: 60px;
        padding-top: 10px;
        opacity: 1;
    }
</style>