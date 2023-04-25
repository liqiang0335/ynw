import React, { useReducer } from "react";
import axios from "axios";
import styles from "./UploadMulInput.scss";
import { DeleteOutlined } from "@ant-design/icons";
import confirmer from "ynw/script/confirmer";
import IF from "ynw/react/IF";

const initState = {
  percent: 0,
};
const reducer = (state, action) => {
  return { ...state, ...action };
};
/**
 * ----------------------------------------
 * 单个文件上传和回显
 * @param {String} value - 文件回显路径
 * @param {Function} onChange
 * @param {String} [url] - 接口地址
 * @param {String} [accept=""] - 文件格式
 * @param {String} [title] - 文字提示
 * @param {Object} [headers]
 * ----------------------------------------
 */
export default function UploadInput(props) {
  const { url = "/api/rfcdam/com/file/upload", value = "", accept = "", onChange, title = "选择文件", headers } = props;
  const [state, dispatch] = useReducer(reducer, initState);
  const loading = state.percent > 0 && state.percent <= 100;

  const _onChange = async (e) => {
    const file = e.target.files[0];
    const form = new FormData();
    form.append("file", file);
    const res = await axios.post(url, form, {
      headers: {
        token: window.token,
        "Content-Type": "multipart/form-data;charset=UTF-8",
        ...headers,
      },
      onUploadProgress: (e) => {
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

  const ChooseFile = () => {
    if (loading) {
      return <span style={{ color: "#ff0000" }}>正在上传({state.percent}%)...</span>;
    }
    return (
      <label className={styles.label}>
        <div style={{ height: "100%" }}>
          <span>{title}</span>
          <span className={styles.sizeTip}>(限制30M以内)</span>
        </div>
        <input accept={accept} type="file" onChange={_onChange} style={{ display: "none" }} />
      </label>
    );
  };

  const deleteItem = async () => {
    await confirmer("确定要删除吗");
    onChange("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <ChooseFile />
      </div>
      <div className={styles.files}>
        <div className={styles.fileItem}>
          <span className={styles.fileName}>{getFileName(value)}</span>
          <IF value={value}>
            <DeleteOutlined onClick={deleteItem} />
          </IF>
        </div>
      </div>
    </div>
  );
}

function getFileName(path) {
  const match = path.match(/[^/\\]+$/);
  return match ? match[0] : path;
}
