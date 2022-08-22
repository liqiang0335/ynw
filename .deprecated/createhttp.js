/* eslint-disable no-console */
import axios from "axios";
import Qs from "querystring";
import { isFunction } from "lodash-es";
/**
 * 网络请求
 * @param {Number, Optional} baseURL - baseURL
 * @param {String, Optional} contentType - Content-Type
 * @param {Function, Optional} onRequest(config) - 请求回调
 * @param {Function, Optional} onSuccess(body) - 成功回调
 * @param {Function, Optional} onError(status) - 错误回调
 * @param {Function, Optional} onTimeout - 超时回调
 */
export default function http(options) {
  const _options = Object.assign(
    {
      baseURL: "/",
      timeout: 30000,
      contentType: "form",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    },
    options
  );

  const { contentType, onRequest, onSuccess, onTimeout, onError } = _options;

  if (contentType === "form") {
    _options.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
    _options.transformRequest = params => Qs.stringify(params);
  }

  const http = axios.create(_options);

  http.interceptors.request.use(config => {
    if (isFunction(onRequest)) {
      config = onRequest(config);
    }
    return config;
  });

  http.interceptors.response.use(
    function (res) {
      if (isFunction(onSuccess)) {
        return onSuccess(res.data);
      }
      return res;
    },
    function (err) {
      if (err.code === "ECONNABORTED") {
        console.error("请求超时");
        if (isFunction(onTimeout)) {
          onTimeout();
        }
      }
      if (err.response) {
        if (isFunction(onError)) {
          onError(err.response.status);
        }
      }
      return Promise.reject(err);
    }
  );

  return http;
}
