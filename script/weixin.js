const imgUrl = "http://hd.jsgaotie.com/assets/hdlogo.jpg";
/**
 * ----------------------------------------
 * 微信分享
 * @param {String} title - 分享标题
 * @param {String} desc - 分享描述
 * @param {String} [sharelink] - 分享的链接
 * @param {String} [shareImg] - 分享的图片
 * ----------------------------------------
 */
export default async function main({ title, desc, sharelink = window.location.href, shareImg = imgUrl }) {
  if (!wx) {
    throw new Error("wx未定义");
  }

  const link = encodeURIComponent(window.location.href.split("#")[0]);
  const url = `/api/ncelec/weixin/signature?url=${link}`;
  const res = await fetch(url);
  const json = await res.json();

  wx.config.appId = json.appId;

  wx.config({
    debug: false,
    appId: json.appId,
    timestamp: json.timestamp,
    nonceStr: json.nonceStr,
    signature: json.signature,
    jsApiList: [
      "updateAppMessageShareData",
      "updateTimelineShareData",
      "onMenuShareTimeline",
      "onMenuShareAppMessage",
      "getLocation",
    ],
  });

  wx.ready(function () {
    wx.updateAppMessageShareData({
      title,
      desc,
      link: sharelink,
      imgUrl: shareImg,
      success() {
        console.log("更新分享成功");
      },
    });
    wx.updateTimelineShareData({
      title: title,
      link: sharelink,
      imgUrl: shareImg,
      success: function () {
        console.log("更新朋友圈成功");
      },
    });
  });
}

wx.error(function (res) {
  console.log("微信认证错误:", res);
});

export function getLocation() {
  return new Promise((resolve, reject) => {
    wx.getLocation({
      type: "gcj02",
      success: function (res) {
        const latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        const longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        const location = [longitude, latitude];
        resolve(location);
      },
      fail: reject,
    });
  });
}
