function counterDown(callback) {
  return new Promise(resolve => {
    let timerId = null;
    let counter = 60;
    timerId = setInterval(() => {
      if (counter === 0) {
        clearInterval(timerId);
        timerId = null;
        counter = null;
        resolve();
        return;
      }
      callback(counter);
      counter--;
    }, 1000);
  });
}

module.exports = counterDown;
