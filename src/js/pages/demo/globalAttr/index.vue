<template>
    <div>
        <list v-if="attrArr.length" :show-scrollbar="false" class="container">
            <cell v-for="(attr,index) in attrArr" :key="index" :index="index" class="panel">
                <text class="text arrtName">{{attr.text}}: </text>
                <text class="text">{{attr.value || '无'}}</text>
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
            attrArr: [],
            touchBarHeight: weex.config.eros.touchBarHeight ? weex.config.eros.touchBarHeight : 0
        }
    },
    created() {
        if (weex && weex.config && weex.config.eros) {
            for (const i in weex.config.eros) {
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
.container {
    width: 700px;
    margin: 25px;
    /*margin-top: 25px;*/
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
    font-weight: 400;
}

.arrtName {
    font-weight: 700;
}

.touch-bar {
    height: 68;
    width: 750;
}

</style>
