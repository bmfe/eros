<template>
  <div class="container" >

    <div class="border">
      <div ref="box" class="box" @touchstart="ontouchstart">
        <div class="head">
          <div class="avatar"></div>
          <text class="username">HACKER</text>
        </div>
        <div class="content">
          <text class="desc">Google announced a new version of Nearby Connections for fully offline.high bandwidth peer to peer device communications.</text>
        </div>
        <div class="footer">
          <text class="action">SHARE</text>
          <text class="action" style="color:#7C4DFF">EXPLORE</text>
        </div>
      </div>
    </div>
  
    <div style="width:750;align-items:center">
      
      <text style="font-size:40">
        Google Now-Style Card
      </text>
    </div>
   
  </div>
</template>

<style scoped>
  .container {
    flex: 1;
    background-color:#eeeeee;
    
  }
  .border{
    height:1000px;
    padding-left:35px;
    padding-right:35px;
    padding-top:100px;
  }
  .box {
    width: 680px;
    height: 450px;
    background-color:#651FFF;
  }
  .head {
    background-color:#651FFF;
    width:680px;
    height:120px;
    flex-direction:row;
    align-items:center;
  }
  .content{
    width:680px;
    height:240px;
    background-color:#651FFF;
    padding-left:24px;
    padding-top:24px;
    padding-right:24px;
  }
  .footer {
    width:680px;
    height:90px;
    background-color: #fff;
    align-items:center;
    justify-content:flex-end;
    padding-right:25px;
    flex-direction:row
  }
  .action {
    font-size:35;
    padding-right:20px;
  }
  
  .desc {
    font-size:32;
    color:#fff;
    padding-left:24px;
  }
  
  
  .avatar {
    width:96px;
    height:96px;
    border-radius:48px;
    background-color:#CDDC39;
    margin-left:36px;
    margin-right:48px;
  }
  
  .username {
    color:#fff;
    font-size:32;
  }
  
</style>

<script>
  export default {
    data () {
      return {
        x: 0,
        y: 0,
        isInAnimation: false,
        opacity:1,
        gesToken:0
      }
    },
    methods: {
      ontouchstart (event) {
        if(this.isInAnimation) return
        if(this.gesToken != 0) {
          this.$bindingx.unbind({
            eventType:'pan',
            token:this.gesToken
          })
          this.gesToken = 0
          return
        }
        
        let boxRef = this.$refs.box.ref
        let gesTokenObj = this.$bindingx.bind({
          anchor:boxRef,
          eventType:'pan',
          props: [
              {element:boxRef, property:'transform.translateX',expression:"x+0"},
              {element:boxRef, property:'opacity',expression: "1-abs(x)/600"}]
        }, (e) => {
          if(e.state === 'end') {
             this.x += e.deltaX
             this.y += e.deltaY
             this.opacity = 1-Math.abs(e.deltaX)/600
             this.bindTiming()
          }
        })
        this.gesToken = gesTokenObj.token
      },
      bindTiming() {
        this.isInAnimation = true

	      let boxRef = this.$refs.box.ref
        let changed_x, final_x, final_opacity, translate_x_origin
        let shouldDismiss = false
        
        if(this.x>=-750/2 && this.x<=750/2) {
          shouldDismiss = false
          final_x = 0
          changed_x = 0-this.x
          final_opacity = 1
          translate_x_origin = `easeOutElastic(t,${this.x},${changed_x},1000)`
        } else if(this.x < -750/2) {
          final_x = -750
          shouldDismiss = true
          changed_x = -750-this.x
          final_opacity = 0
          translate_x_origin = `easeOutExpo(t,${this.x},${changed_x},1000)`
        } else {
          //x > 750/2
          final_x = 750
          shouldDismiss = true
          changed_x = 750-this.x
          final_opacity = 0
          translate_x_origin = `easeOutExpo(t,${this.x},${changed_x},1000)`
        }
       
       
       let opacity_origin = `linear(t,${this.opacity},${final_opacity - this.opacity},1000)`
	     let result = this.$bindingx.bind({
          eventType:'timing',
          exitExpression:"t>1000",
          props: [
              {element:boxRef, property:'transform.translateX',expression:translate_x_origin},
              {element:boxRef, property:'opacity',expression:opacity_origin}
            ]
          
        },(e) => {
            if(e.state === 'end' || e.state === 'exit') {
              // reset x
              this.x = final_x
              this.isInAnimation = false
              
              if(shouldDismiss) {
                //remove card from hierarchy
              }
            }
        })
      }
    }
  }
</script>