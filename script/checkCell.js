/**
 * ----------------------------------------
 * 对导入的单元格字段进行检查
 * ----------------------------------------
 */
const checkCell = (index, item, key, checkFunction) => {
  return new Promise((resolve, reject) => {
    const value = item[key];

    const ok = checkFunction ? checkFunction(value) : ![undefined, null, ""].includes(value);

    if (ok) {
      resolve(value);
    } else {
      alert(`第${index + 2}行 : "${key}"格式有误，请修改。`);
      reject();
    }
  });
};

export default checkCell;
