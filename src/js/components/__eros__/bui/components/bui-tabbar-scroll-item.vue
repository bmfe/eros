<template>
    <div class="bui-scroller-tabbar-row" @click="onclickitem" :style="{'width': width}">
        <text class="text" :style="{ 'color': titleColor, 'font-size': titleSize }">{{title}}</text>
        <text class="actived" :style="{'border-bottom-color': titleColor}" v-if="selected"></text>
    </div>
</template>

<style lang="sass" src="../css/tabbar.scss"></style>

<script>
    module.exports = {
        props: {
            index: {default: 0},
            title: {default: ''},
            titleColor: {default: '#000000'},
            titleSize: {default:'28'},
            selected: {default: false},
            length: {},
            scroll: {default: true}
        },
        methods: {
            onclickitem: function (e) {
                var params = {
                    index: this.index
                };
                this.$emit('tabItemOnClick', params);
            }
        },
        computed:{
            width: function () {
                if(this.scroll) return;
                var i = 750/this.length;
                return i;
            }
        }
    }
</script>
