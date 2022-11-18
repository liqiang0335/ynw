/**
 * ----------------------------------------
 * 过滤空值参数
 * ----------------------------------------
 */
export default function removeNullProps(params) {
  const obj = {};

  for (let key in params) {
    const value = params[key];

    if ([null, undefined, ""].includes(value)) {
      continue;
    }
    if (Array.isArray(value) && value.length < 1) {
      continue;
    }

    obj[key] = value;
  }

  return obj;
}
