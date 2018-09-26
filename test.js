const nextChain = (...args) => fns => {
  let cur = 0;
  const lastIndex = fns.length - 1;
  const next = () => {
    const _next = cur == lastIndex ? f => f : next;
    fns[cur++].apply(null, [...args, _next]);
  };
  next();
};

const chain = nextChain();

const f1 = next => {
  console.log("f1");
  next();
};
const f2 = next => {
  console.log("f2");
  next();
};

chain([f1, f2]);
