const Sort = require("./Sort");

/**
 * 计数排序
 */
class CountingSort extends Sort {
  sort(source, smallest = undefined, biggest = undefined) {
    let min = smallest || 0;
    let max = biggest || 0;

    //找出最大值和最小值
    if (smallest === undefined || biggest === undefined) {
      source.forEach(item => {
        this.callbacks.visiting(item);
        if (this.comparator.greaterThan(item, max)) {
          max = item;
        }
        if (this.comparator.lessThan(item, min)) {
          min = item;
        }
      });
    }

    //count Array: 统计元素出现的个数
    const buckets = Array(max - min + 1).fill(0);
    source.forEach(item => {
      this.callbacks.visiting(item);
      buckets[item - min] += 1;
    });
    //对元素个数进行累加==>得出小于当前项的数量
    for (let i = 1; i < buckets.length; i++) {
      buckets[i] += buckets[i - 1];
    }

    //向前移动一位
    //因为上一项的值是小于当前项的数量
    buckets.pop();
    buckets.unshift(0);

    //Result Array
    const sortedArray = Array(source.length).fill(null);
    for (let j = 0; j < source.length; j++) {
      const item = source[j];
      this.callbacks.visiting(item);
      const index = item - min;

      //直接放到应该放的位置(小于当前项的数量)
      const position = buckets[index];
      sortedArray[position] = item;
      buckets[index] += 1;
    }

    return sortedArray;
  }
}

module.exports = CountingSort;
