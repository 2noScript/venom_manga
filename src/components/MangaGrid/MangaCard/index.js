import classNames from "classnames/bind";
import styles from "./MangaCard.module.scss";
import Image from "cpm/Image";
import { memo } from "react";
const cx = classNames.bind(styles);
function MangaCard({ data }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <Image className={cx("avatar")} src={data.avatar} alt={""} />
        <div className={cx("info")}>
          <div className={cx("name")}>{data.name}</div>
          <div className={cx("description")}>
            {data.description !== "" ? data.description : "none"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(MangaCard);
