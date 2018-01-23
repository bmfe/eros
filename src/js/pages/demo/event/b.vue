<template>
    <scroller>
        <div class="wrapper">
            <input class="layout" type="text" placeholder="输入需要展示在a页面的内容" v-model="eventText" />
        </div>
        <div class="wrapper">
            <text class="button button-small" @click="emit">传递</text>
        </div>
    </scroller>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config')
export default {
    data() {
        return {
            eventText: ''
        }
    },
    methods: {
        emit() {
            this.$event.emit('getParams', this.eventText)
            this.$notice.toast({
                message: '传递成功'
            })
            this.$router.back()
        }
    }
}

</script>
<style lang="sass" scoped>
@import 'src/js/css/base';
</style>