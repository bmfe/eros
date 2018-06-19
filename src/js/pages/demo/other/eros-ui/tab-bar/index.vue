<template>
    <scroller class="bg-white">
        <!--tab切换-->
        <category title="默认" type="primary"></category>
        <uiTabBar :options="options">
            <div class="page-item">
                <text>1</text>
            </div>
            <div class="page-item">
                <text>2</text>
            </div>
            <div class="page-item">
                <text>3</text>
            </div>
            <div class="page-item">
                <text>4</text>
            </div>
            <div class="page-item">
                <text>5</text>
            </div>
        </uiTabBar>
    </scroller>
</template>

<script>
import Category from "eros-ui/components/category";
import tabBar from "eros-ui/components/tabBar";
export default {
    components: { Category, uiTabBar: tabBar },
    data() {
        return {
            options: [
                {
                    type: "iconFont",
                    text: "首页",
                    icon: "\ue750"
                },
                {
                    type: "iconFont",
                    text: "心愿单",
                    icon: "\ue870"
                },
                {
                    type: "iconFont",
                    text: "搜索",
                    icon: "\ue752"
                },
                {
                    type: "iconFont",
                    text: "收件箱",
                    icon: "\ue744",
                    badge: 5
                },
                {
                    type: "iconFont",
                    text: "个人资料",
                    icon: "\ue75e",
                    point: true
                }
            ]
        };
    }
};
</script>
