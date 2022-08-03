import classNames from "classnames/bind";
import styles from "./MangaGrid.module.scss";
import MangaCard from "./MangaCard";
import { memo, useState, useEffect } from "react";
const cx = classNames.bind(styles);
function MangaGrid({ data, limit }) {
  const [oriData, setOriData] = useState();
  useEffect(() => {
    limit ? setOriData(data?.slice(0, limit)) : setOriData(data);
  }, [limit, data]);
  return (
    <div className={cx("wrapper")}>
      {oriData?.map((item, index) => {
        return <MangaCard key={index} data={item} />;
      })}
    </div>
  );
}

export default memo(MangaGrid);
