# getExpireHuman

> 可读的剩余/过期时间

```js
/**
 * ----------------------------------------
 * @param {Number} timestamp - 时间戳
 * @return {Object} {desc, isOut, dayStr}
 * ----------------------------------------
 */
getExpireHuman(timestamp);
```

## Usage

```js
import { getExpireHuman } from "ynw/script/getHumanTimes";
getExpireHuman(1627285004383); // {desc: '过期2天', isOut:true, dayStr:"2021-07-26"}
```
