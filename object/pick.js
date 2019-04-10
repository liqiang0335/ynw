var pick = function pick(obj, arr) {
  return arr.reduce(function(acc, curr) {
    return curr in obj && (acc[curr] = obj[curr]), acc;
  }, {});
};

module.exports = pick;
