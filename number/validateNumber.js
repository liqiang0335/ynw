/**
 * 是不是有效数字
 */
module.exports = validateNumber = n =>
  !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
