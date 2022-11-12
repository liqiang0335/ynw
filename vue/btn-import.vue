<template>
  <el-popover placement="left" trigger="click" @after-leave="onLeave">
    <div class="box">
      <div class="item">
        <el-button type="danger" icon="el-icon-download" @click="downloadTemplate">导入模版下载</el-button>
      </div>
      <div class="item">
        <el-upload
          ref="upload"
          drag
          action
          :on-change="onChange"
          accept=".xlsx"
          :auto-upload="false"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="tip">
            <i class="el-icon-warning-outline"></i>
            请使用模版文件导入数据
          </div>
        </el-upload>
      </div>
    </div>
    <el-button icon="el-icon-upload2" slot="reference">导入</el-button>
  </el-popover>
</template>
<script>
import readXLSX from "../script/readXLSX";
export default {
  props: ["template"],
  data() {
    return {};
  },
  methods: {
    onLeave() {
      this.$refs.upload.clearFiles();
      this.$refs.upload.abort();
    },
    async onChange(file) {
      const datas = await readXLSX(file.raw);
      this.$emit("change", datas);
    },
    downloadTemplate() {
      if (this.template) {
        window.location.href = this.template;
      } else {
        this.$message.error("没有模版文件");
      }
    },
  },
};
</script>
<style scoped lang="scss">
.box {
  text-align: center;
}
.item {
  margin: 10px auto;
}
.tip {
  font-size: 13px;
  color: rgb(147, 147, 147);
  margin-top: 10px;
}
</style>