const path = require("path");
const fs = require("fs");

module.exports = context => {
  const { brc, cwd } = context;
  if (!brc) return;
  const name = ".babelrc";
  const url = path.join(__dirname, `./init/${brc}/${name}`);
  const exiest = fs.existsSync(url);
  if (!exiest) return;
  const target = path.join(cwd, name);
  fs.createReadStream(url).pipe(fs.createWriteStream(target));
};

/////

const detectFramework = content => {
  const regex = name => new RegExp(`import\\w+from\\s+"${name}"`);
  const isReact = !!content.match(regex("react"));
  const isVue = !!content.match(regex("vue"));

  const target = isReact ? "react" : "vue";
  const bablerc = path.join(__dirname, `../../init/${target}/.babelrc`);
  return {
    target,
    bablerc: fs.readFileSync(bablerc, "utf-8")
  };
};

const getBabelrc = context => {
  const { absolutePath } = context;
  const entry = fs.readFileSync(absolutePath + ".js", "utf-8");
  return detectFramework(entry);
};
