import classNames from "classnames/bind";
import styles from "./TopCard.module.scss";
import Image from "cpm/Image";
import randomColor from "randomcolor";
import Tippy from "@tippyjs/react/headless"; // different import path!

import { Link } from "react-router-dom";
import { routesConfig } from "~/configs";
const cx = classNames.bind(styles);
function TopCard({ data, number }) {
  const { name, avatar, keyManga } = data;
  return (
    <div className={cx("wrapper")}>
      <Link
        to={`${routesConfig.mangaDetail.replace(":keyManga", "")}${keyManga}`}
      >
        <Image src={avatar} alt={""} className={cx("avatar")} />
      </Link>
      <Tippy
        render={(attrs) => (
          <div className="box" tabIndex="-1" {...attrs}>
            My tippy box
          </div>
        )}
      >
        <div className={cx("content")}>
          <div className={cx("number")} style={{ color: randomColor() }}>
            {!!number && number}
          </div>
          <div className={cx("info")}>
            <Link
              to={`${routesConfig.mangaDetail.replace(
                ":keyManga",
                ""
              )}${keyManga}`}
            >
              <div className={cx("name")}>{name}</div>
            </Link>
            {/* <div className={cx("chapter")}>{data.chapter}</div> */}
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default TopCard;
