# getChineseMoneyUnit

> 转换成中文单位

```js
import getChineseMoneyUnit from "ynw/other/getChineseMoneyUnit";
getChineseMoneyUnit(20000); // 2万
```

## Source

```js
/**
 *  获取中文友好的数字单位
 * @param {Number} num
 * @return {Object} - { divide: 除数, suffix: 后缀 }
 */
export default function getChineseMoneyUnit(num) {
  // 值为 0 或者 null
  if (!num) {
    return { divide: 1, suffix: "" };
  }
  const units = [
    { threshold: 10000 * 10000 * 10000, suffix: "万亿" },
    { threshold: 10000 * 10000, suffix: "亿" },
    { threshold: 10000, suffix: "万" },
    { threshold: 0, divide: 1, suffix: "" },
  ].map(it => {
    if (!it.divide) {
      it.divide = it.threshold;
    }
    return it;
  });

  const index = units.findIndex(it => Math.abs(num) >= it.threshold);
  return units[index];
}
```
