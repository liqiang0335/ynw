const Qs = require("querystring");
const axios = require("axios");

const request = function request(ops) {
  const option = Object.assign(
    {
      timeout: 30000,
      withCredentials: true, //是否发送coocie
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      transformRequest: function transformRequest(params) {
        return Qs.stringify(params);
      }
    },
    ops
  );
  return axios.create(option);
};

/**
 * 错误处理
 */
const attach = function attach(promise) {
  return promise.catch(function(err) {
    if (err.code === "ECONNABORTED") {
      console.log("超时");
      return { data: { status: "timeout" } };
    }
    var response = err.response;

    if (response) {
      console.log("服务器错误", response.status);
      return { data: { status: "error", data: response.status } };
    }
  });
};

module.exports = { attach, request };
