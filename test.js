const CountingSort = require("./algorithms/sort/CountingSort");
const countingSort = new CountingSort();

const source = [1, 4, 3, 2, 6, 4];
const result = countingSort.sort(source);
console.log(result);
