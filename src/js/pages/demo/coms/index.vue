<template>
    <scroller>
        <div class="wrapper">
            <text class="button" @click="call">打电话</text>
        </div>
        <div class="wrapper">
            <text class="button" @click="sms">发短信</text>
        </div>
        <div class="wrapper">
            <text class="button" @click="contacts">联系人</text>
        </div>
    </scroller>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config')
export default {
    methods: {
        call() {
            this.$coms.call(10086)
        },
        sms() {
            this.$coms.sms({
                to: ['10086', '10010', '10001'],
                content: '哈哈哈'
            }).then(data => {
                console.log("发送成功")
            }, error => {
                console.log("发送失败", error)
            })
        },
        contacts() {
            this.$coms.contacts().then(data => {
                console.log("获取联系人信息成功", data)
            }, error => {
                console.log("获取失败", error)
            })
        },
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