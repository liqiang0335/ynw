import produce from "immer";

export default function createReducer(handlers, init) {
  return (state = init, action) => {
    if (!Array.isArray(action)) {
      return { ...state, ...action };
    }
    const [type, payload] = action;
    const nextState = produce(state, draft => {
      const handler = handlers[type];
      if (handler) {
        const compatiable = handler(draft, payload);
        if (compatiable !== undefined) {
          return compatiable;
        }
      }
    });
    return nextState === undefined ? {} : nextState;
  };
}
