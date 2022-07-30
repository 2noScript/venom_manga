import Search from "./Search";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import venom from "img/logo/xvenom.png";
import { routesConfig } from "~/configs";
import { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useScrollPosition from "@react-hook/window-scroll";
const SCROLL_FPS = 250;

const cx = classNames.bind(styles);
function Header() {
  const scrollY = useScrollPosition(SCROLL_FPS);
  const [currentY, setcurrentY] = useState(scrollY);
  const [show, setShow] = useState(true);
  useEffect(() => {
    setShow(currentY >= scrollY);
    setcurrentY(scrollY);
  }, [scrollY]);

  const cls = show ? "visible" : "hidden";
  console.log(cls);
  return (
    <div className={cx("wrapper", cls)}>
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
