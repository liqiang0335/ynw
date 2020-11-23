<template>
  <div class="subutton">
    <van-button type="info" size="large" v-on="$listeners">提交</van-button>
  </div>
</template>
<script>
/**
 * -------------------------------------
 * @param {Function} onClick
 * -------------------------------------
 */
export default {
  methods: {},
};
</script>
<style scoped lang='scss'>
.subutton {
  padding: 20px;
  user-select: none;
}
</style>