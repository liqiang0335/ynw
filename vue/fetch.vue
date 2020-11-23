<template>
  <div class="container">
    <div v-if="hasmore">
      <img v-if="loading" :src="icon" width="16" class="icon" />
      <div v-else class="loading" @click="getdata">
        <span class="name">{{ text }}</span>
      </div>
    </div>
    <div v-else class="loading">没有更多数据了</div>
  </div>
</template>
<script>
const icon = "http://www.cim4r.com.cn/rfcdam/weixin/app/images/loading2.gif";
import http from "@script/http";
import getUrlParams from "ynw/getUrlParams";
/**
 * ----------------------------------------
 *  加载数据
 * @param {String} url
 * @param {Function} data
 * ----------------------------------------
 */
export default {
  props: {
    url: String,
  },
  data() {
    return {
      icon,
      hasmore: true,
      loading: false,
      rows: [],
    };
  },
  computed: {
    text() {
      return this.loading ? "正在加载" : "加载更多";
    },
  },
  mounted() {
    this.getdata();
  },
  methods: {
    async getdata() {
      const len = this.rows.length;
      // 自动添加 URL 参数到请求中
      const urlParams = getUrlParams(window.location.href);
      const params = { ...urlParams };
      if (len > 0) {
        params.last = this.rows[len - 1]._id;
      }
      this.loading = true;
      let res = await http.get(this.url, { params });
      this.loading = false;
      this.rows = this.rows.concat(res);
      this.hasmore = res.length === 10;
      this.$emit("data", this.rows);
    },
  },
};
</script>
<style scoped lang="scss">
.container {
  padding: 10px 0;
  text-align: center;
  overflow: hidden;
  height: 40px;
}
.loading {
  text-align: center;
  padding: 10px;
  font-size: 13px;
  color: gray;
}
.icon {
  position: relative;
  top: 4px;
  margin-right: 3px;
}
</style>
