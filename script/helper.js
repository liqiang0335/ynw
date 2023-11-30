/**
 * Reducer
 * @param {*} state
 * @param {*} action
 */
export const reducer = (state, action) => {
  return { ...state, ...action };
};
