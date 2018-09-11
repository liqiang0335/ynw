const mermaid = require("mermaid");

/**
 * 生成流程图, 甘特图
 */
export default function(cmd, id) {
  id = id || "mermaid" + Date.now();
  return new Promise(resolve => {
    mermaid.render(id, cmd.join("\n"), svg => {
      resolve(svg);
    });
  });
}
