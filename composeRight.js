const composeRight = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)));

export default composeRight;
