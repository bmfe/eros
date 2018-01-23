<template>
    <scroller>
        <text class="label">已设置本页面为首页，请关闭app并重启查看</text>
        <div class="wrapper">
            <text class="button button-big" @click="reset">重置启动页</text>
        </div>
    </scroller>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config');
export default {
    methods: {
        reset () {
            this.$router.setHomePage('/pages/demo/index.js');
            this.$notice.toast({
                message: '重置成功，请退出重启app'
            });
        }
    },
    created () {
        this.$navigator.setNavigationInfo({
                title: '首页',
                navShow: true,
                statusBarStyle: 'Default'
            },
            () => {}
        );
    }
};
</script>
<style lang="sass" scoped>
@import 'src/js/css/base';
.label {
    width: 750;
}
</style>
