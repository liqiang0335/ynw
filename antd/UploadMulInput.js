import React, { useReducer } from "react";
import axios from "axios";
import uuid from "@script/uuid";
import styles from "./UploadMulInput.scss";
import { uniq } from "lodash-es";
import { DeleteOutlined } from "@ant-design/icons";
import confirmer from "ynw/script/confirmer";

const initState = {
  percent: 0,
};
const reducer = (state, action) => {
  return { ...state, ...action };
};
/**
 * ----------------------------------------
 * 支持多个文件上传和回显
 * @param {Array} value - 文件回显路径
 * @param {Function} onChange
 * @param {String} [url] - 接口地址
 * @param {String} [accept=""] - 文件格式
 * @param {String} [title] - 文字提示
 * ----------------------------------------
 */
export default function UploadInput(props) {
  const {
    url = "/api/rfcdam/com/file/upload",
    value = [],
    accept = "",
    onChange,
    title = "选择一个或多个文件",
  } = props;
  const [state, dispatch] = useReducer(reducer, initState);
  const loading = state.percent > 0 && state.percent <= 100;
  console.log("🍎 value", value);

  const _onChange = async e => {
    const file = e.target.files[0];
    const form = new FormData();
    form.append("file", file);
    const res = await axios.post(url, form, {
      headers: getHeaders(),
      onUploadProgress: e => {
        const percent = ((e.loaded / e.total) * 100) | 0;
        dispatch({ percent });
      },
    });
    const filePath = res.data.data;
    setTimeout(() => {
      dispatch({ percent: 0 });
      onChange(uniq([filePath, ...value]));
    }, 300);
  };

  const ShowUploading = () => {
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

  const deleteItem = async path => {
    await confirmer("确定要删除吗");
    onChange(value.filter(it => it !== path));
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <ShowUploading />
      </div>
      <div className={styles.files}>
        {value.map(path => (
          <div key={path} className={styles.fileItem}>
            <span className={styles.fileName}>{getFileName(path)}</span>
            <DeleteOutlined onClick={() => deleteItem(path)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function getFileName(path) {
  const match = path.match(/[^/\\]+$/);
  return match ? match[0] : path;
}

function getHeaders() {
  return {
    passport: "56b8cb51-6da6-509abc-w2",
    "Content-Type": "multipart/form-data;charset=UTF-8",
    token: window.token,
    client: 1,
    id: uuid(),
  };
}
