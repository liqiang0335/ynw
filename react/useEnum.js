import { useEffect, useState } from "react";
import http from "@script/http";
import byId from "ynw/array/byId";
const cache = {};
/**
 * ----------------------------------------
 * 通用枚举数据, 带缓存
 * @param {String} url - 接口地址
 * @param {String} [cached] - 是否使用缓存数据
 * @param {String} [id='id'] - ById的键
 * ----------------------------------------
 */
export default function useAssetsFirstType({ url, id = "id", cached = true }) {
  const [datasById, setById] = useState(cache[url]?.datasById || {});
  const [datas, setdatas] = useState(cache[url]?.datas || []);

  useEffect(() => {
    if (cached && cache[url]) {
      return;
    }
    http.get(url).then(res => {
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
