import classNames from "classnames/bind";
import styles from "./MangaDetailLayout.module.scss";
import Header from "cpm/Header";
import Footer from "cpm/Footer";

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

export default MangaDetailLayout;
