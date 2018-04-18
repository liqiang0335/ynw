const path = require("path");
const { writeTimestamp, colorLog } = require("../../utils/fn");
const log = colorLog(0);

const getDir = url => path.join(__dirname, "../../../", url);

module.exports = context => flag => {
  const { env, value, isPlain } = context;
  const { html } = value;
  if (isPlain && html) {
    writeTimestamp(getDir(html));
  }
  log(env);
};
