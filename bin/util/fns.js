const fs = require("fs");
const path = require("path");
const util = require("util");
const cwd = process.cwd();
const load = name => require(path.join(cwd, "node_modules", name));

/**
 * 获取命令行的参数
 * dep 等价于 dep=true
 * --dep 等价于 dep=true
 */
function getParams(arr) {
  const reg = /=|--/i;
  const result = arr.filter((_, i) => i > 1).reduce((acc, cur) => {
    if (!reg.test(cur)) {
      cur = `${cur}=true`;
    }
    cur = cur.replace(/--([^\s]+)/, "$1=true");
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {});
  return result;
}

/**
 * 复制属性
 */
function extend(source, target) {
  if (!target) return source;
  for (var key in source) {
    if (target[key] !== undefined) {
      source[key] = target[key];
    }
  }
  return source;
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
const readdir = util.promisify(fs.readdir);

module.exports = {
  load,
  getParams,
  merge,
  extend,
  exists,
  readFile,
  writeFile,
  readdir
};
