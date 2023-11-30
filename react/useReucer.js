import { useReducer } from "react";
import { reducer } from "../script/helper";

/**
 * useReducer: A hook for managing complex state
 * @param {object} initialState
 * @returns {Array} [state, dispatch]
 *
 * @example
 * const [state, dispatch] = useReducer({ count: 0 });
 */
export default function useReducerWrap(initialState = {}) {
  return useReducer(reducer, initialState);
}
