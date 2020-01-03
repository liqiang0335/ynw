/**
 * @param {Array} nodes - data
 * @param {Object} option - 三个字段的key值{id, pid, children}
 * @return {Array}
 */
export default function array2Tree(nodes, option = {}) {
  const id = option.id || "id";
  const pid = option.pid || "pid";
  const children = option.children || "children";
  const map = option.map;

  const result = [];
  const byIds = {};
  const len = nodes.length;

  for (let i = 0; i < len; i++) {
    if (map) {
      nodes[i] = map(nodes[i]);
    }
    byIds[nodes[i][id]] = nodes[i];
  }

  for (let i = 0; i < len; i++) {
    let parent = byIds[nodes[i][pid]];
    if (!parent) {
      result.push(nodes[i]);
    } else {
      if (!parent[children]) {
        parent[children] = [];
      }
      parent[children].push(nodes[i]);
    }
  }

  return result;
}
