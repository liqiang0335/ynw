const Qs = require("querystring");
const axios = require("axios");

const http = axios.create({
  baseURL: "/",
  timeout: 30000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  transformRequest: params => Qs.stringify(params)
});

export default http;

/**
 * 拦截请求
 */
http.interceptors.request.use(config => {
  return config;
});

/**
 * 拦截响应
 */
http.interceptors.response.use(
  function(res) {
    const body = res.data;
    return Promise.resolve(body);
  },
  function(err) {
    if (err.code === "ECONNABORTED") {
      console.error("网络超时");
    }
    if (err.response) {
      const res = err.response;
      if (res.status == "500") {
        console.error("服务器异常");
      }
    }
    return Promise.reject(err);
  }
);
