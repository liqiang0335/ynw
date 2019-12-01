import React from "react";
import { Radio } from "antd";
import ali from "./images/ali.jpg";
import wx from "./images/wx.jpg";

const RadioGroup = Radio.Group;
const defaultData = [
  { src: wx, width: "100", value: 0 },
  { src: ali, width: "80", value: 1 }
];

export default function index({ data = defaultData, value, onChange }) {
  return (
    <RadioGroup value={value} onChange={onChange}>
      {data.map((it, i) => (
        <Radio value={it.value} key={i}>
          <img width={it.width} src={it.src} />
        </Radio>
      ))}
    </RadioGroup>
  );
}
