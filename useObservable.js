import { useEffect, useState } from "react";

const useObservable = (observable$, initialValue) => {
  const [value, update] = useState(initialValue);

  useEffect(() => {
    const s = observable$.subscribe(update);
    return () => s.unsubscribe();
  }, [observable$]);

  return value;
};

export default useObservable;
