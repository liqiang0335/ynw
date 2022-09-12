const iPhone = /iphone/i.test(navigator.userAgent);
const prefix = "data:image/jpg;base64,";

export default function wxChooseImage(count = 1) {
  return new Promise(resolve => {
    wx.chooseImage({
      count: count,
      sizeType: ["compressed"],
      sourceType: ["album", "camera"],
      success: function (res) {
        const localId = res.localIds[0];
        wx.getLocalImgData({
          localId: localId,
          success: function (res) {
            let base64 = iPhone ? res.localData : prefix + res.localData;
            resolve(base64);
          },
        });
      },
    });
  });
}
