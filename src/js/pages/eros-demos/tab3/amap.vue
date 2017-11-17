<template>
  <div class="container">
    <weex-amap class="map" id="map2017" :sdk-key="keys"  :map-instance="map" :zoom="zoom" :center="pos">
      <weex-amap-marker :position="point.position" :title="point.title" :icon="point.icon" v-for="(point, index) in pointArr" :key="index"  @click="markerClick"></weex-amap-marker>
    </weex-amap>
    <div class="map-control">
      <text class="title">Marvel vs DC </text> 
      <text class="tips">地图压力测试</text>
      <div class="btn-group">
        <div @click="addMarvel" class="btnbox"><text class="btn btn-marvel" >Add Marvel Hero</text></div>
        <div @click="addDC" class="btnbox"><text class="btn btn-dc" > Add DC Hero</text></div>
      </div>
      <div class="btn-group">
        <div @click="removePoints" class="btnbox"><text class="btn btn-reverse" >Clear HeroS</text></div>
      </div>
    </div>
  </div>
</template>

<style>
  .container{
    position: relative;
    flex:1;
    background-color: #fff;
  }
  .map{
    flex: 1;
    position: relative;
    background-color: #fff;
    min-height: 800;
    border-bottom-width: 10;
    border-bottom-color: #fff;
  }
  .map-control{
    padding-top: 20;
    min-height: 600;
  }
  .title{
    margin-left: 20;
    padding-left: 20;
    padding-top: 10;
    padding-bottom: 10;
    font-size: 36px;
    border-left-width: 6;
    border-left-color: #0f89f5;
    color: #222;
    text-align: left;
  }
  .tips{
    margin: 20;
    padding: 10;
    color:#666;
    font-size: 20px;
  }
  .btn-group{
    display: flex;
    flex-direction: row;
  }
  .btnbox{
     flex:1;
  }
  .btn{
    margin: 20;
    padding: 20;
    background-color: #1ba1e2;
    border-radius: 5;
    color: #fff; 
    text-align:center;
    cursor: pointer;
    font-size: 28px;
  }
  .btn-marvel{
    background-color: #e01a22;
  }
  .btn-dc{
    background-color: #36548f;
  }
  .btn-reverse{
    background-color: #fff;
    color: #444;
    border-width: 2;
    border-color: #ccc;
    
  }
</style>

<script>

  var Amap = null;
  try {
    Amap = require('@weex-module/amap');
  } catch(err) {
    console.log(err);
  }
  var modal = require('@weex-module/modal');
  const icons = [
    'http://img1.vued.vanthink.cn/vuedae096307bfda38c9af8f5be0a80a3644.png',
    'http://img1.vued.vanthink.cn/vuedc1f33fb4f2be7d8e7698f11591c57be9.png',
    'http://img1.vued.vanthink.cn/vued38b5320814135ab1d5e7eccb95ad61ac.png',
    'http://img1.vued.vanthink.cn/vued2c162076cf3e0c9b7047e4d761a99dab.png',
    'http://img1.vued.vanthink.cn/vued5a564cecfec72460eeebc628935e9cb9.png'
  ];
  const icons2 = [
    'http://img1.vued.vanthink.cn/vued3b475600fd95b3609931ae8ec729448a.png',
    'http://img1.vued.vanthink.cn/vued7ec1a8aaadab2a0840e656de35ae3947.png',
    'http://img1.vued.vanthink.cn/vued96f7124a013b12bb6498b5cc7862ad9a.png',
    'http://img1.vued.vanthink.cn/vued940e8ab79a5a6f45d29b7ec4cd26ebb4.png',
    'http://img1.vued.vanthink.cn/vued49ae3f1383f76992f42aa2e79d643649.png'
  ];
  module.exports = {
    data: {
      keys: {
        h5:'f4b99dcd51752142ec0f1bdcb9a8ec02',
        ios: '623c0396a9b879461c971a14baa678fb',
        android: 'db6a973159cb0c2639ad02c617a786ae'
      },
      pos: [116.487, 40.00003],
      zoom: 9,
      pointArr: [
        {
          position:[116.3944071, 39.9278548],
          title: '北京市',
          events: {
            click: function() {
              modal.alert('北京市区');
            }  
          }
        }
      ],
    },
    
    methods: {
      markerClick() {
        modal.alert({
          message: 'marker clicked!'
        });
      },
      
      addMarvel() {
        for(let i=0; i<5; i++) {
          const coor = [115.487 + Math.random()*1, 39.7278548 + Math.random()];
          const n = i % 5;
          const icon = icons[n]
          this.pointArr.push({
            position:coor,
            title:'坐标:' + coor.join(','),
            icon:  icon
          });
        }
      },
      addDC() {
        for(let i=0; i<5; i++) {
          const coor = [116.487 + Math.random()*1, 39.7278548 + Math.random()];
          const n = i % 5;
          const icon = icons2[n]
          this.pointArr.push({
            position:coor,
            title:'坐标:' + coor.join(','),
            icon:  icon
          });
        }
      },
      
      removePoints() {
        if (this.pointArr.length < 2) {
          return;
        }
        for(let i=0; i<10; i++) {
          this.pointArr.pop();
          this.pointArr = Array.from(this.pointArr);
        }
      }
    }
  }
</script>
