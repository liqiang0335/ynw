let i = 0;
let j = 0;

const loop = function() {
  while (i < 100) {
    if (i == 50) {
      j = 99;
      return;
    }

    i += 1;
    j += 1;
  }
};

loop();

console.log(j);
