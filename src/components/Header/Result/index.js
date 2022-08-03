import classNames from "classnames/bind";
import styles from "./Result.module.scss";
import { memo } from "react";
import { Link } from "react-router-dom";
import { routesConfig } from "~/configs";
const cx = classNames.bind(styles);
function Result({ data }) {
  return (
    <div className={cx("wrapper")}>
      <img src={data.avatar} alt="" className={cx("avatar")} />
      <div className={cx("content")}>
        <Link
          className={cx("xlink")}
          to={`${routesConfig.mangaDetail.replace(":keyManga", "")}${
            data.keyManga
          }`}
        >
          <div className={cx("name")}>{data.name}</div>
          <div className={cx("chapter")}>chapter: {data.chapter}</div>
          <div className={cx("tags")}>{data.types}</div>
        </Link>
      </div>
    </div>
  );
}

export default memo(Result);
