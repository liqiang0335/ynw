import { useEffect, useState } from "react";
import http from "@script/http";
import byId from "ynw/array/byId";
const cache = {};
/**
 * ----------------------------------------
 * 通用枚举数据, 带缓存
 * @param {String} url - 接口地址
 * @param {String} [id='id'] - ById的键
 * ----------------------------------------
 */
export default function useAssetsFirstType({ url, id = "id" }) {
  const [datasById, setById] = useState(cache[url]?.datasById || {});
  const [datas, setdatas] = useState(cache[url]?.datas || []);

  useEffect(() => {
    if (cache[url]) {
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
