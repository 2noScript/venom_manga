import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import BannerSlide from "cpm/BannerSlide";
import MangaSlide from "cpm/MangaSlide";
import MangaGrid from "cpm/MangaGrid";
import { Link } from "react-router-dom";
import { RiArrowRightSFill } from "react-icons/ri";
import { memo, useEffect, useMemo } from "react";
import Loading from "cpm/Loading";
import TopManga from "cpm/TopManga";
import { TITLE, TOP_MANGA, MORE_BUTTON } from "./const";
import { fetchHomeData } from "~/globalState/homeData";
import { title } from "~/globalState/appTitle";
import { useSelector, useDispatch } from "react-redux";
import { useDebounce } from "@react-hook/debounce";
const cx = classNames.bind(styles);

function Home() {
  const { loading, data } = useSelector((state) => state.homeData);
  const [loadingDelay, setLoadingDelay] = useDebounce(loading, 100);
  const dispatch = useDispatch();
  useEffect(() => {
    const timeInterval = setInterval(() => {
      dispatch(fetchHomeData());
    }, 200000);
    dispatch(fetchHomeData());
    dispatch(title("venom"));
    return clearInterval(timeInterval);
  }, []);

  const { hot, newManga, newMangaUpdate, topWeek, topDay, topMonth } =
    useMemo(() => {
      return data;
    }, [data]);
  useEffect(() => {
    setLoadingDelay(loading);
  }, [loading]);
  return (
    <>
      {!loading ? (
        <div
          className={cx("wrapper", {
            "content-loading": loadingDelay,
          })}
        >
          {/* slideshow top with hot*/}
          <BannerSlide data={hot?.jsonData} limit={12} />
          <div className={cx("content")}>
            {/*manga update */}
            <div className={cx("new-update")}>
              <Link to={TITLE.newManga.link}>
                <div className={cx("title")}>
                  {TITLE.newManga.name}
                  <RiArrowRightSFill className={cx("title-ico")} />
                </div>
              </Link>
              <MangaSlide data={newManga?.jsonData} />
            </div>

            {/* top  */}
            <div className={cx("topManga-list")}>
              {TOP_MANGA.map((item, index) => {
                const { title, more, name } = item;
                let jsonData;
                if (name === "topWeek") jsonData = topWeek?.jsonData;
                else if (name === "topDay") jsonData = topDay?.jsonData;
                else if (name === "topMonth") jsonData = topMonth?.jsonData;
                else {
                  jsonData = newManga?.jsonData;
                }
                return (
                  <div className={cx("topManga-item")} key={index}>
                    <div className={cx("topManga-title")}>{item.title}</div>
                    <TopManga data={jsonData} limit={5} />
                    <div className={cx("topManga-moreBtn")}>
                      <Link to={more}>
                        <span>
                          {"xem thêm"}
                          <RiArrowRightSFill className={cx("ico")} />
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* new manga */}
            <div className={cx("new-manga")}>
              <Link to={TITLE.newUpdate.link}>
                <div className={cx("title")}>
                  {TITLE.newUpdate.name}
                  <RiArrowRightSFill className={cx("title-ico")} />
                </div>
              </Link>
              <MangaGrid data={newMangaUpdate?.jsonData} limit={12} />
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
