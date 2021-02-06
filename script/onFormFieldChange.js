/**
   @demo
   // 1.导入
   import onFormFieldChange from "@script/onFormFieldChange";
   // 2.创建方法
   const onFieldsChange = onFormFieldChange("type", value => {
    console.log(value);
  });
  // 3.绑定到 Form
  <Form onFieldsChange={onFieldsChange}>...</Form>
*/
/**
 * Form表单字段更改
 * @param {String} key
 * @param {Function} callback
 * @return Function
 */
const onFieldChange = (key, callback) => changedFields => {
  if (changedFields.length > 0) {
    const field = changedFields[0];
    if (field.name.includes(key)) {
      const value = field.value;
      callback(value);
    }
  }
};

export default onFieldChange;
