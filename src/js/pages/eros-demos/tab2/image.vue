<template>
    <div>
        远程图片：
        <bui-image src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1506658958&di=ec259cd374d04adf84545bbdf200eaf1&src=http://pic75.nipic.com/file/20150815/21601532_111043287160_2.png" width="750px" height="500px"></bui-image>
        本地图片：
        <bui-image src="bmlocal://assets/test.jpeg" width="300px" height="300px"></bui-image>
    </div>
</template>

<script>
import { buiImage } from 'Eros/bui'
export default {
    components: {
        buiImage
    }
}
</script>

<style>
  
</style>
