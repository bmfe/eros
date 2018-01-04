<template>
    <list v-if="attrArr.length" :show-scrollbar="false">
        <cell v-for="(attr,index) in attrArr" :index="index" class="panel">
            <text class="text">{{attr.text}}: {{attr.value}}</text>
        </cell>
    </list>
</template>
<script>
if (process.env.NODE_ENV === 'development') require('Config')
export default {
    data() {
        return {
            attrArr: []
        }
    },
    created() {
        if (weex && weex.config && weex.config.eros) {
            for (let i in weex.config.eros) {
                this.attrArr.push({
                    text: i,
                    value: weex.config.eros[i]
                })
            }
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