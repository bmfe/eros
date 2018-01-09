<template>
  <div class="tabs-scroll">
    <scroller ref="scroller" scroll-direction="horizontal" show-scrollbar="false" class="tabs-scroll" @scroll="menuScroll">
        <div class="tab-box-scroll flex-column-center" :key="index" @click="activeMenu(index)" :ref="'menu_' + index" :class="[ index === activeIndex ? 'tabs-on' : 'tabs-default']" v-for="(item, index) in menu">
            <text class="tab-items" :class="[ index === activeIndex ? 'items-on' : '']">{{item.name}}</text> 
        </div>
    </scroller>
    <image class="scroll-arrow" v-if="showRight" src="//img.benmu-health.com/app-benmu-health/doctor/linear-gradient-arrow.png" @click="scrollToMenu(menu.length - 1)"></image>
</div>
</template>

<script>
const dom = weex.requireModule('dom')
const MOCK_APP_MENU = [{
    'name': 'tab1'
}, {
    'name': 'tab2'
}, {
    'name': 'tab3'
}, {
    'name': 'tab4'
}, {
    'name': 'tab5'
}]

export default {
    props: {
        activeIndex: {
            type: Number,
            default: 0
        }
    },
    data () {
       return {
            menu: MOCK_APP_MENU,
            showRight: true
       }
    },
    watch: {
        activeIndex (newVal, oldVal) {
            const scrollIndex = newVal < 1 ? 0 : newVal - 1
            this.scrollToMenu(scrollIndex)
        }
    },
    methods: {
        activeMenu (index) {
            this.activeIndex = index
            this.$emit('change', index)
        },
        menuScroll (e) {
			if (this.menu.length <= 4) return
			const menuWidth = this.$refs['menu_0'][0].style.width
            const scrollWidth = e.contentSize.width
            const offsetX = e.contentOffset.x
                // 最后这个1 有意思
			this.showRight = scrollWidth - menuWidth * 4 + offsetX + 1 > menuWidth
        },
        scrollToMenu (index) {
            dom.scrollToElement(this.$refs[`menu_${index}`][0])
        }
    }
}
</script>
<style lang="sass" src="../index.scss"></style>
