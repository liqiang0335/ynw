import { cloneDeep } from "lodash-es";
/**
 * @param {Array} datas
 * @return {Array}
 */
export default function array2Tree(nodes, option = {}) {
  const id = option.id || "id";
  const pid = option.pid || "pid";
  const children = option.children || "children";
  const result = [];
  const byIds = {};
  const len = nodes.length;
  const datas = cloneDeep(nodes);

  for (let i = 0; i < len; i++) {
    byIds[datas[i][id]] = datas[i];
  }

  for (let i = 0; i < len; i++) {
    let parent = byIds[datas[i][pid]];
    if (parent) {
      parent[children] = parent[children] || [];
      parent[children].push(datas[i]);
    } else {
      result.push(datas[i]);
    }
  }

  return result;
}
