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

const fileName = "ftp-test.js";
const file = path.resolve(__dirname, fileName);

let sftp = new Client();
sftp
  .connect(config)
  .then(() => sftp.list(config.remotePath))
  .then(() => log(chalk.green("服务器连接成功")))
  .catch(err => log(chalk.red("服务器连接失败", err)))
  .then(() => {
    sftp
      .put(file, config.remotePath + fileName)
      .then(() => {
        log(chalk.blue("upload done..."));
      })
      .catch(err => log(chalk.red(err)));
  });
