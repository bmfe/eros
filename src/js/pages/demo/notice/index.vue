<template>
    <scroller>
        <div class="wrapper">
            <text class="button" @click="alert">单按钮弹窗</text>
        </div>
        <div class="wrapper">
            <text class="button" @click="confirm">双按钮弹窗</text>
        </div>
        <div class="wrapper">
            <text class="button" @click="loading">加载提示</text>
        </div>
        <div class="wrapper">
            <text class="button" @click="toast">toast提示</text>
        </div>
    </scroller>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config')
export default {
    methods: {
        alert() {
            this.$notice.alert({
                title: '这是一个弹窗',
                message: '这是消息',
                okTitle: '确认',
                callback() {
                    // 点击确认按钮的回调
                }
            })
        },
        confirm() {
            this.$notice.confirm({
                title: '这是一个弹窗',
                message: '这是消息',
                okTitle: '确认',
                cancelTitl: '取消',
                okCallback() {
                    // 点击确认按钮的回调
                },
                cancelCallback() {
                    // 点击取消按钮的回调
                }
            })
        },
        loading() {
            this.$notice.loading.show("loading展示文案")
            setTimeout(() => {
                this.$notice.loading.hide()
            }, 1000)
        },
        toast() {
            this.$notice.toast({
                message: '这是消息'
            })
        }

    }
}
</script>
<style scoped>
.wrapper {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 30px;
}

.button {
    width: 400px;
    height: 90px;
    top: 60px;
    text-align: center;
    font-size: 34px;
    padding-top: 25px;
    border-width: 1px;
    border-style: solid;
    color: #fff;
    border-color: #0473a5;
    border-radius: 15px;
    background-color: #0473a5;
}
</style>