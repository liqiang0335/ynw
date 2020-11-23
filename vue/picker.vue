<template>
  <div class="box">
    <van-field
      readonly
      clickable
      :value="value"
      placeholder="请选择"
      :label="label"
      v-bind="$attrs"
      @click="onClick"
    />
    <div class="info">
      <slot></slot>
    </div>
    <yn-pop v-model="showPicker">
      <van-picker
        show-toolbar
        v-bind="$attrs"
        :columns="options"
        @confirm="confirm"
        @cancel="showPicker=false"
      />
    </yn-pop>
  </div>
</template>
<script>
/**
 * ----------------------------------------
 * 下拉选择
 * @param {String} label - 标签
 * @param {String} val - 设置选中
 * @param {Array<String>} options - 选项
 * @param {Function} change({value,index}) - 点击回调
 * ----------------------------------------
 */
export default {
  props: {
    val: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    val(v) {
      v && (this.value = v);
    },
  },
  data() {
    return {
      showPicker: false,
      value: "",
    };
  },
  methods: {
    onClick() {
      if (this.disabled) {
        this.$emit("disabled");
        return;
      }
      this.showPicker = true;
    },
    confirm(value, index) {
      this.showPicker = false;
      this.value = value;
      this.$emit("change", { value, index });
    },
    setValue(v) {
      this.value = v;
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  background: white;
  align-items: center;
}
.info {
  flex-shrink: 0;
  font-size: 13px;
  padding-right: 15px;
}
</style>
