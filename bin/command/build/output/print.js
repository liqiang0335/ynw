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

const colorLog = (counter = 0) => content => {
  const colors = ["green", "yellow", "blue", "magenta", "cyan", "grey"];
  const index = counter % 5;
  const time = format(new Date(), "HH:mm:ss");
  console.log(`>>>${time} ---> ${content}`[colors[index]]);
  counter++;
};

const log = colorLog(0);

module.exports = context => flag => {
  log(context.env);
};
