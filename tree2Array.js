module.exports = function tree2Array(nodes) {
  const children = "children";
  var result = [];

  if (Array.isArray(nodes)) {
    const len = nodes.length;
    for (var i = 0; i < len; i++) {
      result.push(nodes[i]);
      if (nodes[i][children]) {
        result = result.concat(tree2Array(nodes[i][children]));
      }
    }
  } else {
    result.push(nodes);
    result = result.concat(tree2Array(nodes[children]));
  }
  return result;
};
