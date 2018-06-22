const load = require("../load");
const fs = require("fs");
const path = require("path");
const util = require("util");
const static = "/dev.html";
let done = false;

const getInjection = context => {
  const { extractCSS, splitModules, fileName } = context;
  const host = "http://localhost:9999";
  const result = { script: "", link: "" };
  result.script += `<script src="${host}/webpack-dev-server.js"></script>`;
  result.script += `<script src="${host}/dist/${fileName}.bundle.js"></script>`;
  if (splitModules) {
    result.script += `<script src="${host}/dist/${fileName}.chunk.libs.js"></script>`;
    result.link += `<link rel="stylesheet" href="${host}/dist/${fileName}.libs.css"/>`;
  }
  if (extractCSS) {
    result.link += `<link rel="stylesheet" href="${host}/dist/${fileName}.bundle.css"/>`;
  }
  return result;
};

const getTemplate = context =>
  new Promise(resolve => {
    const defaultValue = path.join(__dirname, "./template.html");
    const detectPath = context.projectPath + static;
    fs.exists(detectPath, result => {
      const template = result ? detectPath : defaultValue;
      resolve(template);
    });
  });

async function asyncWriteHtmlFile(context) {
  const { projectPath, fileName } = context;
  const template = await getTemplate(context);
  const filePath = path.join(projectPath + static);
  fs.readFile(template, "utf-8", (err, docs) => {
    if (docs.match(/webpack-dev-server/)) return;
    const injection = getInjection(context);
    //append reference
    const target = docs
      .replace(/<\/body>/, injection.script + "</body>")
      .replace(/<\/title>/, "</title>" + injection.link);
    fs.writeFile(filePath, target, "utf-8", err => {
      done = true;
      if (err) console.log(err);
    });
  });
}

module.exports = context => option => {
  if (done) return;
  if (context.hot) {
    asyncWriteHtmlFile(context);
  }
  return option;
};
