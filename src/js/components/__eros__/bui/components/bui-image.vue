<template>
    <image v-bind:src="imagePath"
           v-bind:placeholder="placeholderPath"
           v-bind:style="{'border-radius':radius, 'width': width, 'height': height}"
           v-bind:resize="resize"
           @click="_click($event)"
           @load="_load()"></image>
</template>

<script>
    export default {
        computed: {
            "imagePath": function () {
                if (this.src.indexOf("http") >= 0) {
                    return this.src;
                }
                var bundleUrl = weex.config.bundleUrl;
                var url = bundleUrl.split('/').slice(0, -1).join('/');
                if (bundleUrl.indexOf("weex.html") > 0) {
                    url += "/dist/";
                }
                return this.src;
            },
            "placeholderPath": function () {
                if (this.placeholder!="") {
                    if (this.placeholder.indexOf("http") >= 0) {
                        return this.placeholder;
                    }
                    var bundleUrl = weex.config.bundleUrl;
                    var url = bundleUrl.split('/').slice(0, -1).join('/');
                    if (bundleUrl.indexOf("weex.html") > 0) {
                        url += "/dist/";
                    }
                    return this.placeholder;
                }
            }
        },
        props: {
            width: {default: '0px'},
            height: {default: '0px'},
            src: {
                type: String
            },
            resize: {
                type: String,
                default: "stretch"
            },
            placeholder: {
                type: String,
                default: ""
            },
            radius: {
                default: "0px"
            }
        },
        data: function () {
            return {}
        },
        methods: {
            "_click": function (event) {
                this.$emit('click', event);
            },
            "_load": function () {
                this.$emit('load');
            }
        }
    }
</script>
