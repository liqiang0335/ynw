const getURLParams = url => {
  const res = (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );
  for (var key in res) {
    res[key] = res[key].replace(/#.+$/, "");
  }
  return res;
};

const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);

const URLJoin = (...args) =>
  args
    .join("/")
    .replace(/[\/]+/g, "/")
    .replace(/^(.+):\//, "$1://")
    .replace(/^file:/, "file:/")
    .replace(/\/(\?|&|#[^!])/g, "$1")
    .replace(/\?/g, "&")
    .replace("&", "?");

module.exports = { getURLParams, isAbsoluteURL, URLJoin };
