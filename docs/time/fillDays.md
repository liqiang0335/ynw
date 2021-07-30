# fillDays

> 在区间内填充日期

```js
/**
 * ----------------------------------------
 * @param {Number} count - 数量
 * @param {String/Date} [end] - 截止日期, 默认今天
 * @param {Number} [format] - 日期格式
 * ----------------------------------------
 */
```

## Example

```js
import fillDays from "ynw/time/fillDays";
fillDays({ count: 7, end: "2021.07.30" });
/*
 [
  '2021.07.24',
  '2021.07.25',
  '2021.07.26',
  '2021.07.27',
  '2021.07.28',
  '2021.07.29',
  '2021.07.30'
]
*/
```
