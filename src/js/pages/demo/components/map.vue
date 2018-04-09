<template>
  <div class="container">
      <weex-amap class="map" id="map2017" scale="true" geolocation="true" :center="pos" zoom="10">
        <weex-amap-marker :position="point.position" :title="point.title"></weex-amap-marker>
      </weex-amap>
  </div>
</template>

<style>
  .container{
    flex: 1;
  }
  .map{
    flex: 1;
    background-color: #000;
  }
</style>

<script>

const amap = weex.requireModule('amap')

  module.exports = {
    data() {
        return {
            pos:[116.367, 39.90003],
            point: {
                position: [112,36],
                title: 'this is a marker'
            }
        }
    },
    
    created () {

        amap.initAmap('623c0396a9b879461c971a14baa678fb');
    },
    
  }
</script>