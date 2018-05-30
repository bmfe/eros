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

<script>
import Category from 'eros-ui/components/category';
export default {
  components: { Category },
  props: {
    title: String
  }
};
</script>
<style lang="sass" src="./index.scss"></style>