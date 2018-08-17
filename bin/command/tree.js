const fs = require("fs");
const path = require("path");
const cwd = process.cwd();

module.exports = context => {
  const { cwd, tree, module } = context;
  if (!tree) return;
  const result = getFiles(cwd);
  const prefix = module ? "module.exports = " : "";
  const content = prefix + JSON.stringify(result);
  fs.writeFileSync(cwd + "/__files__.js", content);
};

const ignores = new Set();
ignores.add("__files__.js");

function getFiles(root) {
  let result = [];
  const rootName = path.basename(root);
  const reg = new RegExp(`^.+?${rootName}`);
  read(root, { pid: 0 });

  function read(folder, inject) {
    const files = fs.readdirSync(folder);
    for (name of files) {
      const filePath = path.join(folder, name);
      const data = fs.statSync(filePath);
      //relative path
      const dirName = path
        .dirname(filePath)
        .replace(reg, "")
        .replace(/\\+/g, "/");
      const ext = path.extname(filePath);
      const baseName = path.basename(filePath, ".md");
      const id = data.ino;
      const isDir = data.isDirectory();
      const type = isDir ? "dir" : "file";
      if (!ignores.has(name)) {
        result.push({ id, name, type, dirName, ext, baseName, ...inject });
      }
      if (isDir) {
        read(filePath, { pid: id });
      }
    }
  }

  return result;
}
