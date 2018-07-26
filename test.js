const a = { x: 1, y: 2, z: 3 };
const { x, y, ...res } = a;

console.log({ x, y });
