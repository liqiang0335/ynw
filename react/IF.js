import { Empty } from "antd";

/**
 * 条件显示
 * @param {boolean} value
 * @param {boolean} showEmpty
 * @param {React.ReactNode} children
 */
export default function IF({ value, children, showEmpty }) {
  if (!value) {
    if (showEmpty) {
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
    }
    return null;
  }
  return children;
}
