import React, { useReducer } from "react";
import styled from "styled-components";
import axios from "axios";

const initState = {
  percent: 0,
};
const reducer = (state, action) => {
  return { ...state, ...action };
};

/**
 * ----------------------------------------
 * 上传文件和回显文件
 * @param {String} value - 文件路径
 * @param {Function} onChange
 * @param {String} [url] - 接口地址
 * @param {String} [headers] - 设置请求头
 * @param {String} [accept=""] - 文件格式
 * @param {String} [title] - 文字提示
 * ----------------------------------------
 */
export default function UploadInput({
  url = "",
  value = "",
  accept = "",
  onChange,
  title = "选择文件",
  headers,
}) {
  const [state, dispatch] = useReducer(reducer, initState);
  const loading = state.percent > 0 && state.percent <= 100;
  // eslint-disable-next-line no-useless-escape
  const matchFileName = value.match(/[^\/]+$/);
  const fileName = matchFileName ? matchFileName[0] : "";

  const _onChange = async e => {
    const file = e.target.files[0];
    const form = new FormData();
    form.append("file", file);
    const res = await axios.post(url, form, {
      headers: {
        "Content-Type": "multipart/form-data;charset=UTF-8",
        ...headers,
      },
      onUploadProgress: e => {
        const percent = ((e.loaded / e.total) * 100) | 0;
        dispatch({ percent });
      },
    });
    const filePath = res.data.data;
    setTimeout(() => {
      dispatch({ percent: 0 });
      onChange(filePath);
    }, 300);
  };

  return (
    <>
      <SBox>
        {loading ? (
          <span style={{ color: "#ff0000" }}>
            正在上传({state.percent}%)...
          </span>
        ) : (
          <SLabel>
            <div style={{ height: "100%" }}>
              {title}
              <span style={{ color: "gray", fontSize: "12px" }}>
                (限制30M以内)
              </span>
            </div>
            <input
              accept={accept}
              type="file"
              onChange={_onChange}
              style={{ width: "1px", display: "none" }}
            />
          </SLabel>
        )}
      </SBox>
      <SFiles>{fileName}</SFiles>
    </>
  );
}

const SBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #d4d4d4;
  background-color: #f3f3f3;
  height: 50px;
  line-height: 50px;
`;

const SLabel = styled.label`
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #2a2aa0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SFiles = styled.div`
  margin-top: 3px;
  color: #0e41ad;
`;
