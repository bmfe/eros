<template>
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom:0;">
        <bmcalendar class="calendar" selectType='range' ref='calendar' @finish='finish' :startDate="startDate" :endDate="endDate" :maximumDate="maximumDate" :minimumDate="minimumDate" ></bmcalendar>
        <div class="wrapper">
            <text class="button" @click="prev">上一月</text>
            <text class="button" @click="next">下一月</text>
        </div>
    </div>
</template>

<script>
import { format, setDays } from '../util';
export default {
    created () {
        this.startDate = format('', 'YYYY-MM-DD');
        this.endDate = format('', 'YYYY-MM-DD');
        this.minimumDate = format(setDays('', 'subtract', 30), 'YYYY-MM-DD');
        this.maximumDate = format(setDays('', 'add', 30), 'YYYY-MM-DD');
    },
    data () {
        return {
            minimumDate: '',
            maximumDate: '',
            startDate: '',
            endDate: ''
        };
    },
    methods: {
        prev () {
            this.$refs['calendar'].goPrve();
        },
        next () {
            this.$refs['calendar'].goNext();
        },
        finish (params) {
            this.$notice.toast({
                message: '开始时间：' + params.startDate + '\r\n结束时间：' + params.endDate
            });
        }
    }
};
</script>
<style>
.calendar {
    height: 800px;
    background-color: white;
    select-color: #0473a5;
}
.wrapper {
    flex-direction: row;
    justify-content: space-around;
}

.button {
    font-size: 32px;
    width: 180px;
    height: 80px;
    text-align: center;
    margin-top: 30px;
    padding-top: 18px;
    border-width: 2px;
    border-style: solid;
    color: #fff;
    border-color: #0473a5;
    border-radius: 15px;
    background-color: #0473a5;
}
</style>
