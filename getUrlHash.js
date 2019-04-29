/**
 * @description 读取URL中的HASH值
 * @param {String} name 名称
 *
 * @return {String}
 */
export default function getURLHash(name) {
  var m = window.location.hash.match(
    new RegExp("(#|&)" + name + "=([^&]*)(&|$)")
  );
  return !m ? "" : decodeURIComponent(m[2]);
}
