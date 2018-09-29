const Sort = require("./Sort");

/**
 * 归并排序
 */
class MergeSort extends Sort {
  sort(source) {
    if (source.length <= 1) {
      return source;
    }

    //分解
    const middleIndex = Math.floor(source.length / 2);
    const left = source.slice(0, middleIndex);
    const right = source.slice(middleIndex, source.length);

    //递归
    const leftSortedArray = this.sort(left);
    const rightSortedArray = this.sort(right);

    //合并
    return this.mergeSortedArrays(leftSortedArray, rightSortedArray);
  }

  mergeSortedArrays(left, right) {
    let sortedArray = [];

    // In case if arrays are not of size 1.
    while (left.length && right.length) {
      let minimumElement = null;

      // Find minimum element of two arrays.
      if (this.comparator.lessThanOrEqual(left[0], right[0])) {
        minimumElement = left.shift();
      } else {
        minimumElement = right.shift();
      }

      this.callbacks.visiting(minimumElement);

      // Push the minimum element of two arrays to the sorted array.
      sortedArray.push(minimumElement);
    }

    // If one of two array still have elements we need to just concatenate
    // this element to the sorted array since it is already sorted.
    if (left.length) {
      sortedArray = sortedArray.concat(left);
    }

    if (right.length) {
      sortedArray = sortedArray.concat(right);
    }

    return sortedArray;
  }
}

module.exports = MergeSort;
