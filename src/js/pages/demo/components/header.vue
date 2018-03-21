<template>
    <div class="header">
        <text class="header-title">{{title}}</text>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style scoped>
.header {
  padding-top: 45px;
  width: 750px;
  height: 117px;
  background-color: #1da1f2;
  color: #FFFFFF;
}

.header-title {
  width: 650px;
  font-weight: 600;
  font-size: 40px;
  color: #FFFFFF;
}

.header-2 {
  text-align: center;
  width: 100px;
  font-weight: 300;
  font-size: 40px;
  color: #FFFFFF;
}
</style>
