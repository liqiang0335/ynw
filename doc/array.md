## bifurcateBy

> 根据函数返回的布尔值对函数进行分组

```js
bifurcateBy(["beep", "boop", "foo", "bar"], x => x[0] === "b");
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```

## chunk

> 将数组进行分组

```js
chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
```

## countBy

> 统计

```js
countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
```

## deepFlatten

> 递归展开数组

```js
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```

## difference

> 两个数组中的非交叉元素

```js
difference([1, 2, 3], [1, 2, 4]); // [3]
```
