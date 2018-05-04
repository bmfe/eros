
<template>
    <div>
        <title title="发布"></title>
        <category title="$event.emit"></category>
        <wxc-cell label="写入"
           >
            <input type="text" placeholder="Input Text" class="input" :autofocus="true" v-model="eventText"/>
        </wxc-cell>
       
        </wxc-cell>
         <wxc-button text="传递数据"
              style="margin-left: 24px;margin-top: 20px;"
              type="blue"
              @wxcButtonClicked="emit"></wxc-button>
    </div>
</template>
<script>
import { WxcCell, WxcButton } from 'weex-ui'
import Title from '../_mods/title'
import Category from '../_mods/category'
export default {
    components: { WxcCell, WxcButton, Title, Category }, 
    data () {
        return {
            eventText: ''
        }
    },
    methods: {
        emit () {
            this.$event.emit('getParams', this.eventText)
            this.$notice.toast({
                message: '传递成功'
            })
            this.$router.back()
        }
    }
}
</script>
<style scoped>
.input {
    color: #6a737d;
    width: 500px;
    height: 100px;
    margin-left: 10px;
}
</style>

