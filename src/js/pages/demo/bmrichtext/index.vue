<template>
    <div style='padding: 20px;'>
        <bmrichtext class="hd-txt">
            <bmspan value="已提交"></bmspan>
            <bmspan class="f-green" value="18"></bmspan>
            <bmspan  value="天"></bmspan>
            <bmspan class="f-green" value="3"></bmspan>
            <bmspan  value="小时"></bmspan>
            <bmspan class="f-green" value="1"></bmspan>
            <bmspan value="分"></bmspan>
        </bmrichtext>
        <bmrichtext class="protocol-txt">
            <bmspan value="这是正常的文字，"></bmspan>
            <bmspan class="underline" value="这是带下划线的文字。"></bmspan>
        </bmrichtext>
    </div>
</template>

<script>
if (process.env.NODE_ENV === 'development') require('Config');
export default {
    data () {
        return {};
    },
    methods: {}
};
</script>

<style scoped>
.hd-txt {
    line-height: 100;
    color: #7d7d7d;
    font-weight: 500;
}
.f-green {
    color: #07ae9c;
}
.protocol-txt {
    margin-bottom: 60;
    font-size: 32;
    /*color: #333;*/
    line-height: 62;
    color: #7d7d7d;
    font-weight: 500;
}
.underline {
  font-weight: bold;
  text-decoration: underline;
}
</style>

