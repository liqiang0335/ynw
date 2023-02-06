const regs = {
  phone: /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,

  // 密码包含数字、大小写字母和特殊字符
  password_strong: /^(?![A-Za-z]+$)(?![A-Z\d]+$)(?![A-Z\W]+$)(?![a-z\d]+$)(?![a-z\W]+$)(?![\d\W]+$)\S{8,20}$/,

  // 简单密码
  password_simple: /^\w{6,20}$/,

  // 中文
  chinese: /^[\u4e00-\u9fa5]+$/,

  // 邮箱
  email: /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,

  // 中文+字母_+数字
  account_name: /^[a-zA-Z0-9\u4e00-\u9fa5]+$/,

  // IP 地址
  ip: /^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$/,
};

export default regs;
