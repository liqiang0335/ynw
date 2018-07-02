const load = require("../middleware/load");
load("colors");
const fs = require("fs");
const Client = load("ssh2").Client;
const conn = new Client();

const SFTP = context => {
  const { ftpConfig, fns, ftp } = context;
  const { host, port, username, password, remotePath } = ftpConfig[ftp];
  let ready = false;
  conn
    .on("ready", () => {
      ready = true;
    })
    .connect({ host, port, username, password });

  return files => {
    if (!ready) {
      conn.sftp((err, sftp) => {
        if (err) throw err;
        upload(files);
      });
    } else {
      console.log("Not ready !!! Wait a moment".red);
    }
    return files;
  };
};

const upload = files => {
  const readStream = fs.createReadStream("C:\\Users\\Luck\\Desktop\\demo.txt");
  const writeStream = sftp.createWriteStream(`${remotePath}/demo/demo.txt`);
  writeStream.on("close", () => console.log("Upload Success".green));
  readStream.pipe(writeStream);
};

module.exports = SFTP;
