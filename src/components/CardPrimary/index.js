import classNames from "classnames/bind";
import styles from "./CardPrimary.module.scss";
import Image from "cpm/Image";
import { GiEvilBook, GiAlarmClock } from "react-icons/gi";
import { BiGlasses } from "react-icons/bi";
import { MdInfoOutline } from "react-icons/md";
import { memo } from "react";
import { Link } from "react-router-dom";
import { routesConfig } from "~/configs";

const cx = classNames.bind(styles);
const select = ["theo dõi", "chi tiết"];
function CardPrimary({ data, className }) {
  const { name, avatar, update, chapter, keyManga } = data;
  return (
    <div
      className={cx("wrapper", {
        [className]: className,
      })}
    >
      <div className={cx("content")}>
        <Image className={cx("bg")} src={avatar} alt={""} />
        <div className={cx("name")}>{name}</div>
        <div className={cx("info")}>
          <div className={cx("chapter")}>
            <GiEvilBook />
            <span>{chapter}</span>
          </div>
          <div className={cx("update")}>
            <GiAlarmClock />
            <span>{update}</span>
          </div>
        </div>
      </div>
      <div className={cx("select")}>
        <div>
          <div className={cx("read")}>
            <BiGlasses />
            <span> {select[0]}</span>
          </div>
          <Link
            to={`${routesConfig.mangaDetail.replace(
              ":keyManga",
              ""
            )}${keyManga}`}
          >
            <div className={cx("more")}>
              <MdInfoOutline />
              <span>{select[1]}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(CardPrimary);
