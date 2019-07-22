<template>
  <van-popup position="bottom" v-model="show" :close-on-click-overlay="false">
    <van-picker v-bind="$attrs" show-toolbar :columns="columns" @confirm="confirm" @cancel="close" />
  </van-popup>
</template>
<script>
/**
 * @param {Array} columns - 列表数据
 * @param {Boolean} show.sync - 显示/隐藏
 * @param {Function} change({value,index})
 */
export default {
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showPicker: false,
      value: ""
    };
  },
  methods: {
    close() {
      this.$emit("update:show", false);
    },
    confirm(value, index) {
      this.close();
      this.value = value;
      this.$emit("change", { value, index });
    }
  }
};
</script>