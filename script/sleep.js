/**
 * @param {Number} time
 * @returns {Promise}
 */
export default function sleep(time = 300) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}
