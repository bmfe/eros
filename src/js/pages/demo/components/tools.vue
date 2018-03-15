<template>
    <cell>
        <eros-header title="插件 | 工具"></eros-header>
        <input ref="input" style="height:0px;" type="text" placeholder="弹出输入框" value="" />
        <wxc-cell title="自定义收起键盘事件 "
            desc="$tools.resignKeyboard()"
            :has-arrow="false"
            :has-top-border="true">
            <switch slot="value" @change="changeKeyboardStatus"></switch>
        </wxc-cell>
        <wxc-cell title="是否安装微信"
            desc="$tools.isInstallWXApp()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="hasWXApp">
        </wxc-cell>
        <wxc-cell title="获取 cid 个推的 app 标识"
            desc="$tools.getCid()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="hasCid">
        </wxc-cell>
        <wxc-cell title="拷贝到剪贴板"
            desc="$tools.copyString()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="copy">
        </wxc-cell>
        <wxc-cell title="打开扫一扫"
            desc="$tools.scan()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="scan">
        </wxc-cell>
    </cell>
</template>
<script>
import { WxcCell } from 'weex-ui'
import ErosHeader from './header'
export default {
    components: { WxcCell, ErosHeader }, 
    methods: {
        changeKeyboardStatus({value}) {
            if (value) {
                this.$refs.input.focus()
            } else {
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
            }
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
            this.$tools.copyString('eros').then(
                resData => {
                   this.$notice.toast({
                        message: '已在复制: eros'
                    })
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
                this.$notice.alert({
                    title: '扫一扫结果',
                    message: JSON.stringify(resData),
                })
            });
        }
    }
};
</script>
