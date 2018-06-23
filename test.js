const o = {
  a: 1
};

const trap_o = trap(o);

trap_o.b = 2;
console.log(yntrap_o);

function trap(obj) {
  return new Proxy(obj, {
    set(target, key, value) {
      console.log("----");
      return Reflect.set(target, key, value);
    }
  });
}
