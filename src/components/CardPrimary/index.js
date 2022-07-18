import classNames from "classnames/bind";
import styles from "./CardPrimary.module.scss";
import Image from "cpm/Image";
import { GiEvilBook, GiAlarmClock } from "react-icons/gi";
import { BiGlasses } from "react-icons/bi";
import { MdInfoOutline } from "react-icons/md";
import { memo } from "react";
const cx = classNames.bind(styles);
const select = ["đọc ngay", "thông tin"];
function CardPrimary({ data, className }) {
  return (
    <div
      className={cx("wrapper", {
        [className]: className,
      })}
    >
      <div className={cx("content")}>
        <Image className={cx("bg")} src={data.avatar} alt={""} />
        <div className={cx("name")}>{data.name}</div>
        <div className={cx("info")}>
          <div className={cx("chapter")}>
            <GiEvilBook />
            <span>{data.chapter}</span>
          </div>
          <div className={cx("update")}>
            <GiAlarmClock />
            <span>{data.update}</span>
          </div>
        </div>
      </div>
      <div className={cx("select")}>
        <div>
          <div className={cx("read")}>
            <BiGlasses />
            <span> {select[0]}</span>
          </div>
          <div className={cx("more")}>
            <MdInfoOutline />
            <span>{select[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CardPrimary);
