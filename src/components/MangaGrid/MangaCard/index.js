import classNames from "classnames/bind";
import styles from "./MangaCard.module.scss";
import Image from "cpm/Image";
import { memo } from "react";
import randomColor from "randomcolor";
import { GiEvilBook, GiAlarmClock } from "react-icons/gi";
import { BsDot } from "react-icons/bs";

const cx = classNames.bind(styles);
const STATUS = [
  {
    type: "Đang tiến hành",
    color: "",
  },
  {
    type: "Hoàn thành",
    color: "",
  },
];
function MangaCard({ data }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <Image className={cx("avatar")} src={data.avatar} alt={""} />
        <div className={cx("info")}>
          <div className={cx("name")} style={{ color: `${randomColor()}` }}>
            {data.name}
          </div>
          <div className={cx("description")}>
            {/* {data.description !== "" ? data.description : "none"} */}
          </div>
          <div className={cx("tags")}>{data.types.split(",")}</div>

          <div className={cx("chapter")}>
            <GiEvilBook className={cx("ico")} />
            <span>{data.chapter}</span>
          </div>
          <div className={cx("time")}>
            <GiAlarmClock className={cx("ico")} />
            <span>{data.update}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(MangaCard);
