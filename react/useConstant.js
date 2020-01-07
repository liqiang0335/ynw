import { useRef } from "react";

/**
 * @param {Function} fn
 * @return {Any}
 */
export default function useConstant(fn) {
  const ref = useRef();
  if (!ref.current) {
    ref.current = { v: fn() };
  }
  return ref.current.v;
}
