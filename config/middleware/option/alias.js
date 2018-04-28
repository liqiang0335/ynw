/**
 * 处理 alias.json
 * 配置的路径转换为绝对路径
 */
const path = require("path");
const getDir = url => path.join(__dirname, "../../../", url);

const absolutePath = config => {
  const target = {};
  for (var key in config) {
    const value = config[key];
    target[key] = getDir(value);
  }
  return target;
};

module.exports = ({ config }) => option => {
  Object.assign(option.resolve.alias, absolutePath(config.alias));
  return option;
};
