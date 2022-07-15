import Search from "./Search";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import venom from "img/logo/xvenom.png";
import { routesConfig } from "~/configs";
import { memo } from "react";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx("wrapper")}>
      <Link to={routesConfig.home}>
        <div
          className={cx("logo")}
          style={{
            backgroundImage: `url(${venom})`,
          }}
        ></div>
      </Link>
      <Search />
    </div>
  );
}

export default memo(Header);
