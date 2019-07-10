const params = {};
location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (params[k] = v));
export default params;
