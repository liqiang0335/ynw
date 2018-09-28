const Sort = require("./Sort");

/**
 * 插入排序
 */
class InsertionSort extends Sort {
  sort(source) {
    const array = [...source];
    for (let i = 0; i < array.length; i += 1) {
      this.callbacks.visiting(array[i]);
      let cur = i;

      //如果上一个元素比当前元素大,则交换位置
      while (
        array[cur - 1] !== undefined &&
        this.comparator.lessThan(array[cur], array[cur - 1])
      ) {
        this.callbacks.visiting(array[cur - 1]);

        //交换元素
        const tmp = array[cur - 1];
        array[cur - 1] = array[cur];
        array[cur] = tmp;

        //向左移动游标
        cur -= 1;
      }
    }

    return array;
  }
}

module.exports = InsertionSort;
