const Sort = require("./Sort");

/**
 * 选择排序
 */
class SelectionSort extends Sort {
  sort(source) {
    const array = [...source];

    for (let i = 0; i < array.length - 1; i++) {
      this.callbacks.visiting(array[i]);
      let minIndex = i;

      //在当前元素的右侧找出最小元素
      for (let j = i + 1; j < array.length; j++) {
        this.callbacks.visiting(array[j]);
        if (this.comparator.lessThan(array[j], array[minIndex])) {
          minIndex = j;
        }
      }

      //如果找到则交换位置
      if (minIndex !== i) {
        const tmp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = tmp;
      }
    }

    return array;
  }
}

module.exports = SelectionSort;
