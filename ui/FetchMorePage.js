import React, { useEffect, useReducer } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import http from "@script/http";

const initState = {
  data: [],
  loading: false,
  hasMore: true,
  page: 1,
  version: 0,
};
const reducer = (state, action) => {
  return { ...state, ...action };
};
/**
 * ----------------------------------------
 * 加载数据
 * @param {String} url - 加载地址
 * @param {Function} ondata - 数据回调
 * @param {Number} [size = 10] - 加载数量
 * ----------------------------------------
 */
export default function FetchMore(props) {
  const { url, ondata, size = 10 } = props;
  const [state, dispatch] = useReducer(reducer, initState);

  async function getdatas() {
    const params = { size, page: state.page };
    dispatch({ loading: true });
    const res = await http.get(url, { params });
    const data = params.page == 1 ? res : state.data.concat(res);
    const hasMore = res.length === size;
    dispatch({ loading: false, data, hasMore, page: state.page + 1 });
    ondata(data);
  }

  useEffect(() => {
    getdatas();
  }, [state.version]);

  useEffect(() => {
    dispatch({ page: 1, version: Date.now() });
  }, [url]);

  return (
    <Loading
      state={state}
      onClick={() => {
        if (state.loading) return;
        dispatch({ version: Date.now() });
      }}
    />
  );
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
  return <LoadingText style={{ color: "#c1c1c1" }}>- 没有更多数据了 -</LoadingText>;
};

const LoadingText = ({ style, children, ...rest }) => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: 0,
        paddingTop: "25px",
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
