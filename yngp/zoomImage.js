export default function zoomImage(src) {
  try {
    /iphone/i.test(navigator.userAgent)
      ? OCObject.zoomImage(src)
      : OCObject.passValue(src);
  } catch (e) {
    console.log(">> only work in WebView...");
  }
}
