export default {
  required: [{ required: true, message: "请输入必填项" }],
  account: [
    { required: true, message: "请输入账号" },
    { pattern: /[\u4e00-\u9fa5\w_\-]+/, message: "账号可用汉字/字母/数字/下划线" },
    { min: 2, max: 30, message: "账号位数为2-30位" },
  ],
  password: [
    { required: true, message: "请输入密码" },
    { pattern: /[\w_\-!@#$]+/, message: "密码为字母/数字/下划线" },
    { min: 6, max: 20, message: "密码位数为6-20位" },
  ],
  name: [
    { required: true, message: "请输入姓名" },
    { message: "姓名为中文", pattern: /[\u4E00-\u9FA5]+/ },
    { message: "姓名为2-10个中文字符", min: 2, max: 10 },
  ],
  phone: [
    { required: true, message: "请输入手机号" },
    { message: "请输入有效手机号", len: 11 },
  ],
};
