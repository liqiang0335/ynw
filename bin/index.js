#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const fns = require("./util/fns");
const commands = fns.getParams(process.argv);
const cwd = process.cwd();
const context = { fns, cwd, env: "dev", ...commands };

const shortMap = {
  v: "version",
  b: "build",
  e: "env",
  i: "init"
};

(async function() {
  const folder = path.join(__dirname, "./command");
  const docs = await fns.readdir(folder).catch(err => console.log(err));
  const files = docs.map(doc => doc.replace(/\.[a-z]+$/, ""));
  Object.keys(commands).forEach(key => {
    if (shortMap[key]) {
      key = shortMap[key];
    }
    if (files.indexOf(key) < 0) return;
    const command = require(`./command/${key}`);
    command(context);
  });
})();
