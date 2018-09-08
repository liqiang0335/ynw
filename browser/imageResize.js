/**
 * 图片压缩
 */
export default function(src, maxPixel) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onerror = reject;
    img.onload = () => {
      const sw = img.width;
      const sh = img.height;
      const isLandscape = sw / sh >= 1;
      const dw = isLandscape ? maxPixel : (maxPixel * sw) / sh;
      const dh = isLandscape ? (maxPixel * sh) / sw : maxPixel;
      const canvas = document.createElement("canvas");
      canvas.width = dw;
      canvas.height = dh;
      const context = canvas.getContext("2d");
      context.drawImage(img, 0, 0, dw, dh);
      const base64 = canvas.toDataURL();
      resolve(base64);
    };
  });
}
