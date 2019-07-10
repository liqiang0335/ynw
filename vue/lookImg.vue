<template>
  <div class="imgPoup flex" :style="'background:'+bgColor" v-show="imgBoxShow" @mousewheel.stop.prevent="imgZoom">
    <transition name="fadeOacityImg">
      <div class="imgBox" v-show="imgBoxShow" ref="imgBox">
        <img :src="imgSrc" ref="image" @mousedown.left.stop="drag" @mousemove.left.stop.prevent="move" @mouseup.left.stop="up">
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.7)"
    }
  },
  watch: {
    imgSrc(url) {
      if (url) {
        const { image } = this.$refs;
        image.onload = () => {
          this.imgOption.width = image.width;
          this.imgOption.height = image.height;
        };
        this.imgBoxShow = true;
      }
    }
  },
  data() {
    return {
      imgBoxShow: false,
      imgOption: {
        width: "",
        height: "",
        left: 0,
        top: 0
      },
      moveStatus: false,
      clickStatus: 0,
      mDown: {
        left: "",
        top: "",
        pageX: "",
        pageY: "",
        ofLeft: 0,
        ofTop: 0
      }
    };
  },
  mounted() {},
  methods: {
    drag(e) {
      this.moveStatus = true;
      this.moveCount = 0;
      this.mDown.left = this.imgOption.left;
      this.mDown.top = this.imgOption.top;
      this.mDown.pageX = e.pageX;
      this.mDown.pageY = e.pageY;
    },
    move(e) {
      if (!this.moveStatus) return;
      this.moveCount++;
      this.imgOption.left = this.mDown.left + e.pageX - this.mDown.pageX;
      this.imgOption.top = this.mDown.top + e.pageY - this.mDown.pageY;
      this.setImgBox();
    },
    up() {
      this.moveStatus = false;
      this.closeImg();
    },
    resetImg() {
      let { image, imgBox } = this.$refs;
      this.imgOption.left = 0;
      this.imgOption.top = 0;
      image.style.width = "";
      image.style.height = "";
      imgBox.style.transform = `translateX(0) translateY(0)`;
    },
    setImgBox() {
      const { imgBox } = this.$refs;
      this.mDown.ofLeft = imgBox.offsetLeft + this.imgOption.left;
      this.mDown.ofTop = imgBox.offsetTop + this.imgOption.top;
      imgBox.style.transform = `translateX(${this.imgOption.left}px) translateY(${this.imgOption.top}px)`;
    },
    //放大缩小
    imgZoom(e) {
      const { wheelDelta } = e;
      const { image } = this.$refs;
      let width, height;
      const zoomW = this.imgOption.width / 10;
      const zoomH = this.imgOption.height / 10;

      if (wheelDelta > 0) {
        width = image.width + zoomW;
        height = image.height + zoomH;
      } else {
        width = image.width - zoomW;
        height = image.height - zoomH;
      }
      image.style.width = `${width || zoomW}px`;
      image.style.height = `${height || zoomH}px`;

      this.setImgBox();
    },
    closeImg() {
      if (this.moveCount > 1) return;
      this.imgBoxShow = false;
      this.resetImg();
      this.$emit("update:imgSrc", "");
    }
  }
};
</script>
<style lang='scss' scoped>
.fadeOacityImg-enter-active {
  opacity: 1;
  transition: all 0.5s;
  transform: scale(1, 1);
}
.fadeOacityImg-enter {
  opacity: 0;
  transform: scale(0.1, 0.1);
}
.imgPoup {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 300;
  .imgBox {
    position: relative;
    img {
      cursor: all-scroll;
      max-width: none;
    }
  }
}
</style>