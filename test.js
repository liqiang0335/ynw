const onset = require("./proxy/onSet");

const o = {
  a: 1
};

onset(o, next => {
  console.log("---");
  next();
});

o.b = 2;
