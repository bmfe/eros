<template>
    <cell>
        <eros-header title="插件 | 原生能力"></eros-header>
        <wxc-cell title="选择图片上传 "
            desc="$image.pickAndUpload()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="pickAndUpload">
        </wxc-cell>
        <wxc-cell title="通过图片路径上传"
            desc="$image.upload()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="upload">
        </wxc-cell>
        <wxc-cell title="拍照并获取图片地址"
            desc="$image.camera()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="camera">
        </wxc-cell>
        <wxc-cell title="选取本地图片并处理"
            desc="$image.pick()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="pick">
        </wxc-cell>
        <wxc-cell title="浏览图片"
            desc="$image.preview()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="preview">
        </wxc-cell>
        <wxc-cell title="拨打电话"
            desc="$coms.call()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="call">
        </wxc-cell>
        <wxc-cell title="发送短信"
            desc="$coms.sms()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="sms">
        </wxc-cell>
        <wxc-cell title="选择联系人"
            desc="$coms.contacts()"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="contacts">
        </wxc-cell>
    </cell>
</template>

<script>
import { WxcCell } from 'weex-ui'
import ErosHeader from './header'
export default {
    components: { WxcCell, ErosHeader }, 
    methods: {
        pickAndUpload () {
            this.$image
                .pickAndUpload({
                    url: '',
                    maxCount: 3,
                    imageWidth: 1000,
                    allowCrop: true,
                    params: {},
                    header: {}
                })
                .then(
                    resData => {
                        this.$notice.toast({
                            message: '上传成功'
                        });
                        console.log(resData);
                    },
                    error => {
                        this.$notice.toast({
                            message: '上传失败:' + error.errorMsg
                        });
                    }
                );
        },
        upload () {
            this.$image
                .upload({
                    url: '',
                    params: {},
                    header: {},
                    images: []
                })
                .then(
                    resData => {
                        this.$notice.toast({
                            message: '上传成功'
                        });
                        console.log(resData); // [url1, url2...]
                    },
                    error => {
                        this.$notice.toast({
                            message: '上传失败:' + error.errorMsg
                        });
                    }
                );
        },
        camera () {
            this.$image
                .camera({
                    imageWidth: '800',
                    allowCrop: true
                })
                .then(
                    resData => {
                        this.$notice.toast({
                            message: '拍照成功:' + resData
                        });
                    },
                    error => {
                        this.$notice.toast({
                            message: '拍照失败:' + error
                        });
                    }
                );
        },
        pick () {
            this.$image
                .pick({
                    maxCount: 1,
                    imageWidth: '800',
                    allowCrop: true
                })
                .then(
                    resData => {
                        this.$notice.toast({
                            message: '获取成功:' + resData
                        });
                    },
                    error => {
                        this.$notice.toast({
                            message: '获取失败:' + error
                        });
                    }
                );
        },
        preview () {
            this.$image.preview({
                index: 1,
                images: [
                    'http://img.taopic.com/uploads/allimg/120727/201995-120HG1030762.jpg'
                ]
            });
        },
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
}
</script>

