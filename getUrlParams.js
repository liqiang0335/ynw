/**
 * 通过函数获取参数
 */
export default function getUrlParams(href = window.location.search) {
  const params = {};
  encodeURI(href).replace(
    /([^?&=]+)=([^&]+)/g,
    (_, k, v) => (params[k] = decodeURI(v))
  );
  return params;
}
