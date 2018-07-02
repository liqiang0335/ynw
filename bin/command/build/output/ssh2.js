const load = require("../middleware/load");
load("colors");
const fs = require("fs");
const Client = load("ssh2").Client;
const conn = new Client();

const SFTP = context => {
  const { ftpConfig, fns, ftp } = context;
  const { host, port, username, password, remotePath } = ftpConfig[ftp];
  let sftp;
  let ready = false;

  //连接服务器
  conn.connect({ host, port, username, password }).on("ready", function() {
    conn.sftp((err, _sftp) => {
      if (err) throw err;
      sftp = _sftp;
      ready = true;
    });
  });

  const upload = async file => {
    const readStream = fs.createReadStream(file);
    const writeStream = sftp.createWriteStream(`${remotePath}/demo/demo.txt`);
    writeStream.on("close", () =>
      console.log(`[ ${file} ] Upload Success`.green)
    );
    readStream.pipe(writeStream);
  };

  return files => {
    if (ready) {
      upload(files);
    } else {
      console.log("Not ready !!! Wait a moment".red);
    }
    return files;
  };
};

module.exports = SFTP;
