<template>
    <div style="width:750px; padding-top:100px; padding-left:100px;">
       <text>请查看控制台打印</text>
    </div>
</template>
<script>
// if (process.env.NODE_ENV === 'development') require('Config')
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