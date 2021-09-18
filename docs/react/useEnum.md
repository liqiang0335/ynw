# useEnum

> 通用枚举数据, 自带缓存(只请求一次)

```js
/**
 * ----------------------------------------
 * 通用枚举数据, 带缓存
 * @param {String} url - 接口地址
 * @param {String} [id='id'] - ById的键
 * ----------------------------------------
 */
import useEnum from "@hook/useEnum";

export default function useProType() {
  const { datas, datasById } = useEnum({ url: "/api/pro/type" });
  return { datas, datasById };
}
```
