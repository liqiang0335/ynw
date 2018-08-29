const limit = 6;
let stocks = [];

getAllCodes().then(data => (stocks = data));

/**
 * 获取所有股票
 */
function getAllCodes() {
  return new Promise((resolve, reject) => {
    let stocks = [];
    const node = document.createElement("script");
    node.src =
      "http://js.9666sr.com/sr/js/common/stockCode.js?ver=" + Date.now();
    const sibling = document.getElementsByTagName("script")[0];
    sibling.parentNode.insertBefore(node, sibling);
    node.onerror = reject;
    node.onload = function() {
      const set = new Set();
      window.codes.forEach(item => {
        const code = item[0];
        if (set.has(code)) return;
        set.add(code);
        stocks.push(item);
      });
      resolve(stocks);
    };
  });
}

/**
 * 搜索股票代码
 * @param <Array> stocks
 * @param <String> key
 */
export async function searchCode(key) {
  if (stocks.length < 1) {
    stocks = await getAllCodes();
  }
  key = key.toUpperCase();
  const result = [];
  for (var i = 0; i < stocks.length; i++) {
    if (result.length === limit) {
      break;
    }
    const item = stocks[i];
    if (item.find(it => it.indexOf(key) >= 0)) {
      result.push(item);
    }
  }
  return result;
}

/**
 * 股票前缀
 */
const getStockPrefix = code => {
  const prefixs = { 0: "sz", 3: "sz", 6: "sh" };
  return prefixs[code.substr(0, 1)];
};

/**
 * 查询股票信息
 * @param <String> code 股票代码
 */
export function getStockInfo(value) {
  return new Promise(resolve => {
    //如果有前缀则认为是 上证股票
    const matchPrefix = /^[a-z]+/.test(value);
    const code = matchPrefix ? value.match(/\d+/)[0] : value;
    const prefix = matchPrefix ? "sh" : getStockPrefix(code);

    const url = `http://hq.sinajs.cn/list=${prefix}${code}`;
    $.ajax({
      url,
      cache: true,
      type: "GET",
      dataType: "script",
      success() {
        const key = "hq_str_" + prefix + code;
        const res = window[key].split(",");
        if (res.length < 5) {
          resolve({ res, status: 3, text: "暂无信息" });
          return;
        }
        resolve({ res, status: 1 });
      }
    });
  });
}
