<template>
    <div class="container">
      <div class="category">
        <text class="category-text">demo</text>
      </div>
      <list class="list">
        <cell class="panel">
            <text class="text" @click="goWaterfall">weex 官方瀑布流</text>
        </cell>
         <cell class="panel">
            <text class="text" @click="goDemo">eros 支持手势滑动的列表滚动</text>
        </cell>
      </list>
    </div>
</template>
<script>
  
  export default {
    data () {
      return {
        lists: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      goDemo(){
        this.$router.open({
          name: 'tab3.slider'
        })
      },
      goWaterfall(){
        this.$router.open({
          name: 'tab3.waterfall',
          params: {
            name: 123
          }
        })
      }
    }
  }
</script>
<style scoped>
  .container {
    background-color: #f2f3f4;
  }
  .list{
    width: 750px;
    align-items: center;
    justify-content: center;
    background-color: #f2f3f4;
  }
 
  .panel {
    background-color: #ffffff;
    width: 750px;
    height: 100px;
    padding-left: 24px;
    /*align-items: center;*/
    justify-content: center;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
  }
   .category {
    margin-bottom: 10px;
    margin-top: 0px;
    padding-left: 24px;
    /*align-items: center;*/
    width: 750px;
    height: 200px;
    background-color: #ffffff;
    justify-content: center;
  }

  .category-text {
    /*color: #ff0000;*/
    font-weight: 600;
    font-size: 50px;
  }
</style>