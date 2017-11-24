<template>
    <div :style="getContainerStyle()">

        <div v-for="(item,index) in tabItems"
             :style="getItemStyle(item)"
             @click="itemClick($event,item,index)">

            <bui-icon v-if="item.icon" :name="item.icon"
                      :color="(!item.iconColor? normalColor:item.iconColor)"
                      @click="itemClick($event,item,index)" :size="(!item.iconSize?iconSize:item.iconSize)">
            </bui-icon>

            <text v-if="item.title" :style="getTitleStyle(item)"
                  @click="itemClick($event,item,index)">{{ item.title }}</text>
        </div>

    </div>

</template>


<script>
    import buiIcon from './bui-icon'
    export default {
        components: {
            buiIcon
        },
        props: {
            tabItems: {default: []},
            currentTab: {default: ""},
            height: {default: "100px"},
            iconSize: {default: "45px"},
            titleSize: {default: '22px'},
            background: {default: '#f7f7f7'},
            selectedBackground: {default: '#f7f7f7'},
            normalColor: {default: '#818181'},
            selectedColor: {default: '#4ca4fe'},
            containerStyle: {type: Object, default: {}},
            itemStyle: {type: Object, default: {}},
            showSelectedLine: {type: Boolean, default: false}
        },
        created: function () {
            var index=0;
            //指定默认加载第一个tab内容
            if (!this.currentTab) {
                this.currentTab = this.tabItems[0].tabId;
                this.$set(this.tabItems[0], "titleColor", this.selectedColor);
                this.$set(this.tabItems[0], "iconColor", this.selectedColor);
                this.$set(this.tabItems[0], "borderBottomColor", this.selectedColor);
                this.$set(this.tabItems[0], "background", this.selectedBackground);
            } else {
                //指定激活哪个tab内容
                for (var i = 0; i < this.tabItems.length; i++) {
                    var item = this.tabItems[i];
                    if (item.tabId == this.currentTab) {
                        this.$set(this.tabItems[i], "titleColor", this.selectedColor);
                        this.$set(this.tabItems[i], "iconColor", this.selectedColor);
                        this.$set(this.tabItems[i], "borderBottomColor", this.selectedColor);
                        this.$set(this.tabItems[i], "background", this.selectedBackground);
                        index=i;
                    }
                }
            }
            this.$emit('load', this.currentTab,index);
        },
        watch: {
            currentTab: function () {
                for (var i = 0; i < this.tabItems.length; i++) {
                    var item = this.tabItems[i];
                    if (item.tabId == this.currentTab) {
                        this.$set(this.tabItems[i], "titleColor", this.selectedColor);
                        this.$set(this.tabItems[i], "iconColor", this.selectedColor);
                        this.$set(this.tabItems[i], "borderBottomColor", this.selectedColor);
                        this.$set(this.tabItems[i], "background", this.selectedBackground);
                    } else {
                        this.$set(this.tabItems[i], "titleColor", this.normalColor);
                        this.$set(this.tabItems[i], "iconColor", this.normalColor);
                        this.$set(this.tabItems[i], "borderBottomColor", this.background);
                        this.$set(this.tabItems[i], "background", this.background);
                    }
                }
            }
        },
        methods: {
            //tabbar扩展样式
            "getContainerStyle": function () {
                //合并样式
                var style = {'flex-direction': 'row', 'height': this.height};
                style = Object.assign(style, this.containerStyle);
                return style;
            },
            //item扩展样式
            "getItemStyle": function (item) {
                //底部border
                var borderBottomColor;
                //如果显示底部border
                if (this.showSelectedLine) {
                    borderBottomColor = (!item.borderBottomColor ? this.background : item.borderBottomColor);
                } else {
                    borderBottomColor = (!item.background ? this.background : item.background);
                }

                //合并样式
                var style = {
                    'flex': 1,
                    'align-items': 'center',
                    'justify-content': 'center',
                    'border-bottom-width': '5px',
                    'border-bottom-style': 'solid',
                    'border-bottom-color': borderBottomColor,
                    'backgroundColor': (!item.background ? this.background : item.background)
                };
                style = Object.assign(style, this.itemStyle);
                return style;
            },
            //文本样式
            "getTitleStyle": function (item) {
                var style = {
                    'color': (!item.titleColor ? this.normalColor : item.titleColor),
                    'font-size': (!item.titleSize ? this.titleSize : item.titleSize)
                };
                return style;
            },
            "itemClick": function (e,item, index) {
                for (var i = 0; i < this.tabItems.length; i++) {
                    if (index == i) {
                        this.$set(this.tabItems[i], "titleColor", this.selectedColor);
                        this.$set(this.tabItems[i], "iconColor", this.selectedColor);
                        this.$set(this.tabItems[i], "borderBottomColor", this.selectedColor);
                        this.$set(this.tabItems[i], "background", this.selectedBackground);
                    } else {
                        this.$set(this.tabItems[i], "titleColor", this.normalColor);
                        this.$set(this.tabItems[i], "iconColor", this.normalColor);
                        this.$set(this.tabItems[i], "borderBottomColor", this.background);
                        this.$set(this.tabItems[i], "background", this.background);
                    }
                }
                this.$emit('itemClick',e, item.tabId, index);
            }
        }
    }
</script>
