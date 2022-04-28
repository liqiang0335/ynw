import ImgToBase64 from "./ImgToBase64";
/**
 * ----------------------------------------
 * 图片路径转换为Base64
 * @param {String} src
 * @returns {Promise} {base64,width,height}
 * ----------------------------------------
 */
function srcToBase64(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.setAttribute("crossOrigin", "anonymous");
    img.src = src;
    img.onload = function () {
      const res = ImgToBase64(img);
      resolve(res);
    };
    img.onerror = reject;
  });
}

export default srcToBase64;
