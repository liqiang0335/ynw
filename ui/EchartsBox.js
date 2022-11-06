import React, { useEffect, useState } from "react";
import UUIDBrowser from "ynw/browser/UUIDBrowser";
/**
 * ----------------------------------------
 * 图表容器
 * @param {Object} [options] - echarts 图表配置
 * ----------------------------------------
 */
export default function EchartsBox({ option, ...props }) {
  const [id] = useState(UUIDBrowser());

  useEffect(() => {
    if (option?.series) {
      const container = document.getElementById(id);
      const charts = echarts.init(container);
      charts.setOption(option);
    }
  }, [option]);

  return <div className="w-full h-full" id={id} {...props}></div>;
}
