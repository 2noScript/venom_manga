import classNames from "classnames/bind";
import styles from "./Bubble.module.scss";
const cx = classNames.bind(styles);
function Bubble({ data, x, y }) {
  return <div className={cx("wrapper")}>{data}</div>;
}

export default Bubble;
