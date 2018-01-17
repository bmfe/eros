<template>
    <scroller>
        <text class="label">本地存储数据：</text>
        <text class="label">{{'字符串数据: '+ (resultStr || '无')}}</text>
        <text class="label">{{'json数据: '+ (resultObj.text || '无')}}</text>
        <text class="label">离开本页面后再次进入查看</text>
        <div class="wrapper">
            <text class="button" @click="add">新增</text>
            <text class="button" @click="del">删除</text>
        </div>
    </scroller>
</template>
<script>
if (process.env.NODE_ENV === "development") require("Config");
export default {
    created() {
        this.get();
    },
    data() {
        return {
            resultStr: "",
            resultObj: {
                text: ""
            }
        };
    },
    methods: {
        add() {
            this.$storage.setSync("strKey", "123456789");
            this.$storage.setSync("jsonKey", {
                text: "123456789"
            });
            this.get();
        },
        del() {
            this.$storage.deleteSync("strKey");
            this.$storage.deleteSync("jsonKey");
            this.get();
        },
        get() {
            this.resultStr = this.$storage.getSync("strKey");
            this.resultObj = this.$storage.getSync("jsonKey");
        }
    }
};
</script>
<style scoped>
.wrapper {
    flex-direction: row;
    justify-content: space-around;
}

.button {
    font-size: 32px;
    width: 180px;
    height: 80px;
    text-align: center;
    margin-top: 30px;
    padding-top: 18px;
    border-width: 2px;
    border-style: solid;
    color: #fff;
    border-color: #0473a5;
    border-radius: 15px;
    background-color: #0473a5;
}

.label {
    text-align: center;
    margin-top: 30px;
}
</style>
