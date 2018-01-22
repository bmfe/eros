<template>
    <div>
        <list ref="list" :show-scrollbar="false" :showRefresh="true" @refresh="onrefresh" class="container">
            <cell v-for="(num,index) in arr" :key="index" :index="index" class="panel">
                <text class="text">{{num}}</text>
            </cell>
        </list>
        <div class="touch-bar" :style="{'height': touchBarHeight}">
        </div>
    </div>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config')
export default {
    data() {
        return {
            arr: [],
            touchBarHeight: weex.config.eros.touchBarHeight ? weex.config.eros.touchBarHeight : 0
        }
    },
    created() {
        for (let i = 0; i < 20; i++) {
            this.arr.push(i + 1)
        }
    },
    methods: {
        onrefresh() {
            setTimeout(() => {
                this.$refs['list'].refreshEnd()
                this.$notice.toast({
                    message: 'refreshEnd'
                });
            }, 1000)
        }
    }
}

</script>
<style scoped>
.container {
    width: 700px;
    margin: 25px;
}

.panel {
    background-color: #fff;
    width: 700px;
    height: 100px;
    padding-left: 24px;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: #b9b9b9;
    border-style: solid;
}

.text {
    font-size: 30;
    color: #7d7d7d;
    font-weight: 700;
}

.touch-bar {
    height: 68;
    width: 750;
}

</style>
