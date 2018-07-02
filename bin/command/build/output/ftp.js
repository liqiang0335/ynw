const load = require("../middleware/load");
const path = require("path");
load("colors");

const SFTP = context => {
  let ready = false;
  const { ftpConfig, fns, ftp, distPath, cwd } = context;
  if (!(ftp && ftpConfig)) {
    return;
  }

  const {
    remotePath,
    host,
    port,
    username,
    password,
    debounceTime
  } = ftpConfig[ftp];

  const remoteDistPath = remotePath + distPath;

  const Client = load("ssh2-sftp-client");
  const sftp = new Client();

  const connect = sftp
    .connect({ host, port, username, password })
    .then(() => {
      console.log(`>>> ${ftp} connect success`.bgGreen);
      ready = true;
      sftp.mkdir(remoteDistPath, true);
    })
    .catch(err => console.log(`error: ${err}`.bgRed));

  const upload = file => {
    console.log(`upload...`);
    const local = path.join(cwd, distPath, file).replace(/\\+/g, "\\\\");
    const remote = path.join(remoteDistPath, file).replace(/[\\\/]+/g, "/");
    return sftp
      .fastPut(local, remote)
      .then(() => console.log(`${file}  -->  success`.green))
      .catch(err => console.log(`${file}  --> error`.red, err));
  };

  let lock = false; //锁
  const interval = Math.max(3000, debounceTime); //最小间隔

  return files => {
    if (ready && !lock) {
      lock = true;
      setTimeout(async () => {
        for (var i = 0; i < files.length; i++) {
          const item = files[i];
          await upload(item);
        }
        lock = false;
      }, interval);
    }
    return files;
  };
};

module.exports = SFTP;
