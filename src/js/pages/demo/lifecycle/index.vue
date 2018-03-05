<template>
    <div style="width:750px; padding-top:100px; padding-left:100px;padding-right:100px;">
       <text>请查看控制台打印</text>
       <text>（这里需要注意的是，如果启用了 if (process.env.NODE_ENV === 'development') require('Config') 来进行 weex debug，在 eros dev 的时候是会执行 2 次的，pack 之后不会的。）</text>
    </div>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config')
export default {
    bmRouter: {
        viewWillAppear (params, options) {
            console.log('viewWillAppear');
        },

        viewDidAppear (params, options) {
            console.log('viewDidAppear');
        },

        viewWillBackAppear (params, options) {
            console.log('viewDidAppear');
        },

        viewDidBackAppear (params, options) {
            console.log('viewDidAppear');
        },

        viewWillDisappear (options) {
            console.log('viewDidAppear');
        },

        viewDidDisappear (options) {
            console.log('viewDidAppear');
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