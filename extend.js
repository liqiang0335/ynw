const extend = function(source, target) {
  if (!target) {
    return source;
  }

  for (var key in source) {
    if (target[key] !== undefined) {
      source[key] = target[key];
    }
  }

  return source;
};

module.exports = extend;
