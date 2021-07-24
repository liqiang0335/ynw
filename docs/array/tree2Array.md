# tree2Array

> 树形结构转换为数组

```js
import tree2Array from "ynw/array/tree2Array";
```

## Source

```js
/**
 * @param {Array/Object} nodes
 * @return {Array}
 */
export default function tree2Array(nodes) {
  let result = [];

  if (Array.isArray(nodes)) {
    const len = nodes.length;
    for (var i = 0; i < len; i++) {
      result.push(nodes[i]);
      if (nodes[i].children) {
        result = result.concat(tree2Array(nodes[i].children));
      }
    }
  } else {
    result.push(nodes);
    result = result.concat(tree2Array(nodes.children));
  }
  return result;
}
```
