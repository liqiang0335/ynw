const path = require("path");
const Client = require("ssh2-sftp-client");
const chalk = require("chalk");
const log = console.log;

const config = {
  host: "101.201.41.116",
  port: "22",
  username: "root",
  password: "5]5F(UXkp+NAQX$Pq1gqckPQ",
  remotePath: "/soft/tomcat7v1.0/webapps/ROOT/"
};

const sftp = new Client();
const connect = () => {
  return sftp
    .connect(config)
    .then(() => sftp.list(config.remotePath))
    .then(() => log(chalk.green(">>> 服务器连接成功")))
    .catch(err => log(chalk.red(">>> 服务器连接失败", err)));
};

/**
 * 上传文件
 */
const upload = file => {
  const { localPath, remotePath, fileName } = file;
  sftp
    .put(localPath, remotePath)
    .then(() => {
      log(chalk.blue(`>>> ${fileName} 上传完成`));
    })
    .catch(err => {
      console.log("---------------------------");
      log(chalk.red(`>>> ${fileName} 上传出错`));
      log(chalk.red(err));
    });
};
