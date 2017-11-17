# 日期组件（bmcalendar）

原生日期选择

## 效果

![](https://img.benmu-health.com/gitbook/test.gif)

## 参数

> * dataFormat：日期格式 非必传，默认 yyyy-MM–dd
> * minimumDate： 最小日期 \(必传参数\) 格式遵守 dataFormat
> * maximumDate：  最大日期 \(必传参数\)
> * selectType:  可选值 ‘single’、‘range’、‘multi’，分别对应 单选、区间、多选； 非必填 默认为‘single’
> * startDate：默认选择的日期 非必传
> * endDate：默认选择的截止日期（selectType为range时生效）非必传
> * showPlaceholder: 是否显示非当前月的日期占位符 默认不显示;

## 样式

> month-color: 月份颜色
>
> week-color: 周几的颜色
>
> week-bg-color: 周几的背景颜色
>
> weekday-color: 平日的颜色
>
> weekend-color: 周末的颜色
>
> placeholder-color: 非本月日期颜色
>
> select-color: 选中的颜色

## 方法

> * goPrve\(\) 上一月
> * goNext\(\) 下一月

## 事件

> * finish: 当选择完成会触发这个方法，将结果返回 {‘startDate’：'2017-08-08'，'endDate': '2017-08-09'};

## 示例

```js
<template>
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom:0;">
        <text style="top:10; height: 100" @click="prev">上一页</text>
        <bmcalendar class="calendar" selectType='range' ref='calendar' @finish='finish' style="height: 800" maximumDate="2017-10-07" minimumDate="2016-10-07"></bmcalendar>
        <text style="height: 50" @click="next">下一页</text>
        <text style="top: 600; height: 100" @click="done">确定</text>
    </div>
</template>
<script>
    var modal = weex.requireModule('modal')
    export default {
        methods: {
            prev() {
                this.$refs['calendar'].goPrve()
            },
            next() {
                this.$refs['calendar'].goNext()
            },
            finish(params){
                console.log(params);
            }
        }
    }
</script>

<style>
    .calendar {
        background-color: white;
    }
</style>
```



