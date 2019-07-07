import { useState } from "react";

export default function useToggle(init = false) {
  const [show, set] = useState(init);
  const toggle = () => set(v => !v);
  return [show, toggle];
}
