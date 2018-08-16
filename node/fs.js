const fs = require("fs");
const path = require("path");
const util = require("util");

const exists = util.promisify(fs.exists);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

/**
 * 读取文件夹链
 */
function getFiles(root) {
  let result = [];
  read(root, { pid: 0 });

  function read(folder, inject) {
    const files = fs.readdirSync(folder);
    for (name of files) {
      const filePath = path.join(folder, name);
      const data = fs.statSync(filePath);
      const id = data.ino;
      const isDir = data.isDirectory();
      const type = isDir ? "dir" : "file";
      result.push({ id, name, type, ...inject });
      if (isDir) {
        read(filePath, { pid: id });
      }
    }
  }

  return result;
}

module.exports = {
  getFiles,
  stat,
  exists,
  readFile,
  writeFile,
  readdir
};
