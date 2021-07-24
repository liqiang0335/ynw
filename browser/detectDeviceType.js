/**
 * 检测是H5端还是Web端
 * @return {String} Mobile/Desktop
 */
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)
    ? "Mobile"
    : "Desktop";

export default detectDeviceType;
