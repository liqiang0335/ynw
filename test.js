const util = require("util");
const fs = require("fs");
const exists = util.promisify(fs.exists);
const path = require("path");

(async function() {
  const file = path.join(__dirname, "./.babelrc");
  const flag = await exists(file);
  console.log(flag);
})();
