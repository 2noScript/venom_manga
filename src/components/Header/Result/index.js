import classNames from "classnames/bind";
import styles from "./Result.module.scss";
import { memo } from "react";
const cx = classNames.bind(styles);
function Result({ data }) {
  return (
    <div className={cx("wrapper")}>
      <img src={data.avatar} alt="" className={cx("avatar")} />
      <div className={cx("content")}>
        <div className={cx("name")}>{data.name}</div>
        <div className={cx("chapter")}>chapter: {data.chapter}</div>
        <div className={cx("tags")}>{data.types}</div>
      </div>
    </div>
  );
}

export default memo(Result);
