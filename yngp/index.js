const ios = /iphone/i.test(navigator.userAgent);
const href = window.location.href;

/**
 * 直播室
 * @param {Number} id -直播室ID
 */
export const gotoLive = id => {
  window.location.href = `yncj://LiveDetail?teacherID=${id}&initIndex=0`;
};

/**
 * 浏览器
 * @param {String} url - 网址
 */
export const gotoWeb = url => {
  window.location.href = `yncj://WebUrl?url=%22${url}%22&isBlackNav=1`;
};

/**
 * 跳转到股票行情
 * @param {Number} code - 股票代码
 * @param {String} market - 市场代码: 上海=XSHG 深圳=XSHE
 * @param {String} name - 股票名称
 */
export const gotoStock = (code, market, name) => {
  const stockCode = `${code}.${market}`;
  const stockName = name;
  if (ios) {
    window.location.href = `yncj://individualShare?stockCode=${stockCode}&stockName=${stockName}`;
  } else {
    OCObject.timesharing(JSON.stringify({ stockCode, stockName }));
  }
};

function callApp(key, defaultValue) {
  try {
    OCObject[key]();
  } catch (e) {
    return defaultValue || "";
  }
}

/**
 * 是否是异形屏幕
 */
export function isBangScreen() {
  callApp("isBangScreen", 0);
}

/**
 * 打开 App 登录
 */
export async function appLogin() {
  const token = await getToken();
  if (!token) {
    callApp("appLogin");
  }
}

/**
 * app的 H5跳 H5 方法
 * @param {String} address - 完成的 URL (不能带有#好,自己处理)
 * @param {Object} ops
 *   @param {Number} arrow -  0=黑色返回键 1=白色返回键 2=没有返回键
 *   @param {Number} arrowColor -  0=黑色返回键 1=白色返回键 2=没有返回键
 */
export function openPage(address, ops) {
  let arrowColor;
  switch (ops.arrow) {
    case 0:
      arrowColor = "&isBlackNav=1";
      break;
    case 1:
      arrowColor = "";
      break;
    case 2:
      arrowColor = "&hiddenBack=1&isBlackNav=1";
      break;
    default:
      arrowColor = "&isBlackNav=1";
      break;
  }
  let navBar = ops.navBar ? "" : "&hiddenNav=1";
  let jump = `yncj://WebUrl?url=\"${address}\"${navBar}${arrowColor}`;
  window.location.href = jump;
}

/**
 * 返回
 */
export function goBack() {
  callApp("goBack");
}

/**
 * 分享
 * @param {Object} ops: 参数
 * @param {Number} type: 0=面板 1=微信 2=朋友圈
 */
export function callAppShare(ops) {
  let params = {
    url: "",
    title: "",
    content: "",
    icon: "",
    viewArr: "",
    UMSocialPlatformType: "",
    ...ops
  };
  try {
    if (ios) {
      return OCObject.shareDict(params);
    } else {
      return OCObject.shareDict(JSON.stringify(params));
    }
  } catch (e) {}
}

/**
 * 获取版本号
 */
export function getAppVersion(init = "2.4.3") {
  callApp("appVersion", init);
}

/**
 * 放大图片
 */
export function zoomImg(src) {
  try {
    ios ? OCObject.zoomImg(src) : OCObject.passValue(src);
  } catch (e) {
    //
  }
}

/**
 * ios是否开启相机权限
 * 安卓自己判断是否有权限
 */
export function cameraIsOpen() {
  callApp("cameraIsOpen", 1);
}

/**ios是否开启相册权限 安卓自己判断是否有权限*/
export function photoIsOpen() {
  callApp("photoIsOpen", 1);
}

/**
 * 安卓调取相册相机
 */
export function getAndroidPhoto() {
  callApp("getPhoto");
}

/**
 * 安卓返回状态栏高度
 */
export function statusBarHeight() {
  return !ios ? callApp("statusBarHeight") : "";
}
