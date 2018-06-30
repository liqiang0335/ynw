const Client = load("ssh2-sftp-client");
const load = require("../middleware/load");
load("colors");

const sftp = new Client();

const SFTP = context => {
  const { ftpConfig, fns, ftp } = context;
  const option = ftpConfig[ftp];
  const { remotePath } = option;
  const uploadOption = fns.extend(
    { host: "", port: "", username: "", password: "" },
    option
  );

  const connect = sftp
    .connect(uploadOption)
    .then(() => console.log(`>>> ${ftp}服务器连接成功`.bgGreen))
    .catch(err => console.log(`出现错误: ${err}`.bgRed));

  return files => {
    // upload
    connect
      .then(() => {
        const upload = sftp
          .put("/Users/liqiang/Desktop/test/test.js", "/ftp/test.js")
          .then(result => {
            console.log("上传成功");
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log("not upload"));

    // next pipe
    return files;
  };
};

module.exports = SFTP;
