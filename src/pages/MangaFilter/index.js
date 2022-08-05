import classNames from "classnames/bind";
import styles from "./MangaFilter.module.scss";
import { useSelector } from "react-redux";
import { useEffect, memo } from "react";
import Menu from "./Menu";
import MangaGrid from "cpm/MangaGrid";
import MangaFilterState from "./MangaFilterState";
const cx = classNames.bind(styles);

function MangaFilter() {
  const { data } = useSelector((state) => state.mangaFilterData);
  console.log(data);

  return (
    <div className={cx("wrapper")}>
      <MangaFilterState />
      <Menu />
      <MangaGrid data={data?.jsonData} />
    </div>
  );
}

export default memo(MangaFilter);
