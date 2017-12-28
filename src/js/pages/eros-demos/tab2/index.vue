<template>
    <div class="container">
      <div class="category">
       <text class="category-text">widget</text>
      </div>
      <list class="list">
        <cell class="panel" v-for="(v,i) in rows" append="tree" :index="i" :key="i"  @click="handle(v.type)" >
            <text class="text">{{v.name}}</text>
        </cell>
      </list>
    </div>
</template>

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

<script>

export default {
  methods: {
    handle(type) {
      this[`handle_${type}`]()
    },
    handle_axios() {
      var self = this
      this.$fetch({
        name: 'COMMON.getInfo',
        data: {
          name: 'weex-eros'
        }
      }).then(resData => {
        self.$notice.alert({
          title: '提示',
          message: '请求成功：' + resData.data,
          okTitle: '确定',
          callback: () => {
            self.$notice.toast('您点击了确定')
          }
        })
      })
      // this.$service('common/getInfo', {
      //   a: 2123123,
      // }).then(resData => {
      //   console.log(resData)
      // })
    },
    handle_router() {
      this.$router.open({
        name: 'tab2.test',
        statusBarStyle: 'LightContent'
      })
    },
    handle_routerPresent() {
      this.$router.open({
        name: 'tab2.test',
        type: 'PRESENT'
      })
    },
    handle_routerAmap() {
      this.$router.open({
        name: 'tab2.amap'
      })
    },
    handle_routerWebView() {
      this.$router.toWebView({
        url: 'https://www.baidu.com'
      })
    },
    handle_alert() {
      this.$notice.alert({
        title: '提示',
        message: '这是一个弹窗',
        okTitle: '确定',
        callback: () => {
          this.$notice.toast('您点击了确定')
        }
      })
    },
    handle_confirm() {
      this.$notice.confirm({
        title: '提示',
        message: '这是一个选择弹窗',
        okTitle: '确定文案',
        cancelTitle: '取消文案',
        okCallback: () => {
          this.$notice.toast({message: '您点击了确定'})
        },
        cancelCallback: () => {
          this.$notice.toast({message: '您点击了取消'})
        }
      })
    },
    handle_loading() {
      this.$notice.loading.show('loading自定义文案')
      setTimeout(() => {
        this.$notice.loading.hide()
      }, 1000)
    },
    handle_toast() {
      this.$notice.toast( '这是一个toast' )
    },
    handle_geo() {
      this.$geo.get((resData) => {
          this.lat = resData.data.locationLat
          this.lng = resData.data.locationLng
      })
    },
    handle_scan() {
      this.$camera.scan(resData => {
          this.$notice.alert({
          title: '提示',
          message: resData
        })
      })
    },
    handle_uploadImg() {
      this.$image.upload({
        maxCount: 3,
      },resData => {
          this.$notice.alert({
          title: '提示',
          message: resData
        })
      })
    },
    handle_callPhone() {
      this.$router.toCallPhone(123123)
    },
    handle_localIconfont() {
      this.$router.open({
        name: 'tab3.iconfont'
      })
    },
    onappear: function (idx, e) {
      var appearId = this.rows[idx].id;
      var appearIds = this.appearIds;
      appearIds.push(appearId);
      this.getMinAndMaxIds(appearIds);
    },
    ondisappear: function (idx, e) {
      var disAppearId = this.rows[idx].id;
      var appearIds = this.appearIds;
      var index = appearIds.indexOf(disAppearId);
      if (index > -1) {
        appearIds.splice(index, 1);
      }
      this.getMinAndMaxIds(appearIds);
    },
    getMinAndMaxIds: function (appearIds) {
      appearIds.sort(function (a, b) {
        return a - b;
      });
      this.appearIds = appearIds;
      this.appearMax = appearIds[appearIds.length - 1];
      this.appearMin = appearIds[0];
    }
  },
  data: function () {
    return {
      appearMin: 1,
      appearMax: 1,
      appearIds: [],
      lat: '',
      lng: '',
      rows: [
        {
          id: 1,
          name: '发送请求',
          type: 'axios',
        },
        {
          id: 2,
          name: '正常打开一个页面',
          type: 'router',
        },
        {
          id: 3,
          name: '插入打开一个页面',
          type: 'routerPresent',
        },
        {
          id: 3,
          name: '插入打开一个webview',
          type: 'routerWebView',
        },
        {
          id: 4,
          name: '提示弹窗',
          type: 'alert',
        },
        {
          id: 5,
          name: '选择弹窗',
          type: 'confirm',
        },
        {
          id: 6,
          name: 'loading弹窗',
          type: 'loading',
        },
        {
          id: 7,
          name: 'toast弹窗',
          type: 'toast',
        },
        {
          id: 8,
          name: '获取当前坐标',
          type: 'geo',
        },
        {
          id: 9,
          name: '扫一扫',
          type: 'scan',
        },
        {
          id: 10,
          name: '上传图片',
          type: 'uploadImg',
        },
        {
          id: 11,
          name: '拨打电话',
          type: 'callPhone',
        },{
          id:12,
          name: '地图',
          type: 'routerAmap'
        },{
          id:13,
          name: '本地iconfont',
          type: 'localIconfont'
        }]
    }
  }
}
</script>
