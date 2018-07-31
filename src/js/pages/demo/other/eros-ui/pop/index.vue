<template>
  <div class="eros-demo-wrap">
      <div class="eros-mask">
         <div class="eros-pop">
           <text class="pop-hd">弹层标题区</text>
           <text class="pop-bd">弹层内容区</text>
           <text class="pop-ft">弹层按钮区</text>
         </div>
      </div>
  </div>
</template>

<style lang="scss" scoped> 
@import "src/js/css/reset.scss";

.eros-demo-wrap {
  @include fullscreen(fixed);
}
.eros-mask {
  @include fullscreen();
  background-color: rgba(0,0,0,.8);
  @include align();
}
.eros-modal-top {
  @include align($align-items: center,$justify-content: flex-start);
}

.eros-modal-bottom {
  @include align($justify-content: flex-end);
}
.eros-pop {
  @extend %bg-white;
  @include rect(650,450);
}
.pop-hd {
  font-size: 36;
  font-weight: bold;
  text-align: center;
}
</style>
