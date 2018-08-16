const fs = require("fs");
const path = require("path");

module.exports = context => {
  const { cwd, tree } = context;
  if (!tree) return;
  const result = getFiles(cwd);
  const content = JSON.stringify(result);
  fs.writeFileSync(cwd + "/__files__.js", content);
};

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
