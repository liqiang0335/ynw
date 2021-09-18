# useEnum

> 通用枚举数据, 自带缓存(只请求一次)

```js
/**
 * ----------------------------------------
 * 通用枚举数据, 带缓存
 * @param {String} url - 接口地址
 * @param {Boolean} [cached=true] - 是否使用缓存: 如果是false,使用组件时会请求一次数据
 * @param {Function} [handler=null] - 如果不是数组时:需要处理返回数据
 * @param {String} [id='id/_id'] - ById的键
 * ----------------------------------------
 */
import useEnum from "@hook/useEnum";

export default function useProType() {
  // 数据格式: { datas, datasById }
  return useEnum({ url: "/api/pro/type" });
}
```
