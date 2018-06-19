
<template>
    <div>
        <title title="发布"></title>
        <category title="$event.emit"></category>
        <eros-cell label="写入">
            <input type="text" placeholder="Input Text" class="input" :autofocus="true" v-model="eventText"/>
        </eros-cell>
       
         <!-- <wxc-button text="传递数据"
              style="margin-left: 24px;margin-top: 20px;"
              type="blue"
              @wxcButtonClicked="emit"></wxc-button> -->
    </div>
</template>
<style scoped>
.input {
    color: #44bcbc;
    width: 500px;
    height: 100px;
    margin-left: 10px;
}
</style>



<script>
    import Category from 'eros-ui/components/category';
    import ErosCell from 'eros-ui/components/cell';
    export default {
        components: { 
            Category, 
            ErosCell 
        },
        props: ['eventText'],
        data:function() {
            return {
               eventText
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
