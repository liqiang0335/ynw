/**
 * 将树结构转换为数组
 * @param {Array/Object} nodes
 * @return {Array}
 */
export default function tree2Array(nodes, key = "children") {
  let result = [];

  if (Array.isArray(nodes)) {
    const len = nodes.length;
    for (var i = 0; i < len; i++) {
      result.push(nodes[i]);
      if (nodes[i][key]) {
        result = result.concat(tree2Array(nodes[i][key]));
      }
    }
  } else {
    result.push(nodes);
    result = result.concat(tree2Array(nodes[key]));
  }
  return result;
}
