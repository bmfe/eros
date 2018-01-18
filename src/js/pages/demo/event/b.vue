<template>
    <scroller>
        <div class="wrapper">
            <div class="wrapper">
                <input class="layout" type="text" placeholder="输入需要展示在a页面的内容" v-model="eventText" />
                <!-- <text class="button" @click="emit">传递</text> -->
            </div>
        </div>
        <div class="wrapper">
            <text class="button" @click="emit">传递</text>
        </div>
    </scroller>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config')
export default {
    data () {
        return {
            eventText: ''
        }
    },
    methods: {
        emit () {
            this.$event.emit('getParams', this.eventText)
            this.$notice.toast({
                message: '传递成功'
            })
            this.$router.back()
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
    width: 200px;
    height: 70px;
    top: 60px;
    text-align: center;
    font-size: 30px;
    padding-top: 15px;
    border-width: 1px;
    border-style: solid;
    color: #fff;
    border-color: #1da1f2;
    border-radius: 15px;
    background-color: #1da1f2;
}

.layout {
    width: 500px;
    height: 80px;
    top: 50px;
    padding-left: 10px;
    font-size: 34px;
    border-width: 1px;
    border-radius: 12px;
}
</style>