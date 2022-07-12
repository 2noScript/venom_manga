import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { BiLoaderCircle } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import { memo, useState, useEffect, useMemo, useRef } from "react";
import { useFetch } from "~/hooks";
import Result from "../Result";
import Tippy from "@tippyjs/react/headless";
const cx = classNames.bind(styles);

function Search({ className }) {
  const [cleanHide, setCleanHide] = useState(true);
  const [value, setValue] = useState("");
  const [data] = useFetch("get", "new-update");
  const inputRef = useRef();
  useEffect(() => {
    value.length > 0 ? setCleanHide(false) : setCleanHide(true);
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
          {data &&
            data.jsonData.map((item, index) => {
              return <Result key={index} data={item} />;
            })}
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
        <div className={cx("loading")}>
          <BiLoaderCircle />
        </div>
        {!cleanHide && (
          <div className={cx("clean")} onClick={clean}>
            <MdClear />
          </div>
        )}
      </div>
    </Tippy>
  );
}

export default memo(Search);
