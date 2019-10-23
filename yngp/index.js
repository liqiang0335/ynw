import axios from "axios";

const ios = /iphone/i.test(navigator.userAgent);
const href = window.location.href;
const isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

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

/**
 * @param {String} key - 方法名称
 * @param {Any, Optional} defaultValue - 默认
 */
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
 * 获取token
 * @param {Number} phone
 * @param {String} password
 */
export function getToken(params) {
  const SIGN = "2FwzjCrYeXB,CkYbISJrtwO3WZPkeSbDbFLKEWURzRc9kwKeSVQETA__";
  try {
    return OCObject.getToken(SIGN);
  } catch (e) {
    return webGetToken(params);
  }
}

/**
 * 接口获取token
 * @param {Number} phone
 * @param {String} password
 */
export async function webGetToken(option) {
  const YZT = getYZT();
  const url = `${YZT}/app/appPasswordLogin.htm`;
  const params = {
    phoneNumber: option.phone,
    password: option.password,
    os: 1,
    ...option
  };
  const res = await axios.get(url, params);
  return res.data;
}

/**
 * 跳转app登录
 */
export async function appLogin() {
  const token = await getToken();
  if (!token) {
    callApp("appLogin");
  }
}

/**
 * app的H5跳H5方法
 * @param {String} address - 完成的URL(不能带有#好,自己处理)
 * @param {Object} ops
 */
export function pageToPage(address, ops) {
  //&hiddenNav=1&isBlackNav=1
  /**arrow 0黑色返回键,1白色返回键,2去掉返回键  */
  // let arrowColor = ops.arrow ? "" : "&isBlackNav=1";
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
  console.log("=jump=", jump);
  window.location.href = jump;
}

/**
 * 获取极光推送id
 */
export function getPushId() {
  callApp("getPushId");
}

/**
 * 原生返回方法
 */
export function goBack() {
  callApp("goBack");
}

/**
 * 分享
 */
export function appShare(ops) {
  // type 0 弹出面板 1微信 2朋友圈
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
    if (isiOS) {
      return OCObject.shareDict(params);
    } else {
      return OCObject.shareDict(JSON.stringify(params));
    }
  } catch (e) {}
}

/**
 * 获取版本号
 */
export function appVersion(init = "2.4.3") {
  callApp("appVersion", init);
}

/**
 * 放大图片
 */
export function zoomImg(src) {
  try {
    isiOS ? OCObject.zoomImg(src) : OCObject.passValue(src);
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
 * 比较版本号大小
 * @param {String} newVal - 新的版本号
 * @param {String} oldVal - 老的版本号
 *
 * @return {Boolean}
 */
export function isNewVersion(newVal, oldVal) {
  return true;
}

/**
 * 安卓返回状态栏高度
 */
export function statusBarHeight() {
  return !isiOS ? callApp("statusBarHeight") : "";
}

/**
 * 获取渠道
 * 生成订单时使用
 */
export function getChannel() {
  callApp("getChannel", "ali");
}

function getYZT() {
  if (/account.zx093.cn/.test(href)) {
    return "http://account.zx093.cn/yncjsso_server/";
  }

  if (/41.116/.test(href)) {
    return "http://101.201.41.116/";
  }

  if (/60.205.243.97/.test(href)) {
    return "http://60.205.243.97:8088/yncjsso_server/";
  }
}
