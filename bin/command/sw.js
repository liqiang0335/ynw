module.exports = context => {
  const { sw, cwd, fns } = context;
  if (!sw) return;
  const download = fns.load("download-git-repo");
  download(`liqiang0335/template-sw`, cwd, err => {
    if (err) console.log(err);
  });
};
