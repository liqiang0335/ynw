import { useState } from "react";

export default function useData(init) {
  const [state, setstate] = useState(init);
  const update = value => {
    setstate(v => ({ ...v, ...value }));
  };
  return [state, update];
}
