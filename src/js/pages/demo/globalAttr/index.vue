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
<style lang="sass" scoped>
@import 'src/js/css/base';

.container {
    width: 700px;
    margin: 25px;
}
</style>
