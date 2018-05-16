const fs = require("fs");
const util = require("util");

/**
 * 获取命令行等号分隔的参数
 * --dep 等价于 dep=true
 */
function getParams(arr) {
  const reg = /=|--/i;
  return arr.filter(it => reg.test(it)).reduce((acc, cur) => {
    cur = cur.replace(/--([^\s]+)/, "$1=true");
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {});
}

/**
 * 合并属性
 */
function merge(source, target) {
  if (source === undefined) {
    source = {};
  }
  for (var key in target) {
    if (target[key] !== undefined) {
      source[key] = target[key];
    }
  }
  return source;
}

const exists = util.promisify(fs.exists);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

module.exports = {
  getParams,
  merge,
  exists,
  readFile,
  writeFile
};
