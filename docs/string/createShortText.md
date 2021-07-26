# createShortText

> 短文本

```js
/**
 * @param {String} str - 文本
 * @param {Number} length - 长度
 * @param {Number} suffix - 结尾, 默认..
 * @return {String}
 */
export default function createShortText(str, length, suffix = "..") {
  const value = String(str);
  const len = value.length;
  if (len >= length) {
    return value.substring(0, length) + suffix;
  }
  return value;
}
```
