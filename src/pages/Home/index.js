import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useFetch } from "~/hooks";
import fetchApi from "~/Fetch";
import BannerSlide from "cpm/BannerSlide";
import MangaSlide from "cpm/MangaSlide";
import MangaGrid from "cpm/MangaGrid";
import { Link } from "react-router-dom";
import { RiArrowRightSFill } from "react-icons/ri";
import { memo, useState, useEffect } from "react";
import Loading from "cpm/Loading";
import TopManga from "cpm/TopManga";
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
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const resHot = await fetchApi.get("hot");
      const resNewMangaUpdate = await fetchApi.get("new-update");
      const resNewManga = await fetchApi.get("filter", {
        params: {
          status: 0,
          sort: 0,
          genres: 0,
        },
      });
      const hot = resHot.data;
      const newManga = resNewManga.data;
      const newMangaUpdate = resNewMangaUpdate.data;
      setData({ ...data, hot, newManga, newMangaUpdate });
    };

    fetchData();
  }, []);
  const isLoading = !!data;
  console.log(data);
  return (
    <>
      {isLoading ? (
        <div className={cx("wrapper")}>
          {/* slideshow top whith hot*/}
          <BannerSlide data={data.hot?.jsonData} limit={12} />
          <div className={cx("content")}>
            {/*manga update */}
            <div className={cx("new-update")}>
              <Link to={TITLE[0].link}>
                <div className={cx("title")}>
                  {TITLE[0].name}
                  <RiArrowRightSFill className={cx("title-ico")} />
                </div>
              </Link>
              <MangaSlide data={data.newMangaUpdate?.jsonData} limit={12} />
            </div>

            {/* top  */}
            <div className={cx("topManga-list")}>
              {TOP_MANGA.map((item, index) => {
                return (
                  <div className={cx("topManga-item")} key={index}>
                    <div className={cx("topManga-title")}>{item.title}</div>
                    <TopManga data={data.newManga?.jsonData} limit={5} />
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
              <MangaGrid data={data.newManga?.jsonData} limit={12} />
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
