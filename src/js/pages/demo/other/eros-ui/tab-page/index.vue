<template>
    <scroller class="bg-white">
        <div class="group">
            <category title="默认" type="primary"></category>
            <div class="group-body">
                <uiTabPage :options="options">
                    <div class="page">
                        <text>1</text>
                    </div>
                    <div class="page">
                        <text>2</text>
                    </div>
                    <div class="page">
                        <text>3</text>
                    </div>
                </uiTabPage>
            </div>
        </div>
    </scroller>
</template>

<script>
import Category from "eros-ui/components/category";
import tabPage from "eros-ui/components/tabPage";
export default {
    components: { Category, uiTabPage: tabPage },
    data() {
        return {
            options: [
                {
                    type: "iconFont",
                    text: "首页",
                    icon: "\ue750"
                },
                {
                    type: "text",
                    text: "我的",
                    // icon: '&#xe75e;'
                    icon: "\ue75e"
                },
                {
                    type: "icon",
                    text: "信息",
                    icon: "\ue744",
                    badge: 5
                }
            ]
        };
    }
};
</script>
<style lang="sass" src="./index.scss"></style>
