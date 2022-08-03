import classNames from "classnames/bind";
import styles from "./MangaDetailLayout.module.scss";
import Header from "cpm/Header";
import Footer from "cpm/Footer";
import { memo } from "react";
const cx = classNames.bind(styles);

function MangaDetailLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("content")}>{children}</div>
      <Footer />
    </div>
  );
}

export default memo(MangaDetailLayout);
