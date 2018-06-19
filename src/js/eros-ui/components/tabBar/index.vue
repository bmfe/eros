<template>
    <div>
        <scroller append="tree" class="scroller" paging-enabled="true" scroll-direction="horizontal" @scroll="onscroll" offset-accuracy="0">
            <div ref="pageContainer" style="flex-wrap: wrap;">
                <slot></slot>
            </div>
        </scroller>
        <div class="tabbar" :style="{'background-color': bgColor}">
            <!-- primary secondary success warning danger dark -->
            <div class="tabbar-item active" :class="[index == activeIndex ? 'active' : '']" v-for="(item,index) in options" :key="index" @click="setCurrentPage(index)">
                <text v-if="item.type == 'iconFont' || item.type == 'icon'" class="eros-icon tabbar-icon" :class="[index == activeIndex ? 'active' : '']" :style="{color: index == activeIndex ? activeColor : fontColor}">{{item.icon}}</text>
                <text class="badge badge-danger badge-rounded" v-if="item.badge">{{item.badge}}</text>
                <text v-if="item.type == 'iconFont' || item.type == 'text'" class="tabbar-label" :class="[index == activeIndex ? 'active' : '']" :style="{color: index == activeIndex ? activeColor : fontColor}">{{item.text}}</text>
            </div>
        </div>
    </div>

</template>

<script>
const SCROLL_FULL_WIDTH = 750;
const dom = weex.requireModule("dom");
const animation = weex.requireModule("animation");

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
    data() {
        return {};
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
                    duration: '0.00001',
                    timingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
