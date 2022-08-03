import classNames from "classnames/bind";
import styles from "./TopManga.module.scss";
import TopCard from "./TopCard";
import { memo, useState, useEffect } from "react";
const cx = classNames.bind(styles);

function TopManga({ data, limit }) {
  const [oriData, setOriData] = useState();
  useEffect(() => {
    limit ? setOriData(data?.slice(0, limit)) : setOriData(data);
  }, [limit, data]);
  return (
    <div className={cx("wrapper")}>
      {oriData?.map((item, index) => {
        
        return <TopCard data={item} key={index} number={index + 1} />;
      })}
    </div>
  );
}

export default memo(TopManga);
