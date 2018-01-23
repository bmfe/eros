<template>
    <scroller>
        <div class="wrapper">
            <text class="button button-big" @click="pickAndUpload">选择图片上传</text>
        </div>
        <div class="wrapper">
            <text class="button button-big" @click="upload">通过图片路径上传</text>
        </div>
        <div class="wrapper">
            <text class="button button-big" @click="camera">拍照并获取图片地址</text>
        </div>
        <div class="wrapper">
            <text class="button button-big" @click="pick">选取本地图片并处理</text>
        </div>
        <div class="wrapper">
            <text class="button button-big" @click="preview">浏览图片</text>
        </div>
    </scroller>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config');
export default {
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
        }
    }
};
</script>
<style lang="sass" scoped>
@import 'src/js/css/base';

</style>
