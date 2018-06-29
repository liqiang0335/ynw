const path = require("path");
const load = require("../middleware/load");
const { format } = load("date-fns");
const colors = load("colors");

const writeTimestamp = function(filePath) {
  return new Promise(resolve => {
    const before = fs.readFileSync(filePath, "utf-8");
    const t = Date.now();
    const after = before.replace(/@@.*?@@/g, `@@${t}@@`);
    fs.writeFile(filePath, after, err => {
      if (err) console.log(err);
      resolve();
    });
  });
};

let counter = 0;
const log = (context, stats) => {
  const { isDev, env } = context;
  const envText = isDev ? "开发环境" : "生产环境";
  const colors = ["green", "blue", "magenta", "cyan"];
  const bg = ["bgGreen", "bgBlue", "bgMagenta", "bgCyan"];
  const index = counter % 4;
  const time = format(new Date(), "HH:mm:ss");
  console.log(` ${envText} `[bg[index]], `>>> ${time}`[colors[index]]);
  console.log(`---------------------------------------------`);
  counter++;
};

module.exports = context => files => {
  log(context);
  return files;
};
