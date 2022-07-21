import classNames from "classnames/bind";
import styles from "./TopCard.module.scss";
import Image from "cpm/Image";
import randomColor from "randomcolor";
import Tippy from "@tippyjs/react/headless"; // different import path!
const cx = classNames.bind(styles);
function TopCard({ data, number }) {
  return (
    <div className={cx("wrapper")}>
      <Image src={data.avatar} alt={""} className={cx("avatar")} />
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
            <div className={cx("name")}>{data.name}</div>
            {/* <div className={cx("chapter")}>{data.chapter}</div> */}
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default TopCard;
