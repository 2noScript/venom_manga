import Search from "./Search";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import venom from "img/logo/xvenom.png";
import { memo } from "react";
const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx("wrapper")}>
      <div
        className={cx("logo")}
        style={{
          backgroundImage: `url(${venom})`,
        }}
      ></div>
      <Search />
    </div>
  );
}

export default memo(Header);
