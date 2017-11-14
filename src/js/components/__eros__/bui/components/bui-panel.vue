<template>
  <div
    :class="['panel', 'panel-' + type]"
    :style="{ borderWidth: border}">
    <text
      :class="['panel-header', 'panel-header-' + type]"
      :style="{
        paddingTop: paddingHead,
        paddingBottom: paddingHead,
        paddingLeft: paddingHead*1.5,
        paddingRight: paddingHead*1.5
      }">{{title}}</text>
    <div
      :class="['panel-body', 'panel-body-' + type]"
      :style="{
        paddingTop: paddingBody,
        paddingBottom: paddingBody,
        paddingLeft: paddingBody*1.5,
        paddingRight: paddingBody*1.5
      }">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" src="../css/panel.scss"></style>

<script>
  module.exports = {
    props: {
      type: { default: 'default' },
      title: { default: '' },
      paddingBody: { default: 20 },
      paddingHead: { default: 20 },
      border:{ default: 0 }
    }
  }
</script>

