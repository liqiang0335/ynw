/**
 * 按需导入
 */
function asyncImport() {
  return import("lodash");
}

//3秒后导入组件
setTimeout(f => {
  asyncImport().then(v => {
    console.log(_);
  });
}, 3000);
