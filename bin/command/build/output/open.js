const { exec } = require("child_process");
let opened = false;

/**
 * open chrome
 *
 */
module.exports = context => {
  const { hot, port } = context;
  if (opened || !hot) return;
  const path = `http://localhost:${port}/dev.html`;
  const cmd =
    process.platform == "win32"
      ? `start chrome ${path}`
      : `open chrome ${path}`;

  exec(cmd, err => {
    if (err) console.log(err);
    opened = true;
  });
};
