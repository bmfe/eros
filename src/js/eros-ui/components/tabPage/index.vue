<template>
    <!-- <list class="scroller">
        <cell>
            <div class="tabbar-scroll tabbar-white">
                <div class="tabbar-item-shrink active tabbar-border-primary">
                    <text class="tabbar-label active-ink">首页</text>
                </div>
                <text class="segment-line"></text>
                <div class="tabbar-item-shrink">
                    <text class="tabbar-label label-ink">特别推荐</text>
                </div>
                <text class="segment-line"></text>
                <div class="tabbar-item-shrink">
                    <text class="tabbar-label label-ink">消息中心</text>
                </div>
                <text class="segment-line"></text>
                <div class="tabbar-item-shrink">
                    <text class="tabbar-label label-ink">我的主页</text>
                </div>
                <text class="segment-line"></text>
                <div class="tabbar-item-shrink">
                    <text class="tabbar-label label-ink">设置</text>
                </div>
                <text class="segment-line"></text>
                <div class="tabbar-item-shrink">
                    <text class="tabbar-label label-ink">信息4</text>
                </div>
                <text class="segment-line"></text>
                <div class="tabbar-item-shrink">
                    <text class="tabbar-label label-ink">信息5</text>
                </div>
            </div>
        </cell>
    </list> -->
    <div class="eros-layout">
        <div class="tabbar-scroll" :style="{'background-color': bgColor}">
            <!-- primary secondary success warning danger dark -->
            <div class="tabbar-item tabbar-border tabbar-item-shrink" :class="[index == activeIndex ? 'active' : '']" :style="{'border-color': index == activeIndex ? activeColor : bgColor}" v-for="(item,index) in options" :key="index" @click="setCurrentPage(index)">
                <text v-if="item.type == 'iconFont' || item.type == 'icon'" class="eros-icon tabbar-icon" :class="[index == activeIndex ? 'active' : '']" :style="{color: index == activeIndex ? activeColor : fontColor}">{{item.icon}}</text>
                <text class="badge badge-danger badge-rounded" v-if="item.badge">{{item.badge}}</text>
                <text v-if="item.type == 'iconFont' || item.type == 'text'" class="tabbar-label" :class="[index == activeIndex ? 'active' : '']" :style="{color: index == activeIndex ? activeColor : fontColor}">{{item.text}}</text>
            </div>
        </div>
        <scroller append="tree" class="scroller eros-flex-1" paging-enabled="true" scroll-direction="horizontal" @scroll="onscroll" offset-accuracy="0">
            <div ref="pageContainer" class="page-container">
                <slot></slot>
            </div>
        </scroller>
    </div>
</template>

<script>
export default {
    props: {
        activeIndex: {
            type: Number,
            default: 0
        },
        options: {
            type: Array
        },
        bgColor: {
            type: String,
            default: "#ffffff"
        },
        fontColor: {
            type: String,
            default: "#393939"
        },
        activeColor: {
            type: String,
            default: "#32ace4"
        }
    },
    computed: {
        indicatorStyle() {
            return {
                "item-color": "#ceced9",
                "item-selected-color": "#0e90d2",
                "item-size": "14px",
                ...this.indicatorColor
            };
        }
    },
    methods: {
        setCurrentPage(index) {
            this.activeIndex = index;
            // dom.scrollToElement(this.$refs[`page_${index}`], {
            //     animated: false
            // });

            const animation = weex.requireModule("animation");
            const containerEl = this.$refs[`pageContainer`];
            const dist = index * 750;
            animation.transition(
                containerEl,
                {
                    styles: {
                        transform: `translateX(${-dist}px)`
                    },
                    duration: "0.00001",
                    timingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    delay: 0
                },
                () => {}
            );
        },
        onscroll(e) {
            let formatOffset = Math.abs(e.contentOffset.x);
            if (formatOffset % SCROLL_FULL_WIDTH === 0) {
                let index = formatOffset / SCROLL_FULL_WIDTH;
                if (this.activeIndex === index) return;
                this.setCurrentPage(index);
            }
        }
    }
};
</script>

<style lang="sass" src="./index.scss"></style>
