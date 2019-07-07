/**
 * 检查是否选择
 * @param {Array} selection - 选择对象
 * @param {Function} toast - 提示信息
 * @param {Boolean} single - 是否单选
 *
 * @return {Promise(Array/Object)} selection - 返回数组或者对象(single=true)
 */
const checkSelectionCurry = (selection, toast) => async (single = false) => {
  if (Array.isArray(selection)) {
    throw new Error("selection param must be Array");
  }
  const len = selection.length;
  const message = single ? "请选择一条数据" : "请选择";
  const ok = single ? len === 1 : len > 0;

  if (ok) {
    const value = single ? selection[0] : selection;
    return Promise.resolve(value);
  } else {
    toast(message);
    return Promise.reject();
  }
};

export default checkSelectionCurry;
