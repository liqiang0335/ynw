const path = require("path");
const { format } = require("date-fns");

const getDir = url => path.join(__dirname, "../../../", url);

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

const colorLog = (counter = 0) => content => {
  const colors = ["green", "yellow", "blue", "magenta", "cyan", "grey"];
  const index = counter % 5;
  const time = format(new Date(), "HH:mm:ss");
  console.log(`>>>${time} ---> ${content}`[colors[index]]);
  counter++;
};

module.exports = context => flag => {
  const log = colorLog(0);
  const { env, value, isPlain } = context;
  const { html } = value;
  if (isPlain && html) {
    writeTimestamp(getDir(html));
  }
  log(env);
};
