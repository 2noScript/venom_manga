import classNames from "classnames/bind";
import styles from "./OnTop.module.scss";
import {memo} from 'react'
const cx = classNames.bind(styles);
function OnTop({ right, top }) {
  return (
    <div
      className={cx("wrapper")}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      style={{
        right: right,
        top: top,
      }}
    >
      ontop
    </div>
  );
}

export default memo(OnTop);
