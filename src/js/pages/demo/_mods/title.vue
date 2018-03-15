<template>
  <div class="wxc-title" :aria-hidden="true">
    <image class="logo" src="http://upload.ouliu.net/i/20180124175551qrzlq.png"></image>
    <text class="text">{{title}}</text>
  </div>
</template>

<style scoped>
  .wxc-title {
    background-color: #ffffff;
    padding: 25px;
    flex-direction: row;
    align-items: center;
  }
  .logo {
    width: 60px;
    height: 60px;
  }
  .text {
    font-size: 40px;
    font-weight: 600;
    margin-left: 20px;
    color: #1da1f2;
  }
</style>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>