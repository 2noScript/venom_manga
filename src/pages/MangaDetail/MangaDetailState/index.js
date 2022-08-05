import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { title } from "~/globalState/appTitle";

import {
  fetchMangaDetailChapList,
  resetData,
} from "~/globalState/mangaDetailData";
function MangaDetailState() {
  const disPatch = useDispatch();
  const { data } = useSelector((state) => state.mangaDetailData);
  const { keyManga } = useParams();
  useEffect(() => {
    disPatch(fetchMangaDetailChapList(keyManga));
    return () => {
      !!data && disPatch(resetData());
    };
  }, [keyManga]);
  useEffect(() => {
    data && disPatch(title(data?.detail?.name));
  }, [data]);
  return <></>;
}

export default memo(MangaDetailState);
