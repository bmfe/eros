<template>
    <div :class="[changeDirection]">
        <div class="radio-box flex-row" :class="[v.disabled ? 'disabled':'']" @click="select(v)" v-for="v in checkboxItems">
            <div v-if="v.select"><bui-icon @click="select(v)" name="icon-checkbox-on" :color="selectedColor"></bui-icon></div>
            <div v-if="!v.select"><bui-icon @click="select(v)" name="icon-radio" :color="unSelectedColor"></bui-icon></div>
            <text class="radio-label">{{v.title}}</text>
        </div>
    </div>
</template>


<script>
    import buiIcon from './bui-icon'
    module.exports = {
        components: {
            buiIcon
        },
        props: {
            "direction": {
                type: String,
                default: 'horizontal' // horizontal | vertical
            },
            "items": {
                type: Object,
                default: []
            },
            "selectedColor":{
                type: String,
                default:"#00cc66"
            },
            "unSelectedColor":{
                type: String,
                default:"#9ea7b4"
            }
        },
        computed:{
            changeDirection:function () {
                return this.direction=="horizontal"? "flex-row":"flex-column";
            }
        },
        data: function () {
            return {
                "selectItems" : [],
                checkboxItems: []
            }
        },
        methods: {
            "select": function (v) {
                var self = this;
                v.select = !v.select;

                //选择组数据
                var newAry = [];
                self.checkboxItems.forEach(function (val, i) {
                    if(val.select) newAry.push(val);
                });
                this.$emit("change", v, newAry);
            }
        },
        created: function () {
            this.checkboxItems = JSON.parse(JSON.stringify(this.items));
        }
    }
</script>
<style lang="sass" src="../css/radio.scss"></style>