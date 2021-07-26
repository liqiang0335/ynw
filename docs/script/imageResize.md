```js
/**
 * 使用Canvas压缩图片
 * @param {String} src - 图片路径
 * @param {Number} max - 最大像素
 * @param {Number} [qulity=0.6] - 压缩质量
 * @return {Promise, Object} - {src:Base64, width, height}
 */
export default function imageResize({ src, max, qulity = 0.6 }) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onerror = reject;
    img.onload = () => {
      const sw = img.width;
      const sh = img.height;
      const isLandscape = sw / sh >= 1;
      const dw = isLandscape ? max : (max * sw) / sh;
      const dh = isLandscape ? (max * sh) / sw : max;
      let canvas = document.createElement("canvas");
      canvas.width = dw;
      canvas.height = dh;
      const context = canvas.getContext("2d");
      context.drawImage(img, 0, 0, dw, dh);
      const dataURL = canvas.toDataURL("image/jpeg", qulity);
      resolve({ src: dataURL, width: dw, height: dh });
      canvas = null;
    };
  });
}
```
