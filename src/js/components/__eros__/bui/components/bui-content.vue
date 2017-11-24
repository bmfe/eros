<template>
    <div :style="{'padding': padded=='true'? padding:'0px' }">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            padded: {default: false},
            padding: {default: "20px"}, //default 20px
        },
        methods: {}
    }
</script>