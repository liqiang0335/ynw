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

const a = { x: 1, y: 2 };
const b = { x: 1, m: 4, y: 7 };
console.log(extend(a, b));
