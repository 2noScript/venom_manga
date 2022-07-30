import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import BannerSlide from "cpm/BannerSlide";
import MangaSlide from "cpm/MangaSlide";
import MangaGrid from "cpm/MangaGrid";
import { Link } from "react-router-dom";
import { RiArrowRightSFill } from "react-icons/ri";
import { memo, useEffect } from "react";
import Loading from "cpm/Loading";
import TopManga from "cpm/TopManga";
import { TITLE, TOP_MANGA, MORE_BUTTON } from "./const";
import { fetchHomeData } from "~/globalState/homeData";
import { title } from "~/globalState/appTitle";
import { useSelector, useDispatch } from "react-redux";
const cx = classNames.bind(styles);

function Home() {
  const homeData = useSelector((state) => state.homeData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeData("hello"));
    dispatch(title("venom"));
  }, []);
  return (
    <>
      {homeData.data ? (
        <div className={cx("wrapper")}>
          {/* slideshow top whith hot*/}
          <BannerSlide data={homeData.data?.hot.jsonData} limit={12} />
          <div className={cx("content")}>
            {/*manga update */}
            <div className={cx("new-update")}>
              <Link to={TITLE[0].link}>
                <div className={cx("title")}>
                  {TITLE[0].name}
                  <RiArrowRightSFill className={cx("title-ico")} />
                </div>
              </Link>
              <MangaSlide
                data={homeData.data?.newMangaUpdate.jsonData}
                limit={12}
              />
            </div>

            {/* top  */}
            <div className={cx("topManga-list")}>
              {TOP_MANGA.map((item, index) => {
                return (
                  <div className={cx("topManga-item")} key={index}>
                    <div className={cx("topManga-title")}>{item.title}</div>
                    <TopManga
                      data={homeData.data?.newManga.jsonData}
                      limit={5}
                    />
                    <div className={cx("topManga-moreBtn")}>
                      <Link to={MORE_BUTTON[index]?.link}>
                        <span>
                          {MORE_BUTTON[index]?.title}
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
              <Link to={TITLE[1].link}>
                <div className={cx("title")}>
                  {TITLE[1].name}
                  <RiArrowRightSFill className={cx("title-ico")} />
                </div>
              </Link>
              <MangaGrid data={homeData.data?.newManga.jsonData} limit={12} />
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
