import React, { useEffect, useReducer } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useDebounceFn } from "ahooks";
import http from "@script/http";

const initState = {
  data: [],
  loading: false,
  hasMore: true,
};
const reducer = (state, action) => {
  return { ...state, ...action };
};
/**
 * ----------------------------------------
 * 加载数据
 * @param {String} url - 加载地址
 * @param {Function} ondata - 数据回调
 * @param {Array} [deps] - 变化依赖
 * @param {Number} [size = 10] - 加载数量
 * ----------------------------------------
 */
export default function FetchMore({ url, ondata, deps, size = 10 }) {
  const [state, dispatch] = useReducer(reducer, initState);

  const { run } = useDebounceFn(() => fetcher(true), {
    wait: 500,
    leading: true,
    trailing: false,
  });

  const fetcher = async isAppend => {
    const params = { size };
    const len = state.data.length;

    if (len > 0 && isAppend === true) {
      params.last = state.data[len - 1]._id;
    }
    dispatch({ loading: true });

    const res = await http.get(url, { params });
    const data = isAppend ? state.data.concat(res) : res;
    const hasMore = res.length === size;
    dispatch({ loading: false, data, hasMore });
    ondata(data);
  };

  useEffect(() => {
    fetcher(false);
  }, [].concat(deps));

  return <Loading onClick={run} state={state}></Loading>;
}

/**
 * ----------------------------------------
 * 加载更多
 * ----------------------------------------
 */
const Loading = ({ state, onClick }) => {
  if (state.loading) {
    return (
      <LoadingText>
        <LoadingOutlined style={{ marginRight: "5px" }} />
        <span>正在加载</span>
      </LoadingText>
    );
  }
  if (state.hasMore)
    return (
      <LoadingText>
        <span onClick={onClick} style={{ cursor: "pointer" }}>
          加载更多
        </span>
      </LoadingText>
    );
  return (
    <LoadingText style={{ color: "#c1c1c1" }}>- 没有更多数据了 -</LoadingText>
  );
};

const LoadingText = ({ style, children, ...rest }) => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px 0",
        paddingTop: "40px",
        paddingBottom: "40px",
        letterSpacing: "1px",
        color: "gray",
        fontSize: "13px",
        clear: "both",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
