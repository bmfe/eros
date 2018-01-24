<template>
    <div>
        <bmchart style="width:750; height:520;" :chartInfo="chartInfo1" @finish='finish'></bmchart>
        <bmchart style="width:750; height:520;" :chartInfo="chartInfo2" @finish='finish'></bmchart>
    </div>
</template>

<script>
export default {
    data () {
        return {
            chartInfo2: {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    }
                ]
            },
            chartInfo1: {
                 color: ['#1da1f2'],
                tooltip: {
                    show: true
                },
                legend: {
                    data: ['数量（吨）']
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['桔子', '香蕉', '苹果', '西瓜', '榴莲', '西红柿']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '数量（吨）',
                        type: 'bar',
                        data: [100, 200, 300, 400, 50, 350]
                    }
                ]
            }
        };
    },
    methods: {
        finish () {
            this.$notice.toast({
                message: '图表渲染完毕'
            });
        }
    }
};
</script>
