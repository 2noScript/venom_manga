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
const TOP_MANGA = [
  {
    title: "top one",

    more: "",
  },
  {
    title: "top tháng",

    more: "",
  },
  {
    title: "top tuần",

    more: "",
  },
  {
    title: "top ngày",

    more: "",
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
          {/* slideshow top */}
          <BannerSlide data={data.jsonData} />
          <div className={cx("content")}>
            {/*manga update */}
            <div className={cx("new-update")}>
              <Link to={TITLE[0].link}>
                <div className={cx("title")}>
                  {TITLE[0].name}
                  <RiArrowRightSFill className={cx("title-ico")} />
                </div>
              </Link>
              <MangaSlide data={data.jsonData} />
            </div>
            {/* top  */}
            <div className={cx("topManga-list")}>
              {TOP_MANGA.map((item, index) => {
                return (
                  <div className={cx("topManga-item")} key={index}>
                    <div className={cx("topManga-title")}></div>

                    <div className={cx("topManga-moreBtn")}></div>
                  </div>
                );
              })}
            </div>
            {/* new manga */}
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
