<template>
    <div>
        <div class="wrapper">
            <input class="layout" type="text" placeholder="请输入..." value="" />
            <text class="button button-small" @click="hide">收起键盘</text>
        </div>
        <div class="wrapper">
            <text class="label">是否安装微信</text>
            <text class="button button-small" @click="hasWXApp">获取</text>
        </div>
        <div class="wrapper">
            <text class="label">获取cid个推的app标识</text>
            <text class="button button-small" @click="hasCid">获取</text>
        </div>
        <div class="wrapper">
            <input class="layout" type="text" placeholder="输入需要拷贝的内容" v-model="copyText" />
            <text class="button button-small" @click="copy">拷贝</text>
        </div>
        <div class="wrapper">
            <text class="label">调起扫一扫功能</text>
            <text class="button button-small" @click="scan">扫一扫</text>
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

<style lang="sass" scoped>
@import 'src/js/css/base';
.wrapper {
    margin-top: 30px;
    height: 150px;
}

.layout {
    top: 20px;
    left: 20px;
    margin-top: 0px;
}

.button-small {
    width: 150px;
    height: 60px;
    font-size: 30px;
    padding-top: 13px;
}

.label {
    text-align: left;
    left: 20px;
}

</style>
