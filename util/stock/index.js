window.Promise = require("es6-promise").Promise;
import { getStockInfo, searchCode } from "./stock";

window.stockMain = function({ btn, input, wrap, callback }) {
  //查询股票
  btn.on("click", function() {
    const value = input.val();
    if (!value) return;
    wrap.show();
    searchCode(value).then(codes => {
      wrap.html(createElements(codes));
    });
    return false;
  });
  //关闭弹框
  document.addEventListener("click", () => {
    if (wrap.css("display") == "block") {
      wrap.hide();
    }
  });
  //搜索股票信息
  wrap.on("click", ".stock-item", function() {
    wrap.hide();
    const value = $(this)
      .find(".stock-item-code")
      .text();
    getStockInfo(value).then(back => callback(back));
  });
};

/**
 * 股票模板
 */
const createElements = codes => {
  if (codes.length < 1) {
    return `<div class="stock-items">
              <div class="stock-nothing">没有查到相关股票</div>
          </div>`;
  }
  const items = codes.map(item => {
    return `<div class="stock-item">
                <span class="stock-item-code">${item[0]}</span>
                <span class="stock-item-name">${item[1]}</span>
                <span class="stock-item-pinyin">${item[2]}</span>
            </div>`;
  });
  return `<div class="stock-items">${items.join("")}</div>`;
};
