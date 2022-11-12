import React from "react";
import { AlertOutlined } from "@ant-design/icons";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 可以将错误日志上报给服务器
  }

  render() {
    if (this.state.hasError) {
      return <Holder {...this.props} />;
    }
    return this.props.children;
  }
}

const Holder = ({ style, title = "出错了" }) => {
  return (
    <div
      style={{
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        ...style,
      }}
    >
      <AlertOutlined style={{ fontSize: "18px", marginRight: "5px" }} />
      <span style={{ letterSpacing: "1px" }}>{title}</span>
    </div>
  );
};
