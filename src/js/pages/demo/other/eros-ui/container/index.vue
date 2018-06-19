<template>
    <eros-container touchBar>
        <div class="header">
            <text class="eros-txt">头部</text>
        </div>
        <div class="panel" @click="back">
            <text class="eros-txt">点击中间区域返回</text>
        </div>
        <div class="footer">
            <text class="eros-txt">尾部</text>
        </div>
    </eros-container>
</template>
<script>
import Category from "eros-ui/components/category";
import container from "eros-ui/components/container";
export default {
    components: { Category, 'eros-container':container },
    data() {
        return {
        };
    },
    methods: {
        back() {
            this.$router.back()
        }
    }
};
</script>
<style lang="sass" src="./index.scss"></style>
