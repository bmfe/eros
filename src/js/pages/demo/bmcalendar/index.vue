
<template>
    <scroller>
        <title title="日历组件"></title>
        <category title="bmcalendar"></category>
        <!--<wxc-cell title="选择类型"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="pick">
        </wxc-cell>-->
        <wxc-cell title="触发上一月"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="prev">
        </wxc-cell>
         <wxc-cell title="触发下一月"
            :has-arrow="true"
            :has-top-border="true"
            @wxcCellClicked="next">
        </wxc-cell>
        <bmcalendar class="calendar" :selectType="type" ref="calendar" @finish="finish" :startDate="startDate" :endDate="endDate" :maximumDate="maximumDate" :minimumDate="minimumDate" ></bmcalendar>
        <wxc-cell title="限制最小日期"
            :desc="minimumDate">
        </wxc-cell>
         <wxc-cell title="限制最大日期"
            :has-top-border="true"
            :desc="maximumDate">
        </wxc-cell>
         <wxc-cell title="默认选中起止日期"
            :has-top-border="true"
            :desc="startDate">
        </wxc-cell>
         <wxc-cell title="默认选中截止日期"
            :has-top-border="true"
            :desc="endDate">
        </wxc-cell>
    </scroller>
</template>
<script>
const picker = weex.requireModule('picker')
const TYPE = [ 'single', 'range']
import { WxcCell, WxcButton } from 'weex-ui'
import Title from '../_mods/title'
import Category from '../_mods/category'
import { format, setDays } from '../util';
export default {
    components: { WxcCell, WxcButton, Title, Category },
    created () {
        this.startDate = format('', 'YYYY-MM-DD');
        this.endDate = format('', 'YYYY-MM-DD');
        this.minimumDate = format(setDays('', 'subtract', 90), 'YYYY-MM-DD');
        this.maximumDate = format(setDays('', 'add', 90), 'YYYY-MM-DD');
    },
    data () {
        return {
            type: 'range',
            minimumDate: '',
            maximumDate: '',
            startDate: '',
            endDate: ''
        };
    },
    methods: {
        pick() {
            picker.pick({
                items: TYPE,
            }, ({result, data}) => {
                console.log(TYPE[data])
                if(result == 'success') this.type = TYPE[data]
            })

        },
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
}
</script>
<style scoped>
.item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
    flex-direction:row;
}
.calendar {
    height: 800px;
    background-color: #FFFFFF;
    select-color: #1da1f2;
}
</style>

