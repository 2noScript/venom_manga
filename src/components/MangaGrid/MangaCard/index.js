import classNames from "classnames/bind";
import styles from "./MangaCard.module.scss";
import Image from "cpm/Image";
import { memo } from "react";
import randomColor from "randomcolor";
import { GiEvilBook, GiAlarmClock } from "react-icons/gi";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import { routesConfig } from "~/configs";
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
  const { name, avatar, types, update, chapter, keyManga } = data;
  return (
    <div className={cx("wrapper")}>
      <Link
        to={`${routesConfig.mangaDetail.replace(":keyManga", "")}${keyManga}`}
      >
        <div className={cx("content")}>
          <Image className={cx("avatar")} src={avatar} alt={""} />
          <div className={cx("info")}>
            <div className={cx("name")} style={{ color: `${randomColor()}` }}>
              {name}
            </div>
            <div className={cx("description")}>
              {/* {data.description !== "" ? data.description : "none"} */}
            </div>
            <div className={cx("tags")}>{types.split(",")}</div>

            <div className={cx("chapter")}>
              <GiEvilBook className={cx("ico")} />
              <span>{chapter}</span>
            </div>
            <div className={cx("time")}>
              <GiAlarmClock className={cx("ico")} />
              <span>{update}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default memo(MangaCard);
