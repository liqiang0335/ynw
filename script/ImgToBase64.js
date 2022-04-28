/**
 * ----------------------------------------
 * 图片节点转换为base64
 * @param {HTMLElement} img
 * @param {Boolean} prefix - base64格式是否带有前缀
 * @returns {Object} {base64,width,height}
 * ----------------------------------------
 */
function ImgToBase64(img, prefix = true) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  if (prefix === false) {
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }
  return { base64: dataURL, width: img.width, height: img.height };
}

export default ImgToBase64;
