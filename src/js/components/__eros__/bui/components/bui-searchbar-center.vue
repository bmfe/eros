<template>
    <div :class="['flex-row', 'row-center-left', 'bui-searchbar', 'bui-search-bg-'+type]" @click="onfocusFn()">
        <div :class="['flex-row', 'row-center-left', 'span1', 'bui-input']">
            <div class="flex-row center" :class="[!searchstatus ? 'span1':'']">
                <bui-icon v-if="!deletestatus" :name="'icon-search'" @click="onfocusFn()"></bui-icon>
                <text class="bui-search-icon-box-text" v-if="!searchstatus">搜索</text>
            </div>
            <input class="span1 bui-search-input-text" v-if="searchstatus" @focus="onfocus($event)" @blur="onblur($event)" @input="oninput($event)" :value="valueNew" :autofocus="autofocusNew" type="text" :placeholder="placeholder"/>
            <bui-icon class="bui-search-icon-delete" @click="onclear($event)" v-if="deletestatus" :name="'icon-roundclosefill'"></bui-icon>
        </div>
        <text :class="['bui-search-search', 'bui-search-text-color-'+type]" @click="search()" v-if="searchstatus">搜索</text>
    </div>
</template>

<style lang="sass" src="../css/layout.scss"></style>
<style lang="sass" src="../css/searchbar.scss"></style>

<script>
    import buiIcon from './bui-icon'
    export default {
        components: {
            buiIcon
        },
        props: {
            "type": {
                type: String,
                default: 'default'
            },
            "placeholder": {
                type: String,
                default: "请输入搜索内容"
            },
            "value": {
                type: String,
                default: ""
            },
            "autofocus": {
                type: Boolean,
                default: false
            }
        },
        data: function () {
            return {
                deletestatus : false,
                searchstatus : false,
                autofocusNew : false,
                valueNew : ''
            }
        },
        methods: {
            //搜索框触发输入焦点
            "onfocusFn": function () {
                this.searchstatus = true;
                this.autofocusNew = true;
            },
            //搜索获得输入焦点
            "onfocus": function (event) {
                this.$emit("focus", event);
            },
            //搜索失去输入焦点
            "onblur": function (event) {
                this.autofocusNew = false;
                this.$emit('blur', event);

            },
            //搜索输入值更改
            "oninput": function (event) {
                this.valueNew = event.value;
                if(this.valueNew.length == 0) this.deletestatus = false;
                else this.deletestatus = true;
                this.$emit('input', event);
            },
            //清除搜索输入值
            "onclear": function (event) {
                this.autofocusNew = false;
                this.deletestatus = false;
                this.valueNew = "";
                this.$emit('clear');
            },
            //搜索
            "search": function () {
                this.$emit("search",this.valueNew);
            }

        }
    }
</script>