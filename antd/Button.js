/**
 * 红色的按钮
 * @param {String} text - 按钮的文字
 * @param {String} color - 色值(默认红色)
 * @param {Function} onClick
 * @param {String} size
 */
export function RedButton({
  onClick,
  size = "default",
  text = "删除",
  color = "rgb(255, 63, 13)"
}) {
  return (
    <Button
      type="danger"
      style={{
        marginRight: "10px",
        background: color,
        borderColor: color,
        color: "white"
      }}
      onClick={onClick}
      size={size}
    >
      {text}
    </Button>
  );
}

/**
 * 新增按钮
 */
export function NewButton(prop) {
  return (
    <Button type="primary" style={{ marginRight: "10px" }} {...prop}>
      新增
    </Button>
  );
}

/**
 * 修改按钮
 */
export function EditButton(prop) {
  return (
    <Button
      type="primary"
      style={{
        marginRight: "10px",
        background: "rgb(0, 187, 0)",
        borderColor: "rgb(0, 187, 0)"
      }}
      {...prop}
    >
      修改
    </Button>
  );
}
