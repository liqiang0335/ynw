import { useEffect, useReducer } from "react";
import { message, Modal } from "antd";

const initialState = () => ({
  selection: null, //选中的项
  currentPage: 1,
  pageSize: 10,
  rows: [],
  total: 0,
  query: null,
  dep: 0
});

const reducer = (state, action) => {
  if (action.currentPage || action.query) {
    action.dep = Date.now();
  }
  return { ...state, ...action };
};

/**
 * Table 通用部分
 * query/currentPage 变化会重新获取数据
 * @param {Function} fetcher - 获取数据的函数
 * @param {Object} query
 */
export default function useTable(fetcher, query) {
  const [state, dispatch] = useReducer(reducer, initialState());

  const fetchData = () => {
    const params = { ...state.query, currentPage: state.currentPage };

    fetcher(params).then(res => {
      const { total, rows } = res;
      dispatch({ total, rows });
    });
  };

  useEffect(() => {
    dispatch({ currentPage: 1, pageSize: 10, query });
  }, [query]);

  useEffect(() => {
    if (state.dep !== 0) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.dep]);

  const rowSelection = {
    type: "radio",
    onChange(_, rows) {
      dispatch({ selection: rows[0] });
    }
  };

  const confirmDelete = () => {
    return new Promise((resolve, reject) => {
      Modal.confirm({
        title: "操作确认",
        content: "确定要删除吗",
        okText: "确认",
        cancelText: "取消",
        onOk() {
          dispatch({ selection: null });
          resolve();
        },
        onCancel() {
          reject();
        }
      });
    });
  };

  const checkSelection = function() {
    if (state.selection) {
      return Promise.resolve(state.selection);
    }
    message.error("请选择数据");
    return Promise.reject();
  };

  return {
    selection: state.selection,
    confirmDelete,
    checkSelection,
    tableProps: {
      rowSelection,
      rowKey: "id",
      size: "small",
      bordered: true,
      dataSource: state.rows,
      pagination: {
        current: state.currentPage,
        total: state.total,
        onChange: currentPage => dispatch({ currentPage })
      }
    }
  };
}
