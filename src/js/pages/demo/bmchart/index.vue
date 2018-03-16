<template>
    <scroller>
        <title title="EChart"></title>
        <category title="饼状图"></category>
        <wxc-cell title="饼状图"
            desc="点击修改背景颜色"
            :has-top-border="true">
            <switch slot="value" @change="setChartBackground"></switch>
        </wxc-cell>
        <bmchart ref="chart" :options="$format(cycleChartInfo)" style="width:750; height:520;"  @finish='finish'></bmchart>
        <category title="折线图"></category>
        <bmchart :options="$format(lineChartInfo)" style="width:750; height:520;"  @finish='finish'></bmchart>
        <category title="柱状图"></category>
        <bmchart :options="$format(barChartInfo)" style="width:750; height:520;"  @finish='finish'></bmchart>
        <category title="雷达图"></category>
        <bmchart :options="$format(radarChartInfo)" style="width:750; height:520;"  @finish='finish'></bmchart>
    </scroller>
</template>
<script>
import { WxcCell, WxcButton } from 'weex-ui'
import Title from '../_mods/title'
import Category from '../_mods/category'
import { cycleChartInfo, lineChartInfo, barChartInfo, radarChartInfo } from './config'
export default {
    components: { WxcCell, WxcButton, Title, Category }, 
    data () {
        return {
          cycleChartInfo,
          lineChartInfo,
          barChartInfo,
          radarChartInfo
        }
    },
    methods: {
        setChartBackground() {
            let backgroundColor = this.cycleChartInfo.backgroundColor === '#1da1f2' ? '#2c343c': '#1da1f2'
            this.cycleChartInfo.backgroundColor = backgroundColor
        },
        finish () {
            this.$notice.toast({
              message: '图表渲染完毕'
            });
        }
    }
}
</script>
<style scoped>
.size-NORM {
    padding-top: 18px;
}

.size-BIG {
    padding-top: 14px;
}

.size-EXTRALARGE {
    padding-top: 14px;
}
.item-container {
    margin-top: 40px;
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
    flex-direction:row;
}
</style>