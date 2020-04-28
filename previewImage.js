import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";

/**
 * @param {String} src - 预览的图片
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
    ...option
  });

  viewer.show();
}
