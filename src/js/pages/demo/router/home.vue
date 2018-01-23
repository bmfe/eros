<template>
    <scroller>
        <text class="label">已设置本页面为首页，请关闭app并重启查看</text>
        <div class="wrapper">
            <text class="button" @click="reset">重置启动页</text>
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
<style scoped>
.wrapper {
    flex-direction: row;
    justify-content: space-around;
    /*margin-bottom: 30px;*/
}

.button {
    width: 500px;
    height: 100px;
    font-size: 35px;
    padding-top: 30px;
    margin-top: 60px;
    text-align: center;
    border-width: 1px;
    border-style: solid;
    color: #fff;
    border-color: #1da1f2;
    border-radius: 15px;
    background-color: #1da1f2;
}

.label {
    text-align: center;
    margin-top: 30px;
    color: #7d7d7d;
    font-weight: 500;
}
</style>
