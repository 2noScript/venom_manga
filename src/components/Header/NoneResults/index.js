import classNames from "classnames/bind";
import styles from "./NoneResult.module.scss";
import { CgSmileNone } from "react-icons/cg";
const cx = classNames.bind(styles);
function NoneResult() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("ico")}>
        <CgSmileNone />
      </div>
      <div className={cx("notification")}> not found</div>
    </div>
  );
}

export default NoneResult;
