import React from "react";
import PropTypes from "prop-types";
import icon from "../../images/loading2.gif";
LoadMore.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};
/**
 * ----------------------------------------
 * 加载更多按钮
 * @param {Boolean} loading - 是否正在加载
 * @param {Function} onClick
 * @param {Boolean} none - 是否含有更多
 *
 * <LoadMore onClick={() => dispatch({ page: state.page + 1 })} loading={state.loading} none={state.none} />
 * ----------------------------------------
 */
export default function LoadMore({ loading, onClick, none }) {
  if (none) {
    return <div style={{ color: "#bfbebe", textAlign: "center" }}>- 没有更多数据了 -</div>;
  }
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div style={{ textAlign: "center", cursor: "pointer", margin: "10px 0" }}>
          <span onClick={onClick} style={{ padding: "2px 10px" }}>
            加载更多
          </span>
        </div>
      )}
    </div>
  );
}

function Spinner() {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={icon} width={16} />
      <span style={{ marginLeft: "8px" }}>正在加载</span>
    </div>
  );
}
