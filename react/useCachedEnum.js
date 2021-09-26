import { useEffect, useState } from "react";
import http from "@script/http";
const cache = {};
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
export default function useAssetsFirstType({
  url,
  id = "id",
  cached = true,
  handler,
  config,
}) {
  const [datasById, setById] = useState(cache[url]?.datasById || {});
  const [datas, setdatas] = useState(cache[url]?.datas || []);

  useEffect(() => {
    if (cached && cache[url]) {
      return;
    }
    http({ url, method: "get", ...config }).then(res => {
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
