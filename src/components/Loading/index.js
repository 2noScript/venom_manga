import classNameNames from "classnames/bind";
import styles from "./Loading.module.scss";
const cx = classNameNames.bind(styles);
const igName = "2noScript";
function Loading() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("circ")}>
        <div className={cx("load")}>{igName} . . . . </div>
        <div className={cx("hands")}></div>
        <div className={cx("body")}></div>
        <div className={cx("head")}>
          <div className={cx("eye")}></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
