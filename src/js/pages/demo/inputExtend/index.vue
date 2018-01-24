<template>
    <div>
        <text class="label">修改光标颜色为绿色:</text>
        <input class="layout" type="text" placeholder="请输入..." value="" />
    </div>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config')
export default {
}
</script>
<style scoped>
.label {
    top: 50px;
    left: 20px;
    font-size: 30px;
    color: #7d7d7d;
    font-weight: 500;
}

.layout {
    width: 750px;
    height: 80px;
    top: 50px;
    left: 20px;
    color: #000;
    font-size: 38px;
    tint-color: #4cbd34;
}
</style>