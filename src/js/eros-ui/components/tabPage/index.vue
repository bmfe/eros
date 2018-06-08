<template>
    <list class="scroller">
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
    </list>
</template>

<script>
export default {
    props: {
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
        carouselImgClicked(index) {
            this.$emit("click", index);
        },
        change(e) {
            this.$emit("change", e.index);
        }
    }
};
</script>

<style lang="sass" src="./index.scss"></style>
ext>
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
                    </list>
                </div>
            </div>
            <div class="group">
                <category title="图标+文字+Badge" type="primary"></category>
                <div class="group-body">
                    <uiTabBar></uiTabBar>
                </div>
            </div>
        </div>
    </scroller>
</template>

<script>
export default {
    props: {
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
        carouselImgClicked(index) {
            this.$emit("click", index);
        },
        change(e) {
            this.$emit("change", e.index);
        }
    }
};
</script>
<style lang="sass" src="./index.scss"></style>
