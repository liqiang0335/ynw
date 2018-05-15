const fs = require("fs");
const path = require("path");
const colors = require("colors");
const util = require("util");

const getInjection = params => {
  const host = "http://localhost:9999/";
  return `<script src="${host}webpack-dev-server.js"></script>
  <script src="${host}dist/${params.fileName}.libs.js"></script>
  <script src="${host}dist/${params.fileName}.bundle.js"></script>`;
};

const getTemplate = params =>
  new Promise(resolve => {
    const defaultValue = path.join(__dirname, "./template.html");
    const detectPath = params.projectPath + "/index.html";
    fs.exists(detectPath, result => {
      const template = result ? detectPath : defaultValue;
      resolve(template);
    });
  });

async function asyncWriteHtmlFile({ params }) {
  const { hot, public, projectPath, htmlName, fileName } = params;
  if (!hot) return;
  const template = await getTemplate(params);
  const filePath = path.join(projectPath + "/" + htmlName);
  fs.readFile(template, "utf-8", (err, docs) => {
    if (docs.match(/webpack-dev-server/)) return;
    const target = docs.replace(/<\/body>/, getInjection(params) + "</body>");
    fs.writeFile(filePath, target, "utf-8", err => {
      if (err) console.log(err);
    });
  });
}

module.exports = context => option => {
  asyncWriteHtmlFile(context);
  return option;
};
