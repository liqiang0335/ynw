const fs = require("fs");
const path = require("path");
const colors = require("colors");
const util = require("util");

async function asyncWriteHtmlFile({ params }) {
  const { hot, public, projectPath, htmlName, fileName } = params;
  if (!hot) return;

  const template = path.join(__dirname, "../output/template.html");
  const filePath = path.join(projectPath + "/" + htmlName);
  const templateContent = fs.readFile(template, "utf-8", (err, docs) => {
    const target = docs.replace(/\{\{(.+?)\}\}/g, (match, key) => {
      if (err) {
        console.log(err);
        return;
      }
      key = key.trim();
      return params[key] || key;
    });
    fs.writeFile(filePath, target, "utf-8", err => {
      if (err) console.log(err);
    });
  });
}

module.exports = context => option => {
  asyncWriteHtmlFile(context);
  return option;
};
