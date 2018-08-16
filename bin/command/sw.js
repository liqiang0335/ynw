module.exports = context => {
  const { sw, cwd, fns } = context;
  if (!sw) return;
  const load = fns.load;

  load("colors");
  const download = load("download-git-repo");
  const ora = load("ora");

  const spinner = ora("loading...").start();
  download(`liqiang0335/template-sw`, cwd, err => {
    spinner.stop();
    if (err) return console.log(err);
    console.log("OK".green);
  });
};
