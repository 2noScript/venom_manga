import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { GENRES, SORT, STATUS } from "../const";
import ComboBox from "cpm/ComboBox";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, memo } from "react";
import { useSearchParams } from "react-router-dom";

const cx = classNames.bind(styles);
function Menu() {
  const { queries } = useSelector((state) => state.mangaFilterData);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={cx("wrapper")}>
      <ComboBox
        options={SORT}
        hostName="sort"
        currentIndex={queries.sort}
        title="lọc"
      />
      <ComboBox
        options={GENRES}
        hostName="genres"
        currentIndex={queries.genres}
        title="lọc"
      />
      <ComboBox
        options={STATUS}
        hostName="status"
        currentIndex={queries.status}
        title="lọc"
      />

      <button
        onClick={() => {
          setSearchParams({ ...queries });
        }}
      >
        filter
      </button>
    </div>
  );
}

export default memo(Menu);
