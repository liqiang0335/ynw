import { useReducer } from "react";
import reducer from "../script/reducer";

export default function useReducerWrap(initialState = {}) {
  return useReducer(reducer, initialState);
}
