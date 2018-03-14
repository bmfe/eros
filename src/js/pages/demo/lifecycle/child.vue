<template>
  <text>我这里添加了一个子元素，并监听事件。</text>
</template>

<script>
export default {
   eros: {
        appActive() {
            console.log('appActive-child');
        },
        appDeactive() {
            console.log('appDeactive-child');
        },
        beforeAppear (params, options) {
            console.log('beforeAppear-child');
        },
        beforeBackAppear (params, options) {
            console.log('beforeBackAppear-child');
        },

        appeared (params, options) {
            console.log('appeared-child');
        },

        backAppeared (params, options) {
            console.log('backAppeared-child');
        },

        beforeDisappear (options) {
            console.log('beforeDisappear-child');
        },

        disappeared (options) {
            console.log('disappeared-child');
        }
    }
}
</script>

<style>

</style>
