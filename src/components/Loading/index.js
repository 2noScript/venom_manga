import classNames from "classnames/bind";
import styles from "./Loading.module.scss";
import loading from "./loading.gif";
const cx = classNames.bind(styles);

function Loading() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("cube")}>
        <div className={cx("c-1")}></div>
        <div className={cx("c-2")}></div>
        <div className={cx("c-3")}></div>
        <div className={cx("c-4")}></div>
        <div className={cx("c-5")}></div>
        <div className={cx("c-6")}></div>
      </div>
    </div>
  );
}

export default Loading;
