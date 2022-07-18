import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useFetch } from "~/hooks";
import BannerSlide from "cpm/BannerSlide";
import MangaSlide from "cpm/MangaSlide";
import MangaGrid from "cpm/MangaGrid";
import { Link } from "react-router-dom";
import { RiArrowRightSFill } from "react-icons/ri";
import { memo } from "react";
import Loading from "cpm/Loading";
const cx = classNames.bind(styles);

const TITLE = [
  {
    name: "mới cập nhật",
    link: "",
  },
  {
    name: "truyện mới",
    link: "",
  },
];
function Home() {
  document.title = "VENOM";
  const [data] = useFetch("get", "hot");
  const [newManga] = useFetch("get", "filter", {
    params: {
      status: 0,
      sort: 0,
      genres: 0,
    },
  });
  const loading = data && newManga;

  return (
    <>
      {loading ? (
        <div className={cx("wrapper")}>
          <BannerSlide data={data.jsonData} />
          <div className={cx("content")}>
            <div className={cx("new-update")}>
              <Link to={TITLE[0].link}>
                <div className={cx("title")}>
                  {TITLE[0].name}
                  <RiArrowRightSFill className={cx("title-ico")} />
                </div>
              </Link>
              <MangaSlide data={data.jsonData} />
            </div>

            <div className={cx("new-manga")}>
              <Link to={TITLE[1].link}>
                <div className={cx("title")}>
                  {TITLE[1].name}
                  <RiArrowRightSFill className={cx("title-ico")} />
                </div>
              </Link>
              <MangaGrid data={newManga.jsonData} />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default memo(Home);
