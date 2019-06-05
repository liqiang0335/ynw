import { useEffect, useState } from "react";

const useKeyboardJs = combination => {
  const [state, set] = useState([false, null]);
  const [keyboardJs, setKeyboardJs] = useState(null);

  useEffect(() => {
    import("keyboardjs").then(setKeyboardJs);
  }, []);

  useEffect(() => {
    if (!keyboardJs) return;

    const down = event => set([true, event]);
    const up = event => set([false, event]);
    keyboardJs.bind(combination, down, up);

    return () => {
      keyboardJs.unbind(combination, down, up);
    };
  }, [combination, keyboardJs]);

  return state;
};

export default useKeyboardJs;
