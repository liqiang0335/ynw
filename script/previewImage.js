import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
/**
 * 预览图片
 * @param {String} src - 预览的图片
 * @param {Object} [option] - viewerjs选项
 */
export default function previewImage(src, option) {
  let img = new Image();
  img.src = src;
  const viewer = new Viewer(img, {
    inline: false,
    container: document.body,
    tooltip: false,
    button: false,
    title: false,
    toolbar: false,
    navbar: false,
    keyboard: false,
    fullscreen: true,
    viewed: () => viewer.zoomTo(1),
    hidden: () => viewer.destroy(),
    ...option,
  });

  viewer.show();
}
