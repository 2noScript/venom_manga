import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useFetch } from "~/hooks";
import BannerSlide from "cpm/BannerSlide";
const cx = classNames.bind(styles);
// xử lý fetch api

function Home() {
  document.title = "VENOM";

  const [data] = useFetch("get", "new-update");

  return (
    <>
      {data && (
        <div className={cx("wrapper")}>
          <BannerSlide data={data.jsonData} />
        </div>
      )}
    </>
  );
}

export default Home;
