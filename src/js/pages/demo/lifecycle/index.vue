<template>
    <div style="width:750px; padding-top:100px; padding-left:100px;padding-right:100px;">
       <text>请查看控制台打印</text>
    </div>
</template>
<script>
export default {
    eros: {
        beforeAppear (params, options) {
            console.log('beforeAppear');
        },

        beforeBackAppear (params, options) {
            console.log('beforeBackAppear');
        },

        appeared (params, options) {
            console.log('appeared');
        },

        backAppeared (params, options) {
            console.log('backAppeared');
        },

        disappear (options) {
            console.log('disappear');
        },

        disappeared (options) {
            console.log('disappeared');
        }
    },
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>