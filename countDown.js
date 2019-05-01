export default function counterDown(callback, duration = 60) {
  return new Promise(resolve => {
    let timerId = null;
    let counter = duration;
    timerId = setInterval(() => {
      if (counter === 0) {
        clearInterval(timerId);
        timerId = null;
        counter = duration;
        resolve();
        return;
      }
      callback(counter);
      counter--;
    }, 1000);
  });
}
