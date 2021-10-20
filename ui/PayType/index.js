import React from "react";
import { Radio } from "antd";
import imgpayali from "./pay-ali.jpg";
import imgpaywx from "./pay-wx.jpg";
/**
 * ----------------------------------------
 * 支付类型
 * ----------------------------------------
 */
export default function PayType(props) {
  return (
    <Radio.Group style={{ margin: "10px", userSelect: "none" }} {...props}>
      <Radio value="alipay">
        <img src={imgpayali} height={35} />
      </Radio>
      <Radio value="wxpay">
        <img src={imgpaywx} height={35} />
      </Radio>
    </Radio.Group>
  );
}
