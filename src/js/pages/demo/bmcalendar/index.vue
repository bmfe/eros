<template>
    <div class="location">
        <bmcalendar class="calendar" selectType='range' ref='calendar' @finish='finish' :startDate="startDate" :endDate="endDate" :maximumDate="maximumDate" :minimumDate="minimumDate" ></bmcalendar>
        <div class="wrapper">
            <text class="button button-small" @click="prev">上一月</text>
            <text class="button button-small" @click="next">下一月</text>
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

<style lang="sass" scoped>
@import 'src/js/css/base';
.location {
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom:0;
}

.calendar {
    height: 800px;
    background-color: white;
    select-color: $base-color;
}
</style>
