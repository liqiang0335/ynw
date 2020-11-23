<template>
  <div class="choose-radio">
    <div class="wrap van-hairline--bottom">
      <div class="title">{{ label }}</div>
      <van-radio-group v-bind="$attrs" v-on="$listeners">
        <div class="item" v-for="(item, i) in handler(data)" :key="i">
          <van-radio :name="item.value">{{ item.title }}</van-radio>
        </div>
      </van-radio-group>
    </div>
  </div>
</template>
<script>
/**
 * ----------------------------------------
 * 单选组合-水平:
 * 使用 v-model` 双向绑定
 * @param {String} label
 * @param {Array} data - [{title, value}]
 * @param {Function} onChange
 * ----------------------------------------
 */
export default {
  props: {
    label: String,
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handler(data) {
      return data.map((item) => {
        if (typeof item == "string") {
          return { title: item, value: item };
        }
        return item;
      });
    },
  },
};
</script>
<style scoped lang='scss'>
.choose-radio {
  background-color: white;
}
.wrap {
  padding: 10px 0;
  margin-left: 15px;
  display: flex;
  align-items: center;
}
.title {
  margin-right: 15px;
  flex-shrink: 0;
  color: rgb(90, 90, 90);
}
.item {
  margin: 5px;
}
</style>