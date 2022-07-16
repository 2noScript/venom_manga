import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { BiLoaderCircle } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import { memo, useState, useEffect, useMemo, useRef } from "react";
import Result from "../Result";
import NoneResult from "../NoneResults";
import Bubble from "../Bubble";
import Tippy from "@tippyjs/react/headless";
import fetchApi from "~/Fetch";
import { useDebounce } from "@react-hook/debounce";
const cx = classNames.bind(styles);

function Search({ className }) {
  const [cleanHide, setCleanHide] = useState(true);
  const [loadingHide, setLoadingHide] = useState(true);
  const [value, setValue] = useState("");
  const [results, setResult] = useState();
  const [noneResults, setNoneResults] = useState(false);

  const [debounced, setDebounced] = useDebounce(value, 500);
  const inputRef = useRef();
  useEffect(() => {
    const res = async () => {
      try {
        setLoadingHide(false);
        const { data } = await fetchApi.get(`key-word?kw=${value}`);
        setResult(data.jsonData);
        setNoneResults(data.jsonData.length === 0);
        setLoadingHide(true);
      } catch {
        console.log("err");
      }
    };

    if (!debounced) {
      setResult([]);
      return;
    }

    res();
  }, [debounced]);

  useEffect(() => {
    value.length > 0 ? setCleanHide(false) : setCleanHide(true);
    setDebounced(value);
    //fix
    value.length === 0 && setNoneResults(false);
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
      interactive={true}
      render={(attrs) => (
        <div className={cx("results")} tabIndex="-1" {...attrs}>
          {results && !noneResults ? (
            results.map((item, index) => {
              return <Result key={index} data={item} />;
            })
          ) : (
            <NoneResult />
          )}
        </div>
      )}
      offset={[0, 8]}
      visible={value.length > 0}
    >
      <div className={cx("wrapper")}>
        <input
          ref={inputRef}
          type="text"
          placeholder="tìm manga"
          onChange={(e) => {
            valueChange(e);
          }}
          value={value}
          spellCheck={false}
        />
        {results && results.length > 0 && <Bubble data={results.length} />}
        {!loadingHide && (
          <div className={cx("loading")}>
            <BiLoaderCircle />
          </div>
        )}
        {!cleanHide && loadingHide && (
          <div className={cx("clean")} onClick={clean}>
            <MdClear />
          </div>
        )}
      </div>
    </Tippy>
  );
}

export default memo(Search);
