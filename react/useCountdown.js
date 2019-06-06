import { useState } from "react";
import useInterval from "./useInterval";

/**
 * 验证码倒计时
 * @param {Number} duration - 倒计时时长
 * @return {Array} [text:String, running:Boolean, start:Function]
 */
export default function useCountdown(duration = 60) {
  const DEFAULT = "获取验证码";
  const [text, setText] = useState(DEFAULT);
  const [second, setSecond] = useState(duration);
  const running = second != duration;

  const start = () => setSecond(v => v - 1);

  useInterval(
    () => {
      if (second === 0) {
        setSecond(duration);
        setText(DEFAULT);
        return;
      }
      setSecond(v => v - 1);
      setText(`${second}秒后重新获取`);
    },
    second == duration ? null : 1000
  );

  return [text, running, start];
}
