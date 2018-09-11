# util

## detectBrowser

```js
//检测浏览器类型和版本
import detectBrowser from "ynw/util/detectBrowser";

detectBrowser(ua); // Chrome-67
detectBrowser(ua); // IE-10
detectBrowser(ua); // MSIE-8
```

## color

```js
// 颜色转换
import { hexToRGB, RGBToHex, randomColor, extendHex } from "ynw/util/color";

hexToRGB("#27ae60ff"); // 'rgba(39, 174, 96, 255)'
RGBToHex(255, 165, 1); // 'ffa501'

//随机颜色
randomColor(); //"#e34155"

//补全颜色格式
extendHex("#03f"); // '#0033ff'
extendHex("05a"); // '#0055aa'
```

## prettyBytes

```js
//可读的文件大小
import prettyBytes from "ynw/util/prettyBytes";

prettyBytes(1000); // "1 KB"

//第二个参数为数字的位数
prettyBytes(-27145424323.5821, 5); // "-27.145 GB"

//第三个参数为单位之间是否有空格
prettyBytes(123456789, 3, false); // "123MB"
```

## 转换为中文大写数字

```js
import chineseNumber from "ynw/util/chineseNumber";
chineseNumber(123); //壹佰贰拾叁
```
