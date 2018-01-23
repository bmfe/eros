<template>
    <scroller>
        <div class="wrapper">
            <text class="button button-big" @click="call">打电话</text>
        </div>
        <div class="wrapper">
            <text class="button button-big" @click="sms">发短信</text>
        </div>
        <div class="wrapper">
            <text class="button button-big" @click="contacts">联系人</text>
        </div>
    </scroller>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config');
export default {
    methods: {
        call () {
            this.$coms.call('10086');
        },
        sms () {
            this.$coms.sms(['10086', '10010', '10001'], '哈哈哈').then(
                data => {
                    this.$notice.toast({
                        message: '发送成功'
                    });
                },
                error => {
                    this.$notice.toast({
                        message: '发送失败: ' + error.errorMsg
                    });
                }
            );
        },
        contacts () {
            this.$coms.contacts().then(
                data => {
                    this.$notice.toast({
                        message: '获取联系人成功'
                    });
                },
                error => {
                    this.$notice.toast({
                        message: '获取失败: ' + error.errorMsg
                    });
                }
            );
        }
    }
};
</script>
<style lang="sass" scoped>
@import 'src/js/css/base';
</style>
