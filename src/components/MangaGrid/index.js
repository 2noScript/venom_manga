import classNames from "classnames/bind";
import styles from "./MangaGrid.module.scss";
import CardPrimary from "cpm/CardPrimary";
import MangaCard from "./MangaCard";
import { memo } from "react";
const cx = classNames.bind(styles);
function MangaGrid({ data }) {
  return (
    <div className={cx("wrapper")}>
      {data.map((item, index) => {
        return <MangaCard key={index} data={item} />;
      })}
    </div>
  );
}

export default memo(MangaGrid);
