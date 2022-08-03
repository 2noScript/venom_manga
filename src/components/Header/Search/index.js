import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { BiLoaderCircle } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import { memo, useState, useEffect, useMemo, useRef } from "react";
import Result from "../Result";
import NoneResult from "../NoneResults";
import Bubble from "../Bubble";
import Tippy from "@tippyjs/react/headless";
import { useDebounce } from "@react-hook/debounce";
import { searchKeyFetch } from "~/globalState/searchKey";
import { useDispatch, useSelector } from "react-redux";
const cx = classNames.bind(styles);

function Search({ className }) {
  const [cleanHide, setCleanHide] = useState(true);
  const [value, setValue] = useState("");
  const [debounced, setDebounced] = useDebounce(value, 400);
  const { loading, data } = useSelector((state) => state.searchKey);
  const [resultShow, setResultShow] = useState(true);
  const dispatch = useDispatch();
  const inputRef = useRef();
  useEffect(() => {
    if (!debounced) {
      dispatch(searchKeyFetch(debounced));
      return;
    }
    dispatch(searchKeyFetch(debounced));
  }, [debounced]);
  useEffect(() => {
    value.length > 0 ? setCleanHide(false) : setCleanHide(true);
    setDebounced(value);
  }, [value]);
  const clean = useMemo(() => {
    return () => {
      setValue("");
      inputRef.current.focus();
    };
  }, []);
  const valueChange = useMemo(() => {
    return (e) => {
      setValue(e.target.value);
      setValue(inputRef.current.value);
    };
  }, []);
  return (
    <Tippy
      placement={"bottom"}
      onClickOutside={() => {
        setResultShow(false);
      }}
      interactive={true}
      render={(attrs) => (
        <div className={cx("results")} tabIndex="-1" {...attrs}>
          {data &&
            (data.jsonData.length ? (
              data.jsonData.map((item, index) => {
                return <Result key={index} data={item} />;
              })
            ) : (
              <NoneResult />
            ))}
        </div>
      )}
      offset={[0, 8]}
      visible={resultShow && value.length > 0}
    >
      <div className={cx("wrapper")}>
        <input
          ref={inputRef}
          type="text"
          placeholder="tìm manga"
          onChange={(e) => {
            valueChange(e);
          }}
          onClick={() => {
            setResultShow(true);
          }}
          value={value}
          spellCheck={false}
        />
        {/* {results && results.length > 0 && <Bubble data={results.length} />} */}
        {loading && (
          <div className={cx("loading")}>
            <BiLoaderCircle />
          </div>
        )}
        {!cleanHide && !loading && (
          <div className={cx("clean")} onClick={clean}>
            <MdClear />
          </div>
        )}
      </div>
    </Tippy>
  );
}

export default memo(Search);
