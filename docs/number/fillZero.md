# fillZero

> 补全小数

```js
import fillZero from "ynw/number/fillZero";

fillZero(1.2, 2); // 1.20
```

## Source

```js
import padEnd from "lodash/padEnd";
/**
 * 补全小数(用0填充)
 * @param {Number, String} num - 数字或字符
 * @param {Number} length - 补全长度
 * @return {String}
 */
export default function fillZero(num, length) {
  if (!/\./.test(num)) {
    const len = Array.from({ length }, () => 0).join("");
    return `${num}.${len}`;
  }
  return `${num}`.replace(/\.\d+/, match => {
    return padEnd(match, length + 1, "0");
  });
}
```
