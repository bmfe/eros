<template>
    <div :class="['tip', 'tip-' + type]">
        <text :class="['tip-txt', 'tip-txt-' + type]">{{value}}</text>
    </div>
</template>

<style lang="sass" src="../css/tip.scss"></style>
<script>
    export default {
        props: {
            type: {default: 'success'},
            value: {default: ''}
        },
        data: function () {
          return {
              style: {}
          }
        }
    }
</script>