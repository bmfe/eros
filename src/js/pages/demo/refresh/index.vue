<template>
    <list ref="list" :show-scrollbar="false" :showRefresh="true" @refresh="onrefresh">
        <cell v-for="(num,index) in arr" :index="index" class="panel">
            <text class="text">{{num}}</text>
        </cell>
    </list>
    <!-- <scroller ref="list" :showRefresh="true" @refresh="onrefresh">
        <text class="text">1234567</text>
        <text class="text">1234567</text>
        <text class="text">1234567</text>
        <text class="text">1234567</text>
        <text class="text">1234567</text>
        <text class="text">1234567</text>
        <text class="text">1234567</text>
    </scroller>     -->
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config')
export default {
    data() {
        return {
            arr: [],
        }
    },
    created() {
        for (let i = 0; i < 20; i++) {
            this.arr.push(i+1)
        }
    },
    methods: {
        onrefresh() {
            console.log('3456789');
            setTimeout(() => {
                this.$refs["list"].refreshEnd()
            }, 1000)
        }
    }
}
</script>
<style scoped>
.panel {
    width: 750px;
    height: 100px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-bottom-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
}

.text {
    padding-left: 10;
    color: #41B883;
}
</style>