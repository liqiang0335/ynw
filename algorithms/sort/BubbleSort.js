const Sort = require("./Sort");

/**
 * 冒泡排序
 */
class BubbleSort extends Sort {
  sort(source) {
    let swapped = false;
    // Clone original array to prevent its modification.
    const array = [...source];

    for (let i = 1; i < array.length; i++) {
      swapped = false;
      this.callbacks.visiting(array[i]);

      for (let j = 0; j < array.length - i; j++) {
        this.callbacks.visiting(array[j]);

        // Swap elements if they are in wrong order.
        if (this.comparator.lessThan(array[j + 1], array[j])) {
          const tmp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = tmp;

          swapped = true;
        }
      }

      // If there were no swaps then array is already sorted and there is
      // no need to proceed.
      if (!swapped) {
        return array;
      }
    }

    return array;
  }
}

module.exports = BubbleSort;
