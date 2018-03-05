<template>
    <text class="label">可点击右上角标题</text>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config')
export default {
    data () {
        return {}
    },
    methods: {
        init () {
            this.$navigator.setRightItem({
                text: '右侧标题',
                textColor: '#fff',
                fontSize: '32',
                fontWeight: 'normal'
            }, () => {
                // 点击回调
                this.$notice.toast({
                    message: '您点击了导航条右侧区域'
                })
            })
        }
    },
    created () {
        this.init()
    }
}
</script>
<style lang="sass" scoped>
@import 'src/js/css/base';
.label {
    width: 750;
}
</style>