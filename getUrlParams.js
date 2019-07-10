const params = {};
encodeURI(location.search).replace(
  /([^?&=]+)=([^&]+)/g,
  (_, k, v) => (params[k] = decodeURI(v))
);
export default params;
