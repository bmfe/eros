<template>
    <div :ref="tabId" :class="[iosfix ? 'span1':'']">
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                iosfix : false
            }
        },
        watch: {},
        props: {
            tabId: {},
            currentTab: {}
        },
        methods: {},
        created: function () {
            var env = weex.config.env.platform.toLowerCase();
            if (env == "ios") {
                this.iosfix =  true;
            }

        }
    }
</script>

<style>
    .span1{
        flex: 1;
    }
</style>
