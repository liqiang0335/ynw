import Comparator from "../util/Comparator";

/**
 * 二分查找
 *
 * @param {*[]} arr 已经排好序的数组
 * @param {*} seek 要查找的元素
 * @param {function(a, b)} [callback] 比较函数
 * @return {number}
 */
export default function binarySearch(arr, seek, callback) {
  const comparator = new Comparator(callback);
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = start + Math.floor((end - start) / 2);

    if (comparator.equal(arr[middle], seek)) {
      return middle;
    }

    if (comparator.lessThan(arr[middle], seek)) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}
