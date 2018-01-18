<template>
    <scroller>
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
<style scoped>
.wrapper {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 30px;
}

.button {
    width: 150px;
    height: 60px;
    top: 60px;
    text-align: center;
    font-size: 30px;
    padding-top: 13px;
    border-width: 1px;
    border-style: solid;
    color: #fff;
    border-color: #1da1f2;
    border-radius: 15px;
    background-color: #1da1f2;
}

.button-big {
    width: 500px;
    height: 100px;
    font-size: 35px;
    padding-top: 26px;
}
</style>
