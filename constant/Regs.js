const regs = {
  phone: /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,

  // 密码包含数字、大小写字母和特殊字符
  strong_password: /^(?![A-Za-z]+$)(?![A-Z\d]+$)(?![A-Z\W]+$)(?![a-z\d]+$)(?![a-z\W]+$)(?![\d\W]+$)\S{8,20}$/,

  chinese: /^[\u4e00-\u9fa5]+$/,

  email: /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,

  //  中文+字母_+数字
  account_name: /^[a-zA-Z0-9\u4e00-\u9fa5]+$/,
};

export default regs;
