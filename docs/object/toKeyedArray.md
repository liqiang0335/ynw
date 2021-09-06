# toKeyedArray

创建一个包装器来接收一个对象并为它定义一些类似数组的行为

```js
// Accessing properties and values
x.a; // 'A'
x.keys; // ['a', 'b']
x.values; // ['A', 'B']
[...x]; // ['A', 'B']
x.length; // 2

// Inserting values
x.c = "c"; // x = { a: 'A', b: 'B', c: 'c' }
x.length; // 3

// Array methods
x.forEach((v, i) => console.log(`${i}: ${v}`)); // LOGS: 'a: A', 'b: B', 'c: c'
x.map((v, i) => i + v); // ['aA', 'bB, 'cc]
x.filter((v, i) => v !== "B"); // { a: 'A', c: 'c' }
x.reduce((a, v, i) => ({ ...a, [v]: i }), {}); // { A: 'a', B: 'b', c: 'c' }
x.slice(0, 2); // ['A', 'B']
x.slice(-1); // ['c']
x.find((v, i) => v === i); // 'c'
x.findKey((v, i) => v === "B"); // 'b'
x.includes("c"); // true
x.includes("d"); // false
x.keyOf("B"); // 'b'
x.keyOf("a"); // null
x.lastKeyOf("c"); // 'c'
```
