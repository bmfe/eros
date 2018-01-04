<template>
    <div class="wrapper">
        <input class="layout" type="text" placeholder="请输入..." value="" />
        <text class="button" @click="hide">收起</text>
    </div>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config')
export default {
    methods: {
        hide() {
            this.$tools.resignKeyboard().then(resData => {
                this.$notice.toast({
                    message: '收起键盘成功'
                })
            }, error => {
                this.$notice.toast({
                    message: '收起键盘失败'
                })
            })
        }
    }
}
</script>
<style scoped>
.wrapper {
    flex-direction: row;
    justify-content: space-around;
}

.layout {
    width: 500px;
    height: 80px;
    top: 50px;
    left: 20px;
    font-size: 40px;
    border-width: 1px;
    tint-color: red;
}

.button {
    font-size: 30px;
    width: 150px;
    height: 60px;
    text-align: center;
    top: 60px;
    padding-top: 12px;
    border-width: 1px;
    border-style: solid;
    color: #fff;
    border-color: #0473a5;
    border-radius: 15px;
    background-color: #0473a5;
}






/*.label {
    text-align: center;
    margin-top: 30px;
}*/

.label {
    top: 50px;
    left: 20px;
    /*color: #aaa;*/
    font-size: 30px;
}
</style>