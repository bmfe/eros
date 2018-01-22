<template>
    <div>
        <div class="wrapper">
            <input class="layout" type="text" placeholder="请输入..." value="" />
            <text class="button" @click="hide">收起键盘</text>
        </div>
        <div class="wrapper">
            <text class="label">是否安装微信</text>
            <text class="button" @click="hasWXApp">获取</text>
        </div>
        <div class="wrapper">
            <text class="label">获取cid个推的app标识</text>
            <text class="button" @click="hasCid">获取</text>
        </div>
        <div class="wrapper">
            <input class="layout" type="text" placeholder="输入需要拷贝的内容" v-model="copyText" />
            <text class="button" @click="copy">拷贝</text>
        </div>
        <div class="wrapper">
            <text class="label">调起扫一扫功能</text>
            <text class="button" @click="scan">扫一扫</text>
        </div>
    </div>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config');
export default {
    data () {
        return {
            copyText: ''
        };
    },
    methods: {
        hide () {
            this.$tools.resignKeyboard().then(
                resData => {
                    this.$notice.toast({
                        message: '收起键盘成功'
                    });
                },
                error => {
                    this.$notice.toast({
                        message: '收起键盘失败'
                    });
                }
            );
        },
        hasWXApp () {
            this.$tools.isInstallWXApp().then(
                resData => {
                    // 成功的回调，必须在eros.native.js中配置才能生效
                },
                error => {
                    this.$notice.toast({
                        message: '获取微信失败'
                    });
                }
            );
        },
        hasCid () {
            this.$tools.getCid().then(
                resData => {
                    // 成功的回调，必须在eros.native.js中配置才能生效
                },
                error => {
                    this.$notice.toast({
                        message: '获取cid失败'
                    });
                }
            );
        },
        copy () {
            if (this.copyText.toString() === '') {
                this.$notice.toast({
                    message: '拷贝内容为空'
                });
                return;
            }
            this.$tools.copyString(this.copyText.toString()).then(
                resData => {
                    this.$notice.toast({
                        message: '拷贝成功，请粘贴'
                    });
                },
                error => {
                    this.$notice.toast({
                        message: '拷贝失败'
                    });
                }
            );
        },
        scan () {
            this.$tools.scan().then(resData => {
                console.log(resData);
            });
        }
    }
};
</script>
<style scoped>
.wrapper {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 30px;
    height: 150px;
}

.layout {
    width: 500px;
    height: 80px;
    top: 50px;
    left: 20px;
    padding-left: 10px;
    font-size: 34px;
    border-width: 1px;
    border-radius: 12px;
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

.label {
    width: 500px;
    height: 80px;
    top: 70px;
    left: 20px;
    font-size: 34px;
    color: #7d7d7d;
    font-weight: 500;
}
</style>
