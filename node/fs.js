const fs = require("fs");
const util = require("util");
const exists = util.promisify(fs.exists);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const readdir = util.promisify(fs.readdir);

module.exports = {
  exists,
  readFile,
  writeFile,
  readdir
};
