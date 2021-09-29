import React from "react";
import { DownloadOutlined, CheckOutlined } from "@ant-design/icons";
import HeaderPopAction from "@comps/HeaderPopAction";
import styles from "./Software.scss";
import { Button } from "@comps/Buttons";
/**
 * ----------------------------------------
 * 软件下载提示
 * @param {String} link 下载链接
 * @param {Object} style Header样式
 * ----------------------------------------
 */
export default function Software({ link, style }) {
  const Item = ({ children }) => {
    return (
      <li>
        <CheckOutlined className={styles.check} />
        {children}
      </li>
    );
  };

  const Content = () => {
    return (
      <div className={styles.container}>
        <Button href={link}>下载Windows客户端</Button>
        <ul className={styles.info}>
          <Item>软件一键安装，自动更新升级</Item>
          <Item>双击桌面图标，快速进入使用</Item>
          <Item>内核更优化，无兼容性问题</Item>
          <Item>支持Win7及以上系统</Item>
        </ul>
      </div>
    );
  };

  if (navigator.userAgent.match(/electron/i)) {
    return null;
  }
  return (
    <HeaderPopAction text="客户端下载" Content={Content} style={style}>
      <DownloadOutlined style={{ color: "white" }} />
    </HeaderPopAction>
  );
}
