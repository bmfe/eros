<template>
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