<template>
  <div>
        <bui-tip value="This is success tip."></bui-tip>
        <bui-tip value="bui-weex success tip."></bui-tip>
        <bui-tip type="info" value="bui-weex info tip."></bui-tip>
        <bui-tip type="warning" value="bui-weex warning tip."></bui-tip>
        <bui-tip type="danger" value="bui-weex 是专门为weex开发者打造的高质量UI组件"></bui-tip>
  </div>
</template>

<script>
import buiTip from 'Eros/bui/components/bui-tip'
export default {
    components: {
        'bui-tip': buiTip
    }
}
</script>

<style>
  
</style>
