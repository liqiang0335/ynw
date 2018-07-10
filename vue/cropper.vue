<!-- 图片裁剪  -->
<template>
  <div class="crop-bg" v-show="show" style="z-index:20000">
    <div class="crop-box" :style="boxStyle">
      <div class="crop-title">图片裁剪</div>
      <div class="close">
        <img @click="close" width="25" src="data:image/png;base64,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">
      </div>
      <div class="crop-choose">
        <label for="crop-input">
          <input accept=".jpg,.jpeg,.png,.gif" id="crop-input" ref="input" type="file" @change="change" capture>
          <span class="crop-btn">选择文件</span>
        </label>
        <button v-show="ready" class="crop-btn crop-btn-crop" @click="crop">裁切图片</button>
      </div>
      <div class="crop-content" :style="contentStyle">
        <img :src="src" @load="start" ref="img" class="thumb">
      </div>
    </div>
  </div>
</template>
<script>
/**
 *
 */
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    layout: {
      type: Array,
      default: () => [800, 600] //[width,height]
    },
    size: {
      type: Array,
      default: () => [200, 200]
    }
  },
  data() {
    return {
      show: false,
      src: "",
      cropper: null,
      ready: false
    };
  },

  watch: {
    visible(val) {
      this.show = val;
    }
  },
  computed: {
    ratio() {
      return this.size[0] / this.size[1];
    },
    boxStyle() {
      return {
        width: this.layout[0] + "px",
        height: this.layout[1] + "px"
      };
    },
    contentStyle() {
      return {
        height: this.layout[1] - 40 + "px"
      };
    },
    previewStyle() {
      const width = this.layout[0] * 0.3 * 0.8;
      return {
        width: width + "px",
        height: width * this.ratio + "px"
      };
    }
  },
  methods: {
    prevent(e) {
      e.stopPropagation();
    },
    start() {
      const self = this;
      this.stop();
      this.cropper = new Cropper(this.$refs.img, {
        aspectRatio: this.ratio,
        minCropBoxWidth: this.size[0],
        minCropBoxHeight: this.size[1],
        ready: () => (self.ready = true)
      });
    },
    read(files) {
      return new Promise((resolve, reject) => {
        if (!files || files.length === 0) {
          return resolve();
        }
        const file = files[0];
        if (/^image\/\w+$/.test(file.type)) {
          const reader = new FileReader();
          reader.onload = () => {
            this.src = reader.result;
            resolve();
          };
          reader.onerror = reject;
          reader.onabort = reject;
          reader.readAsDataURL(file);
        } else {
          reject("Please choose an image file.");
        }
      });
    },
    //裁切图片
    crop() {
      const canvas = this.cropper.getCroppedCanvas({
        width: this.size[0], //需要的尺寸
        height: this.size[1]
      });
      const base64 = canvas.toDataURL();
      this.$emit("crop", base64);
      this.close();
    },
    change({ target }) {
      this.read(target.files)
        .then(() => (target.value = ""))
        .catch(e => {
          target.value = "";
          this.alert(e);
        });
    },
    alert(e) {
      window.alert(e && e.message ? e.message : e);
    },
    close() {
      this.src = "";
      this.stop();
      this.$emit("update:visible", false);
    },
    stop() {
      if (this.cropper) {
        this.cropper.destroy();
        this.cropper = null;
        this.ready = false;
      }
    }
  }
};
</script>
<style scoped lang="scss">
.crop-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.281);
  user-select: none;
  z-index: 2000;
}
.crop-box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: rgb(255, 255, 255);
  width: 600px;
  height: 400px;
}
.crop-title {
  height: 50px;
  line-height: 50px;
  text-indent: 20px;
  background: rgb(245, 245, 245);
  position: relative;
  border-bottom: 1px solid #d4d4d4;
}
.crop-content {
  overflow: hidden;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC");
}

.crop-choose {
  overflow: hidden;
  position: absolute;
  top: 9px;
  left: 100px;
}
#crop-input {
  width: 1px;
  position: relative;
  left: -1px;
  opacity: 0.01;
}

.crop-btn {
  font-size: 13px;
  padding: 6px 15px;
  background: rgb(0, 60, 255);
  border-radius: 2px;
  color: white;
  display: inline-block;
  cursor: pointer;
  border-radius: 2px;
}
.crop-btn-crop {
  background: red;
}
.thumb {
  max-width: 100%;
  max-height: 100%;
}
.close {
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
</style>
