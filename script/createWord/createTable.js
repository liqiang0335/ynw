import { Table, TableCell, TableRow, WidthType } from "docx";
import { NC } from "./wordStyles";
/**
 * ----------------------------------------
 * 创建表格
 * @param {Array} columns: [{title,width,render}]
 * @param {Array} dataSource
 * @return [docx/table]
 * ----------------------------------------
 */
export default function createTable({ columns, dataSource }) {
  const header = [];
  header.push(
    new TableRow({
      children: columns.map(config => {
        const property = {
          children: [NC(config.title)],
        };
        if (config.width) {
          property.width = {
            // 视图放大到200%时,计算的屏幕像素距离
            size: config.width * 10,
            type: WidthType.DXA,
          };
        }
        return new TableCell(property);
      }),
    })
  );

  const contents = dataSource.map((rowData, rowIndex) => {
    return new TableRow({
      children: columns.map(item => {
        const cell = item.render(rowData, rowIndex);
        return new TableCell({
          children: [].concat(cell),
        });
      }),
    });
  });

  const table = new Table({
    rows: header.concat(contents),
  });

  return table;
}
