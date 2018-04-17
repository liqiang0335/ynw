const aliasConfig = require("../alias");
/**
 * alias配置的路径转换为绝对路径
 */
const absolutePath = config => {
  const target = {};
  for (var key in config[key]) {
    const value = config[key];
    target[key] = getDir(value);
  }
  return target;
};

if (aliasConfig) {
  Object.assign(base.resolve.alias, absolutePath(aliasConfig));
}
