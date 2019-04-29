<template>
  <div class="overlay" v-show="visible" :style="{position: type}">
    <div class="box">
      <img width="20" src="../assets/images/loading2.gif">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  props: {
    show: {
      default: false,
      type: Boolean
    },
    // 至少显示多少毫秒
    min: {
      type: Number,
      default: 100
    },
    type: {
      type: String,
      default: "fixed"
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.visible = true;
      } else {
        if (this.min === 0) {
          this.visible = false;
          return;
        }
        setTimeout(() => {
          this.visible = false;
        }, this.min);
      }
    }
  }
};
</script>
<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
}
.box {
  width: 20px;
  height: 20px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
</style>
