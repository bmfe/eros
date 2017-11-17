# 图表组件（bmchart）

> 基于 EChart 实现的图标组件，支持 EChart 的所有图表类型；

### 效果展示

![](https://img.benmu-health.com/gitbook/Echart.gif)

### 属性：

* chartInfo：图表数据，请按照 EChart 官方语法书写 \(EChart官网\)；

### 样式：

* height: 高度为必传，因为需要设置 图表的高度；

* 兼容所有其他样式

### 事件：

* finish: 图表渲染完毕事件

### 🌰

```js
<template>
    <div>  
        <bmchart style="width:750; height:520;" :chartInfo="chertInfo" @finish='finish'></bmchart>
    </div>
</template>
 
<script>
 
export default {
    data(){
        return {
            chertInfo: {
                'tooltip': {
                    'show': true
                },
                'legend': {
                    'data': [
                        '数量（吨）'
                    ]
                },
                'xAxis': [
                    {
                        'type': 'category',
                        'data': [
                            '桔子',
                            '香蕉',
                            '苹果',
                            '西瓜'
                        ]
                    }
                ],
                'yAxis': [
                    {
                        'type': 'value'
                    }
                ],
                'series': [
                    {
                        'name': '数量（吨）',
                        'type': 'bar',
                        'data': [
                            100,
                            200,
                            300,
                            400
                        ]
                    }
                ]
            }
        }
    },
    methods: {
        finish() {
             
        }
    }
}
</script>
```



