<template>
  <div class="upload">
    <yn-label :required="required">{{label}}</yn-label>
    <div class="box">
      <van-uploader v-model="files" :max-count="3" />
    </div>
  </div>
</template>
<script>
import imgResize from "../script/imgResize";
/**
 * -------------------------------------
 * @param {Function} ref.getValue - 获取base64图片
 * -------------------------------------
 */
export default {
  props: {
    label: String,
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      files: [],
    };
  },
  methods: {
    async getValue() {
      const res = [];
      for (let item of this.files) {
        const base64 = item.content;
        const data = await imgResize({ src: base64, max: 1000 });
        res.push(data.src);
      }
      return res;
    },
  },
};
</script>
<style scoped lang='scss'>
.upload {
  margin-bottom: 10px;
}
.box {
  padding: 10px;
  background: white;
}
</style>