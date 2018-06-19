<template>
    <scroller class="bg-white">
        <category title="默认" type="primary"></category>
        <uiTabPage :options="options">
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
            <div class="page-item">
                <text>6</text>
            </div>
        </uiTabPage>
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
                    text: "攻略",
                    icon: "\ue872"
                },
                {
                    type: "iconFont",
                    text: "酒店",
                    icon: "\ue870"
                },
                {
                    type: "iconFont",
                    text: "机票",
                    icon: "\ue744",
                },{
                    type: "iconFont",
                    text: "旅行商城",
                    icon: "\ue746"
                },
                {
                    type: "iconFont",
                    text: "游记",
                    icon: "\ue744",
                },
                {
                    type: "iconFont",
                    text: "问答",
                    icon: "\ue72b"
                }
                
            ]
        };
    }
};
</script>
<style lang="sass" src="./index.scss"></style>
