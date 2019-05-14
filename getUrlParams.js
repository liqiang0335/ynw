export default function getUrlParams(href = window.location.search) {
  return (encodeURI(href).match(/([\w_-]+)=([^&]+)/gi) || [])
    .map(item => {
      const arr = item.split("=");
      return { [arr[0]]: decodeURI(arr[1]) };
    })
    .reduce((prev, cur) => ({ ...prev, ...cur }), {});
}