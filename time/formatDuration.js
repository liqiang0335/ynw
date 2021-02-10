/**
 * ----------------------------------------
 * 时间转换
 * @param {Number} ms - 毫秒
 * ----------------------------------------
 */
export default function formatDuration(ms) {
  if (ms < 0) ms = -ms;
  return {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000,
  };
}
