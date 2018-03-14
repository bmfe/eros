<template>
    <div style="width:750px; padding-top:100px; padding-left:100px;padding-right:100px;">
       <text>请查看控制台打印</text>
       <Child></Child>
    </div>
</template>
<script>
import Child from './child'
export default {
    components: {
        Child
    },
    eros: {
        appActive() {
            console.log('appActive');
        },
        appDeactive() {
            console.log('appDeactive');
        },
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

        beforeDisappear (options) {
            console.log('beforeDisappear');
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