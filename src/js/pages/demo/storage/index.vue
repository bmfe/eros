<template>
    <scroller>
        <text class="label">本地存储数据：</text>
        <text class="label">{{'字符串数据: '+ (resultStr || '无')}}</text>
        <text class="label">{{'json数据: '+ (resultObj.text || '无')}}</text>
        <text class="label">离开本页面后再次进入查看</text>
        <div class="wrapper">
            <text class="button button-small" @click="add">新增</text>
            <text class="button button-small" @click="del">删除</text>
        </div>
    </scroller>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config');
export default {
    created () {
        this.get();
    },
    data () {
        return {
            resultStr: '',
            resultObj: {
                text: ''
            }
        };
    },
    methods: {
        add () {
            this.$storage.setSync('strKey', '123456789');
            this.$storage.setSync('jsonKey', {
                text: '123456789'
            });
            this.get();
        },
        del () {
            this.$storage.deleteSync('strKey');
            this.$storage.deleteSync('jsonKey');
            this.get();
        },
        get () {
            this.resultStr = this.$storage.getSync('strKey');
            this.resultObj = this.$storage.getSync('jsonKey');
        }
    }
};
</script>
<style lang="sass" scoped>
@import 'src/js/css/base';

.label {
    width: 750;
}
</style>
