/**
 * 内存数据缓存
 */
const store = new Map();

const set = (k, v) => store.set(k, v);
const get = k => store.get(k);
const has = k => store.has(k);
const remove = k => store.delete(k);
const removeAll = () => store.clear();
const update = (k, cb) => {
  let newVal = cb(store.get(k));
  if (newVal) {
    store.set(k, newVal);
  }
};

export default {
  set,
  get,
  has,
  remove,
  removeAll,
  update
};

///////////////////////////////////////////////////
/**
 * 配合RXJS的使用方法
 * 统一本地与服务端
 */
export const getData = key => {
  const fromLocal$ = of(Cache.get(key));
  const fromServer$ = fromPromise(
    API.getData().then(data => {
      Cache.set(key, data.list);
      return Cache.get(key);
    })
  );
  Cache.has(key) ? fromLocal$ : fromServer$;
};
