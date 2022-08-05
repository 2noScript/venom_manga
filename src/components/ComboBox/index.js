import classNames from "classnames/bind";
import styles from "./ComboBox.module.scss";
import Tippy from "@tippyjs/react/headless";
import { useState, useEffect, memo, useRef } from "react";
import { IoIosClose, IoMdArrowDropdown } from "react-icons/io";
import { setQueries } from "~/globalState/mangaFilterData";
import { useSelector, useDispatch } from "react-redux";
const cx = classNames.bind(styles);

function ComboBox({
  options,
  title = null,
  currentIndex = 0,
  hostName = "important",
}) {
  const [oriOptions, setOriOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [current, setCurrent] = useState(options[currentIndex].name);

  const dispath = useDispatch();
  useEffect(() => {
    if (!!searchValue) {
      const newOptions = options.filter((item) => {
        if (
          item.name
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase(), 0)
        )
          return item;
      });
      setOriOptions(newOptions);
      return;
    }
    if (!searchValue) setOriOptions(options);
  }, [searchValue]);
  return (
    <div className={cx("wrapper")}>
      <Tippy
        placement={"bottom"}
        onClickOutside={() => {
          setShowOptions(false);
        }}
        offset={[0, 8]}
        visible={showOptions}
        interactive={true}
        render={(attrs) => (
          <div className={cx("options")} tabIndex="-1" {...attrs}>
            {options.length > 6 && (
              <div className={cx("header")}>
                <div className={cx("search")}>
                  <input
                    type="text"
                    value={searchValue}
                    placeholder={"tìm kiếm"}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                    }}
                  />
                </div>
              </div>
            )}
            <div className={cx("body")}>
              <ul className={cx("list")}>
                {oriOptions.map((item, index) => {
                  const { name } = item;
                  return (
                    <li
                      className={cx(`${name === current && "active"}`)}
                      key={index}
                      onClick={() => {
                        dispath(
                          setQueries({
                            name: hostName,
                            count: index,
                          })
                        );

                        setCurrent(name);
                      }}
                    >
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      >
        <div className={cx("content")}>
          {!!current && (
            <div className={cx("current")}>
              <span className={cx("current-text")}>{current}</span>
            </div>
          )}
          {!current && (
            <div
              className={cx("title")}
              onClick={() => {
                setShowOptions(true);
              }}
            >
              {title}
            </div>
          )}
          <div
            className={cx("arrow-down")}
            onClick={() => {
              setShowOptions(!showOptions);
            }}
          >
            <IoMdArrowDropdown />
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default memo(ComboBox);
