<template>
  <div class="layer" :style="bg">
    <div class="box" :style="box">
      <div class="title" v-show="title">{{title}}</div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
/**
 * <yn-layer title="产品续费" box="width:400px;height:240px;"></yn-layer>
 */
export default {
  props: ["box", "title", "bg"]
};
</script>

<style lang="scss" scoped>
.layer {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(70, 70, 70, 0.445);
  .box {
    border-radius: 4px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 1px solid rgb(235, 235, 235);
    box-shadow: 4px 4px 10px rgba(63, 63, 63, 0.171);
    background: white;
    .title {
      padding: 15px;
      border-bottom: 1px solid rgb(236, 236, 236);
    }
  }
}
</style>
