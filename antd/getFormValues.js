import { message } from "antd";
/**
 * 提交表单获取表单中的值
 */
export default function getFormValues(form, callback) {
  return form
    .validateFields()
    .then(() => {
      const values = form.getFieldsValue();
      callback(values);
    })
    .catch(err => {
      const error = err.errorFields[0].errors[0];
      message.error(error);
    });
}
