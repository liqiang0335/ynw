```js
import produce from "immer";
/**
 * ----------------------------------------
 * createReducer
 * @param {Object} handlers
 * @param {Object} init
 * -------------------------------------s---
 */
export default function createReducer(handlers, init) {
  return (state = init, action) => {
    const { type, payload } = action;
    const handler = handlers[type];
    if (!handler) return state;
    return produce(state, draft => {
      handler(draft, payload);
    });
  };
}
```
