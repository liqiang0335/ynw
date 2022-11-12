import Regs from "./Regs";

export const required = [{ required: true, message: "请输入必填项" }];

const rules = {
  required,
  account: [
    { pattern: /^[\u4e00-\u9fa5\w_\-]+$/, message: "账号可用汉字/字母/数字/下划线" },
    { type: "string", min: 2, max: 30, message: "账号位数为2-30位" },
  ],
  password: [
    { pattern: Regs.strong_password, message: "密码需要包含数字、大小写字母和特殊字符" },
    { type: "string", min: 6, max: 20, message: "密码位数为6-20位" },
  ],
  chineseName: [
    { message: "姓名为中文", pattern: /^[\u4E00-\u9FA5]+$/ },
    { type: "string", message: "姓名为2-10个中文字符", min: 2, max: 10 },
  ],
  phone: [{ type: "string", pattern: Regs.phone, message: "手机号格式有误" }],
};

export default rules;
