// npm add inquirer@8
const inquirer = require("inquirer");

async function main(callback, message = "确认操作") {
  const questions = [
    {
      name: "ok",
      type: "list",
      message: message,
      choices: ["确定", "取消"],
      filter: (val) => {
        return val === "确定" ? true : false;
      },
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    if (answers.ok) {
      callback();
    } else {
      console.log("取消操作");
    }
  });
}

module.exports = main;
