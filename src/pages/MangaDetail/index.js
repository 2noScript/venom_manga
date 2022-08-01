import classNames from "classnames/bind";
import styles from "./MangaDetail.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { title } from "~/globalState/appTitle";
import { fetchMangaDetailChapList } from "~/globalState/mangaDetailData";
const cx = classNames.bind(styles);

function MangaDetail() {
  const disPatch = useDispatch();
  const mangaDetailData = useSelector((state) => state.mangaDetailData);
  const { keyManga } = useParams();
  useEffect(() => {
    disPatch(fetchMangaDetailChapList(keyManga));
    disPatch(title(mangaDetailData.detail?.name));
  }, [keyManga]);

  return (
    <div className={cx("wrapper")}>
      <div>fetchMangaDetailChapList</div>
      <div>{mangaDetailData.detail?.name}</div>
      <ul>{mangaDetailData.data?.length}</ul>
    </div>
  );
}

export default MangaDetail;
