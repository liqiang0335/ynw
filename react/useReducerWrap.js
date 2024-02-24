import { useReducer } from "react";

const reducer = (state, action) => {
  return { ...state, ...action };
};

/**
 * useReducer: A hook for managing complex state
 * @param {object} initialState
 * @returns {Array} [state, dispatch]
 * @example
 * const [state, dispatch] = useReducer({ count: 0 });
 */
export default function useReducerWrap(initialState = {}) {
  return useReducer(reducer, initialState);
}
