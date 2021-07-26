```js
import { useEffect, useState } from "react";

const useObservable = (source, initialValue) => {
  const [value, update] = useState(initialValue);

  useEffect(() => {
    const isFunction = typeof source == "function";
    const source$ = isFunction ? source() : source;
    const s = source$.subscribe(update);
    return () => s.unsubscribe();
  }, [source]);

  return value;
};

export default useObservable;
```
