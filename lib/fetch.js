//polyfill
if (!Object.entries) {
  Object.entries = function(obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
    while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}

/**
 * fetch request
 *
 * @param type
 * @param url
 * @param data
 * @param timeout
 */

export default function({ type = "get", url, data = {}, timeout = 30000 }) {
  const serialize = function(params) {
    return Object.entries(params)
      .reduce((accu, cur) => {
        return accu + "&" + cur.join("=");
      }, "")
      .replace(/^&/, "");
  };

  data = serialize(data);

  const urlWrap = type == "get" ? url + "?" + data : url;

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Accept: "application/json",
    Connection: "Keep-Alive"
  };

  var options = {
    get: {
      method: "GET",
      headers: headers,
      cache: "default",
      credentials: "include"
    },
    post: {
      method: "POST",
      headers: headers,
      credentials: "include",
      body: data
    }
  };

  // handler timeout
  const abortPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("timeout"), timeout);
  });
  const fetchPromise = window.fetch(urlWrap, options[type]);
  return Promise.race([fetchPromise, abortPromise]);
}
