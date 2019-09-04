const isiOS = /iphone/i.test(navigator.userAgent);
/**
 * 调出APP分享
 * @param {String} url
 * @param {String} title
 * @param {Number} type : 0=面板 1=微信 2=朋友圈
 * @param {String, Optional} content: 默认==title
 */
export default function share(ops) {
  // type 0 弹出面板 1微信 2朋友圈

  const { type } = ops;
  let params = {
    url: "",
    title: "",
    content: "",
    icon: "",
    viewArr: type == 0 ? "1,2" : "",
    UMSocialPlatformType: type,
    ...ops
  };
  try {
    if (isiOS) {
      return OCObject.shareDict(params);
    } else {
      return OCObject.shareDict(JSON.stringify(params));
    }
  } catch (e) {
    console.log(">> 分享错误");
  }
}
