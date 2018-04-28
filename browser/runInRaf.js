/**
 *
 */
const runInRaf = (callback, autoStart = true) => {
  let running = true;
  let raf;

  const stop = f => {
    running = false;
    cancelAnimationFrame(raf);
  };
  const start = f => {
    running = true;
    run();
  };

  const run = f => {
    raf = requestAnimationFrame(f => {
      callback();
      if (running) run();
    });
  };

  if (autoStart) start();
  return { start, stop };
};

modules.exports = runInRaf;
