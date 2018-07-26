# Object

## bindAll

```js
// bind(obj, ...fns)
//让对象的 this 指向对象本身
import bindAll from "ynw/object/bindAll";

const view = {
  label: "docs",
  click() {
    console.log("clicked " + this.label);
  }
};

bindAll(view, "click");
btn.on("click", view.click); // 'clicked docs'
```

## deepClone

```js
//深拷贝
import deepClone from "ynw/object/deepClone";

const a = { foo: "bar", obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
```

## extend

```js
//只从目标对象中合并源对象中有的值
import extend from "ynw/object/extend";

const a = { x: 1 };
const b = { x: 2, y: 3 };
extend(a, b); // {x:2}
```

## get

```js
//用路径的方式从对象中取值
//类似于lodash中的get函数
import get from "ynw/object/get";

const obj = {
  selector: { to: { val: "val to select" } },
  target: [1, 2, { a: "test" }]
};
get(obj, "selector.to.val", "target[2].a"); // ['val to select', 'test']
```

## invertKeyValues

```js
//反转键值对
import invertKeyValues from "ynw/object/invertKeyValues";

invertKeyValues({ a: 1, b: 2, c: 1 }); // { 1: [ 'a', 'c' ], 2: [ 'b' ] }
invertKeyValues({ a: 1, b: 2, c: 1 }, value => "group" + value); // { group1: [ 'a', 'c' ], group2: [ 'b' ] }
```

## nest

```js
//链表结构转换为树形结构
import nest from "ynw/object/nest";

const comments = [
  { id: 1, pid: null },
  { id: 2, pid: 1 },
  { id: 3, pid: 1 },
  { id: 4, pid: 2 },
  { id: 5, pid: 4 }
];
const nestedComments = nest(comments, "pid"); // [{ id: 1, pid: null, children: [...] }]
```

## pick

```js
import pick from "ynw/object/pick";

pick({ a: 1, b: "2", c: 3 }, ["a", "c"]); // { 'a': 1, 'c': 3 }
```

## pickBy

```js
import pickBy from "ynw/object/pickBy";

pickBy({ a: 1, b: "2", c: 3 }, x => typeof x === "number"); // { 'a': 1, 'c': 3 }
```

## renameKeys

```js
import renameKeys from "ynw/object/renameKeys";

const obj = { name: "Bobo", job: "Front-End Master", shoeSize: 100 };
renameKeys({ name: "firstName", job: "passion" }, obj); // { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
```
