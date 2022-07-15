import classNames from "classnames/bind";
import styles from "./HomeLayout.module.scss";
import Header from "cpm/Header";
import Footer from "cpm/Footer";
const cx = classNames.bind(styles);
function HomeLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("content")}>{children}</div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
