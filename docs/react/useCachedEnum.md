# useCachedEnum

> 通用枚举数据, 自带缓存(只请求一次)

```js
/**
 * ----------------------------------------
 * 通用枚举数据, 带缓存
 * @param {String} url - 接口地址
 * @param {String} [id='id/_id'] - ById的键
 * @param {Function} [handler] - 处理返回数据的
 * @param {Boolean} [cached] - 是否使用缓存
 * @param {Object} [config] - axios请求配置: method, data
 * @return {Object} {datas, datasById}
 * ----------------------------------------
 */
import useCachedEnum from "@hook/useCachedEnum";

export default function useProType() {
  // 数据格式: { datas, datasById }
  return useCachedEnum({ url: "/api/pro/type" });
}
```
