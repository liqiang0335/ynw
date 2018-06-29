/**
 * @param option: Object 处理函数
 *
 * 使用方法
 * import onPress from 'ynw/util/onPress
 *  onPress({
 *    isDev:true, //默认为false
 *    KeyA:()=>console.log("you press A"),
 *    Num2:()=>console.log("you press 2")
 * })
 */
export default option => {
  if (option.isDev && process.env.NODE_ENV === "production") return;
  document.addEventListener(
    "keyup",
    e => {
      const { altKey, ctrlKey, keyCode } = e;
      if (!(ctrlKey && altKey)) return;
      const key = CodeToKey[keyCode];
      if (option[key]) {
        option[key]();
      }
    },
    false
  );
};

const CodeToKey = {
  48: "Num0",
  49: "Num1",
  50: "Num2",
  51: "Num3",
  52: "Num4",
  53: "Num5",
  54: "Num6",
  55: "Num7",
  56: "Num8",
  57: "Num9",
  65: "KeyA",
  66: "KeyB",
  67: "KeyC",
  68: "KeyD",
  69: "KeyE",
  70: "KeyF",
  71: "KeyG",
  72: "KeyH",
  73: "KeyI",
  74: "KeyJ",
  75: "KeyK",
  76: "KeyL",
  77: "KeyM",
  78: "KeyN",
  79: "KeyO",
  80: "KeyP",
  81: "KeyQ",
  82: "KeyR",
  83: "KeyS",
  84: "KeyT",
  85: "KeyU",
  86: "KeyV",
  87: "KeyW",
  88: "KeyX",
  89: "KeyY",
  90: "KeyZ"
};
