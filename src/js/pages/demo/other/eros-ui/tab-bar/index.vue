<template>
    <scroller class="bg-white">
        <!--tab切换-->
        <div>  
        <div class="group">
            <category title="滚动tab"  type="primary"></category>
            <div class="group-body">
                <!-- default -->
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
            </div>
        </div> 
        <div class="group">
            <category title="图标+文字+Badge" color="default" hollow></category>
            <div class="group-body">
                <!-- default -->
                <div class="tabbar">
                    <div class="tabbar-item active">
                        <text class="eros-icon tabbar-icon label-ink active-ink">&#xe750;</text>
                        <text class="tabbar-label label-ink active-ink">首页</text>
                    </div>
                    <div class="tabbar-item">
                        <text class="eros-icon tabbar-icon label-ink">&#xe75e;</text>
                        <text class="tabbar-label label-ink">我的</text>
                    </div>
                    <div class="tabbar-item">
                        <text class="eros-icon tabbar-icon label-ink">&#xe744;</text>
                        <text class="badge badge-danger badge-rounded">15</text>
                        <text class="tabbar-label label-ink">信息</text>
                    </div>
                </div>
            </div>
        </div>
        <div class="group">
            <category title="Primary" color="default" hollow></category>
            <div class="group-body">
                <!-- primary -->
                <div class="tabbar tabbar-primary">
                    <div class="tabbar-item tabbar-border active">
                        <text class="tabbar-label active">首页</text>
                    </div>
                    <div class="tabbar-item">
                        <text clawss="tabbar-label">设置</text>
                    </div>
                </div>
            </div>
        </div>
        <div class="group">
            <category title="Secondary" color="default" hollow></category>
            <div class="group-body">
                <!-- secondary -->
                <div class="tabbar tabbar-secondary">
                    <div class="tabbar-item active">
                        <text class="tabbar-label active">首页</text>
                    </div>
                    <div class="tabbar-item">
                        <text class="tabbar-label">设置</text>
                    </div>
                </div>
            </div>
        </div>
        <div class="group">
            <category title="Success" color="default" hollow></category>
            <div class="group-body">
                <!-- success -->
                <div class="tabbar tabbar-success">
                    <div class="tabbar-item active">
                        <text class="tabbar-label active">首页</text>
                    </div>
                    <div class="tabbar-item">
                        <text class="tabbar-label">设置</text>
                    </div>
                </div>
            </div>
        </div>
        <div class="group">
            <category title="Warning" color="default" hollow></category>
            <div class="group-body">
                <!-- warning -->
                <div class="tabbar tabbar-warning">
                    <div class="tabbar-item active">
                        <text class="tabbar-label active">首页</text>
                    </div>
                    <div class="tabbar-item">
                        <text class="tabbar-label">设置</text>
                    </div>
                </div>
            </div>
        </div>
        <div class="group">
            <category title="Danger" color="default" hollow></category>
            <div class="group-body">
                <!-- danger -->
                <div class="tabbar tabbar-danger">
                    <div class="tabbar-item active">
                        <text class="tabbar-label active">首页</text>
                    </div>
                    <div class="tabbar-item">
                        <text class="tabbar-label">设置</text>
                    </div>
                </div>
            </div>
        </div>
        <div class="group">
            <category title="Dark" color="default" hollow></category>
            <div class="group-body">
                <!-- dark -->
                <div class="tabbar tabbar-dark">
                    <div class="tabbar-item active">
                        <text class="tabbar-label active">首页</text>
                    </div>
                    <div class="tabbar-item">
                        <text class="tabbar-label">设置</text>
                    </div>
                </div>
            </div>
        </div>
        <!--tab切换 end-->
        </div>
    </scroller>
</template>

<style lang="scss" scoped>
@import "../../../../../css/reset";
.wrap-bg {
    background-color: rgba(0, 0, 0, 0.8);
}
.group {
    margin-top: 20;
    margin-bottom: 20;
}
/*滚动tab*/
.scroller {
    width: 750;
    height: 110;
    flex-direction: row;
}
.tabbar-scroll {
    flex: 1;
    position: relative;
    width: 750;
    height: 110;
    margin-top: 0;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    @extend %bg-white;
    overflow-x: scroll;
}
.tabs-scroll-shadow {
    box-shadow: 3px 0 5px #ebf0f5;
}
.segment-line {
  width: 1;
  height: 30;
  @extend %bg-default;
} 
.tabbar-item-shrink {
    position: relative;
    min-width: 150;
    // max-width: 250;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100;
}
.tabbar {
    flex-direction: row;
    padding-right: 30;
    padding-left: 30;
    overflow: hidden;
    @extend %bg-gray-light;
}
.tabbar-item {
    position: relative;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100;
    opacity: 0.8;
}
.tabbar-border {
    @include border-single($direction: bottom,$border-color:#fff,$border-style: solid,$border-width: 8px);
}
.tabbar-border-primary {
    @include border-single($direction: bottom,$border-color:$primary,$border-style: solid,$border-width: 8px);
}
.active {
    opacity: 1;
    font-weight: bold;
}
.tabbar-icon {
    font-size: 40;
    @extend %c-white;
}
.tabbar-label {
    font-size: 32;
    font-weight: normal;
    @extend %c-white;
    opacity: 0.8;
}
.label-ink {
    @extend %c-base;
}
.active-ink {
    @extend %c-primary;
    font-weight: bold;
}
.badge {
    position: absolute;
    right: 50%;
    top: 2;
    padding-top: 4;
    padding-right: 10;
    padding-bottom: 4;
    padding-left: 10;
    @extend %fs24;
    @extend %c-white;
}
.badge-rounded {
    border-radius: 200;
}
.badge-danger {
    @extend %bg-danger;
}
.tabbar-white {
    @extend %bg-white;
}
.tabbar-primary {
    @extend %bg-primary;
}
.tabbar-secondary {
    @extend %bg-secondary;
}
.tabbar-success {
    @extend %bg-success;
}
.tabbar-warning {
    @extend %bg-warning;
}
.tabbar-danger {
    @extend %bg-danger;
}
.tabbar-dark {
    @extend %bg-dark;
}
</style>
<script>
import Category from "../../_mods/category.vue";
export default {
  components: { Category },
  props: {
    title: String
  }
};
</script>`