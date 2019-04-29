/**
 * 读取URL中的参数值
 * @param {String} name 名称
 * @return {String}
 */
export default function getParam(name) {
  var m = window.location.search.match(
    new RegExp("(\\?|&)" + name + "=([^&]*)(&|$)")
  );
  return !m ? "" : decodeURIComponent(m[2]);
}
