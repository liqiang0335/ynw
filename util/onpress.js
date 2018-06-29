let init = false
if (process.env.NODE_ENV !== "production") {
  const handler = {
    96:()=>
    105: () => 
    57: () => 
  };

  document.addEventListener("keyup", e => {
    const { altKey,ctrlKey, keyCode } = e;
    if (!(ctrlKey && altKey && shiftKey)) return;
    handler[keyCode] && handler[keyCode]();
  });
}
