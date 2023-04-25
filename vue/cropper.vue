<!-- 图片裁剪  -->
<template>
  <div class="crop-bg" v-show="show" style="z-index: 20000">
    <div class="crop-box" :style="boxStyle">
      <div class="crop-title">图片裁剪</div>
      <div class="close" @click="close">X</div>
      <div class="crop-choose">
        <label for="crop-input">
          <input accept=".jpg, .jpeg, .png, .gif" id="crop-input" ref="input" type="file" @change="change" capture />
          <span class="crop-btn">选择图片</span>
        </label>
        <div v-show="ready" class="crop-btn crop-btn-crop" @click="crop">确定</div>
      </div>
      <div class="crop-content" :style="contentStyle">
        <img :src="src" @load="start" ref="img" class="thumb" />
      </div>
    </div>
  </div>
</template>
<script>
/**
 * 图片裁剪
 * @param {Boolean} visible 是否显示
 * @param {Array} layout [width,height] 裁剪框大小
 * @param {Array} size [width,height] 裁剪后图片大小
 * @param {Function} crop(base64) 裁剪后回调
 *
 * @description
 *<crop :visible.sync="shwoCrop" @crop="onCrop" :layout="[700,500]" :size="[160,160]" />
 */
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    layout: {
      type: Array,
      default: () => [800, 600], //[width,height]
    },
    size: {
      type: Array,
      default: () => [200, 200],
    },
  },
  data() {
    return {
      show: false,
      src: "",
      file: null,
      cropper: null,
      ready: false,
    };
  },

  watch: {
    visible(val) {
      this.show = val;
    },
  },
  computed: {
    ratio() {
      return this.size[0] / this.size[1];
    },
    boxStyle() {
      return {
        width: this.layout[0] + "px",
        height: this.layout[1] + "px",
      };
    },
    contentStyle() {
      return {
        height: this.layout[1] - 40 + "px",
      };
    },
    previewStyle() {
      const width = this.layout[0] * 0.3 * 0.8;
      return {
        width: width + "px",
        height: width * this.ratio + "px",
      };
    },
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
        ready: () => (self.ready = true),
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
            this.file = file;
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
        height: this.size[1],
      });
      const base64 = canvas.toDataURL();
      this.$emit("crop", base64);
      this.close();
    },
    change({ target }) {
      this.read(target.files)
        .then(() => (target.value = ""))
        .catch((e) => {
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
    },
  },
};
</script>
<style scoped>
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
  margin-left: 10px;
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
