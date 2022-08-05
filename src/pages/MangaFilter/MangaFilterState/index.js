import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMangaFilterData } from "~/globalState/mangaFilterData";
import { useEffect, memo } from "react";

function MangaFilterState() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const status = searchParams.get("status");
    const sort = searchParams.get("sort");
    const genres = searchParams.get("genres");
    const page = searchParams.get("page");
    dispatch(
      fetchMangaFilterData({
        status,
        sort,
        genres,
        page,
      })
    );
    return () => {};
  }, [searchParams]);
  return null;
}

export default memo(MangaFilterState);
