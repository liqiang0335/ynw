/**
 * 二分查找
 *
 * @param {*[]} arr 已经排好序的数组
 * @param {*} seek 要查找的元素
 * @return {number}
 */
export default function binarySearch(arr, seek) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = start + Math.floor((end - start) / 2);
    if (arr[middle] == seek) {
      return middle;
    }
    if (arr[middle] < seek) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}
