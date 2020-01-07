import { useState, useEffect, useCallback } from "react";
import { Subject } from "rxjs";
import useConstant from "./useConstant";

/**
 * useEventCallback
 * @param {Function} callback - 工厂函数, 生产者
 * @param {Any} initialState - 初始值
 * @return {Array} [callback, value]
 */
export default function useEventCallback(callback, initialState) {
  const [state, setState] = useState(initialState);
  const event$ = useConstant(() => new Subject());

  function eventCallback(e) {
    return event$.next(e);
  }

  const returnedCallback = useCallback(eventCallback, []);

  useEffect(() => {
    let value$ = callback(event$);
    const subscription = value$.subscribe(value => setState(value));
    // clear on unmount
    return () => {
      subscription.unsubscribe();
      event$.complete();
    };
  }, []);

  return [returnedCallback, state];
}
