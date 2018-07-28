const { exec } = require("child_process");
const handler = {
  darwin:
    'open -a "Google Chrome" --args --disable-web-security  --user-data-dir',
  win32: "start chrome --args --disable-web-security  --user-data-dir"
};

module.exports = context => {
  const { cros } = context;
  if (!cros) return;
  const platform = process.platform;
  const cmd = handler[platform];
  exec(cmd, err => {
    if (err) console.log(err);
    opened = true;
  });
};
