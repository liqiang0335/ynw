<template>
  <div class="stock" v-show="visible">
    <div class="items">
      <div class="item" @click="select(item)" v-for="(item) in list" :key="item.code">
        <span class="name">{{item[1]}}</span>
        <span class="code">{{item[0]}}</span>
        <span class="pinyin">{{item[2]}}</span>
      </div>
    </div>
  </div>
</template>
<script>
/**
 *<yn-stock :query="stockName" @select="onSelectStock"></yn-stock>
 */

import debounce from "lodash/debounce";

/**
 * 查询股票代码
 */
let stocks = []; //所有股票代码
const node = document.createElement("script");
node.src = "http://js.9666sr.com/sr/js/common/stockCode.js?ver=" + Date.now();
const sibling = document.getElementsByTagName("script")[0];
sibling.parentNode.insertBefore(node, sibling);
node.onload = function() {
  const set = new Set();
  window.codes.forEach(item => {
    const code = item[0];
    if (set.has(code)) return;
    set.add(code);
    stocks.push(item);
  });
};

//当选中列表中的项目时, 存储一次关键字
//避免重复显示
let selectKey = null;

export default {
  props: {
    query: {
      default: "",
      type: String
    },
    limit: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      visible: false,
      list: []
    };
  },
  watch: {
    query(val) {
      //选中操作, 无需重复显示
      if (val === selectKey) {
        selectKey = null;
        return;
      }
      if (!val.trim() || val.length > 6) {
        this.toggle(false);
        return;
      }
      this.queryStockCode(val);
    }
  },
  methods: {
    toggle(val) {
      this.visible = val;
    },
    select(item) {
      selectKey = item[1];
      this.$emit("select", item);
      this.toggle(false);
    },
    queryStockCode: debounce(function() {
      const key = this.query.toUpperCase();
      const result = [];
      for (var i = 0; i < stocks.length; i++) {
        if (result.length === this.limit) {
          break;
        }
        const item = stocks[i];
        if (item.find(it => it.indexOf(key) >= 0)) {
          result.push(item);
        }
      }
      this.toggle(true);
      this.list = result;
    }, 1000)
  }
};
</script>
<style lang="scss" scoped>
.stock {
  position: absolute;
  z-index: 1000;
  background: white;
  width: 350px;
  .items {
    border: 2px solid rgb(1, 128, 212);
    box-shadow: 2px 2px 10px rgba(32, 32, 32, 0.075);
    .item {
      $c: rgb(9, 85, 172);
      cursor: pointer;
      border-top: 1px solid rgb(236, 236, 236);
      color: rgb(53, 53, 53);
      text-indent: 15px;
      .pinyin {
        font-weight: bold;
      }
      & > * {
        width: 100px;
        display: inline-block;
      }
      &:first-child {
        border-top: none;
      }
      &:hover {
        background: $c;
        color: white;
      }
    }
  }
}
</style>
