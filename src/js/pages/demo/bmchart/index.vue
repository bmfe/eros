<template>
    <div>
        <bmchart style="width:750; height:520;" :chartInfo="chertInfo" @finish='finish'></bmchart>
    </div>
</template>

<script>
export default {
    data () {
        return {
            chertInfo: {
                tooltip: {
                    show: true
                },
                legend: {
                    data: ['数量（吨）']
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['桔子', '香蕉', '苹果', '西瓜']
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
                        data: [100, 200, 300, 400]
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
