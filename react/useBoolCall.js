import { useEffect } from "react";

export default function useBoolCall(dep, onTrue, onFalse) {
  useEffect(() => {
    if (dep) {
      onTrue && onTrue();
    } else {
      onFalse && onFalse();
    }
  }, [dep]);
}
