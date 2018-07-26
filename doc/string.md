# String

## toCDB

```js
//全角字符转换为半角字符
toCDB("１２３"); //123
```

## escapeHTML

```js
import escapeHTML from "ynw/string/escapeHTML";
escapeHTML('<a href="#">Me & you</a>'); // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
```

## unescapeHTML

```js
import escapeHTML from "ynw/string/unescapeHTML";
unescapeHTML("&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;"); //<a href="#">Me & you</a>
```
