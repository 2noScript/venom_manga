import classNames from "classnames/bind";
import styles from "./MangaDetail.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { title } from "~/globalState/appTitle";
import { TiTick } from "react-icons/ti";
// import { BsDot } from "react-icons/bs";
import { MdUpdate } from "react-icons/md";
import { memo } from "react";
import {
  fetchMangaDetailChapList,
  resetData,
} from "~/globalState/mangaDetailData";
const cx = classNames.bind(styles);

function MangaDetail() {
  const disPatch = useDispatch();
  const { data, loading } = useSelector((state) => state.mangaDetailData);
  const { keyManga } = useParams();

  useEffect(() => {
    disPatch(fetchMangaDetailChapList(keyManga));
    return () => {
      disPatch(resetData());
    };
  }, [keyManga]);
  useEffect(() => {
    disPatch(title(data?.detail?.name));
  }, [data]);
  return (
    <div className={cx({ "content-loading": loading }, "wrapper")}>
      <div className={cx({ "aspect-ratio": true }, "header")}>
        <div className={cx("content", { "aspect-ratio-content": true })}>
          <div
            className={cx("bg")}
            style={{
              backgroundImage: `url(${data?.detail?.avatar})`,
            }}
          ></div>
          <div className={cx("above")}>
            <div className={cx("avatar")}>
              <div
                className={cx("avatar-img")}
                style={{ backgroundImage: `url(${data?.detail?.avatar})` }}
              ></div>
            </div>
            <div className={cx("info")}>
              <div className={cx("name")}>{data?.detail?.name}</div>
              <div className={cx("status")}>
                {data?.detail?.status === "Hoàn thành" ? (
                  <TiTick className={cx("tick")} />
                ) : (
                  <MdUpdate className={cx("updating")} />
                )}
                <span>{data?.detail?.status}</span>
              </div>
              <div className={cx("tags")}>
                <span className={cx("tags-title")}>thể loại</span>
                <ul>
                  {data?.detail?.tags?.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("body")}>
        <p
          className={cx("description", {})}
          dangerouslySetInnerHTML={{
            __html: data?.detail?.description,
          }}
        ></p>
      </div>
    </div>
  );
}

export default memo(MangaDetail);
