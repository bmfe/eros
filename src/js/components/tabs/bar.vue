<template>
  <div class="wrapper">
     <embed v-for="(item , i) in tabItems" :src="item.src" :key="i" type="weex" :style="{ visibility: item.visibility }" class="content"></embed> 
    <div class="tabbar" append="tree">
      <BarItem v-for="item in tabItems" :key="item.index" :index="item.index" :icon="item.icon" :title="item.title" :titleColor="item.titleColor" @tabItemOnClick="tabItemOnClick"></BarItem>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 750;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: 0;
  margin-bottom: 100;
}

.tabbar {
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100;
}
</style>

<script>
import BarItem from './item.vue'
export default {
  props: {
    tabItems: { default: [] },
    selectedColor: { default: '#ff0000' },
    unselectedColor: { default: '#000000' }
  },
  data () {
    return {
      selectedIndex: 0
    }
  },
  components: {
    BarItem
  },
  created () {
    this.select(this.selectedIndex);
  },
  methods: {
    tabItemOnClick (e) {
      this.selectedIndex = e.index;
      this.select(e.index);
      this.$emit('tabBarOnClick', e);
    },
    select: function (index) {
      for (var i = 0; i < this.tabItems.length; i++) {
        var tabItem = this.tabItems[i];
        if (i === index) {
          tabItem.icon = tabItem.selectedImage;
          tabItem.titleColor = this.selectedColor;
          tabItem.visibility = 'visible';
        } else {
          tabItem.icon = tabItem.image;
          tabItem.titleColor = this.unselectedColor;
          tabItem.visibility = 'hidden';
        }
      }
    }
  }
}
</script>