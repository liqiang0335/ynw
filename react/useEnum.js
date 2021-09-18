import { useEffect, useState } from "react";
import http from "@script/http";
const cache = {};
/**
 * ----------------------------------------
 * 通用枚举数据, 带缓存
 * @param {String} url - 接口地址
 * @param {Boolean} [cached=true] - 是否使用缓存: 如果是false,使用组件时会请求一次数据
 * @param {Function} [handler=null] - 如果不是数组时:需要处理返回数据
 * @param {String} [id='id/_id'] - ById的键
 * ----------------------------------------
 */
export default function useAssetsFirstType({
  url,
  id = "id",
  cached = true,
  handler,
}) {
  const [datasById, setById] = useState(cache[url]?.datasById || {});
  const [datas, setdatas] = useState(cache[url]?.datas || []);

  useEffect(() => {
    if (cached && cache[url]) {
      return;
    }
    http.get(url).then(res => {
      if (handler) {
        res = handler(res);
      }
      const datas = res;
      const datasById = byId(res, id);
      setdatas(datas);
      setById(datasById);

      // 设置缓存
      cache[url] = { datas, datasById };
    });
  }, []);

  return { datas, datasById };
}

function byId(datas, key = "id") {
  return datas.reduce((p, c) => {
    const k = c._id || c[key];
    p[k] = c;
    return p;
  }, {});
}
