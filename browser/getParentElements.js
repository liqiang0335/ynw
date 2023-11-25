/**
 * ----------------------------------------
 * [ynw]获取节点的所有父节点, 冒泡到 document
 * @param {HTMLElement} element 节点
 * @returns {HTMLElement[]} 父节点数组
 * ----------------------------------------
 */
export function getParentElements(element) {
  const parents = [];
  let parent = element.parentElement;
  while (parent) {
    parents.push(parent);
    parent = parent.parentElement;
  }
  return parents;
}

/**
 * ----------------------------------------
 * 获取节点的所有父节点
 * @param {HTMLElement} element 节点
 * @param {Function} predicate(parentElement) 父节点的判断函数, 返回 true 时停止遍历
 * @returns {HTMLElement[]} 父节点数组
 * ----------------------------------------
 */
export function getParentElementsBy(element, predicate) {
  const parents = [];
  let parent = element.parentElement;
  while (!predicate(parent)) {
    parents.push(parent);
    parent = parent.parentElement;
  }

  return parents;
}
