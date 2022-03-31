import { T1, T2, N, NC, Character, ImagePara } from "@script/createWord/wordStyles";
import createWord from "@script/createWord/createWord";
import createTable from "@script/createWord/createTable";
import { mask } from "ynw/antd/GlobalMask";
/**
 * ----------------------------------------
 * 导出Word示例
 * ----------------------------------------
 */
export default async function exportHosts(dataSource) {
  const columns = [
    { title: "序号", width: 65, render: (row, index) => NC(index + 1) },
    {
      title: "风险等级",
      width: 140,
      render: row => {
        return NC([Character("威胁等级:"), Character(row.text, row.color)]);
      },
    },
  ];

  mask.emit("show", "正在导出");

  const children = [
    T1("文章大标题"),
    T2("主机信息概括"),
    createTable({ columns, dataSource }), // 创建表格
    T2("主机漏洞详情"),
  ];

  await createWord({ title: "文件名", children });

  mask.emit("hide");
}
