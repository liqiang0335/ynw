const fs = require("fs");
const path = require("path");
const colors = require("colors");
const util = require("util");

const getInjection = context => {
  const host = "http://localhost:9999/";
  return `<script src="${host}webpack-dev-server.js"></script>
  <script src="${host}dist/chunk.modules.js"></script>
  <script src="${host}dist/${context.fileName}.bundle.js"></script>`;
};

const getTemplate = context =>
  new Promise(resolve => {
    const defaultValue = path.join(__dirname, "./template.html");
    const detectPath = context.projectPath + "/index.html";
    fs.exists(detectPath, result => {
      const template = result ? detectPath : defaultValue;
      resolve(template);
    });
  });

async function asyncWriteHtmlFile(context) {
  const { hot, projectPath, fileName } = context;
  if (!hot) return;
  const template = await getTemplate(context);
  const filePath = path.join(projectPath + "/index.html");
  fs.readFile(template, "utf-8", (err, docs) => {
    if (docs.match(/webpack-dev-server/)) return;
    const target = docs.replace(/<\/body>/, getInjection(context) + "</body>");
    fs.writeFile(filePath, target, "utf-8", err => {
      if (err) console.log(err);
    });
  });
}

module.exports = context => option => {
  asyncWriteHtmlFile(context);
  return option;
};
