<template>
    <div :class="[changeDirection]">
        <div class="radio-box flex-row" :class="[v.disabled ? 'disabled':'']" v-for="v in radioItems" @click="select(v)">
            <div class="bui-icon-box" v-if="v.select"><bui-icon @click="select(v)" name="icon-radio-on" :color="selectedColor"></bui-icon></div>
            <div class="bui-icon-box" v-if="!v.select"><bui-icon @click="select(v)" name="icon-radio" :color="unSelectedColor"></bui-icon></div>
            <text class="radio-label">{{v.title}}</text>
        </div>
    </div>
</template>
<style lang="sass" src="../css/radio.scss"></style>

<script>
    module.exports = {
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
        data:function () {
          return{
              radioItems:[]
          }
        },
        methods: {
            "select": function (v) {
                if(v.disabled) return;
                var self = this;
                self.radioItems.forEach(function (val, index) {
                    val.select = false;
                });
                v.select = true;
                this.$emit("change", v);
            }
        },
        created: function(){
            this.radioItems=JSON.parse(JSON.stringify(this.items));
        }
    }
</script>
