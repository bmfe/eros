<template>
    <div>
        <scroller ref="list" :show-scrollbar="false">
            <wxc-cell title="本地存储字符串数据: "
                :desc="resultStr || '无'"
                :has-arrow="false"
                :has-top-border="true"></wxc-cell>
            <wxc-cell title="本地存储 json 数据: "
                :desc="resultObj.text || '无'"
                :has-arrow="false"
                :has-top-border="true"></wxc-cell>
            <div style="padding-left: 24px;">
                <wxc-button text="新增"
                    type="blue"
                    style="margin-top:40px"
                    @wxcButtonClicked="add"></wxc-button>
                <wxc-button text="删除"
                    type="red"
                    style="margin-top:40px"
                    @wxcButtonClicked="del"></wxc-button>
            </div>
        </scroller>
        <div class="touch-bar" :style="{'height': touchBarHeight}">
        </div>
    </div>
</template>
<script>
import { WxcCell, WxcButton } from 'weex-ui'
export default {
    components: { WxcCell, WxcButton },
    created () {
        this.get();
    },
    data () {
        return {
            resultStr: '',
            resultObj: {
                text: ''
            }
        };
    },
    methods: {
        add () {
            this.$storage.setSync('strKey', '123456789');
            this.$storage.setSync('jsonKey', {
                text: '123456789'
            });
            this.get();
        },
        del () {
            this.$storage.deleteSync('strKey');
            this.$storage.deleteSync('jsonKey');
            this.get();
        },
        get () {
            this.resultStr = this.$storage.getSync('strKey');
            this.resultObj = this.$storage.getSync('jsonKey');
        }
    }
};
</script>
