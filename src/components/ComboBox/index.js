import classNames from "classnames/bind";
import styles from "./ComboBox.module.scss";
import Tippy from "@tippyjs/react/headless";
import { useState, useEffect, memo } from "react";
const cx = classNames.bind(styles);

function ComboBox({ options, title = null, currentValue = null }) {
  const [oriOptions, setOriOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState("");
  const [currentSelect, setCurrentSelect] = useState(currentValue);
  useEffect(() => {
    if (value === "") {
      setOriOptions(options);
      return;
    }
    const newOptions = options.filter((item) => {
      if (item.value.includes(value?.toLowerCase())) return item;
    });
    setOriOptions(newOptions);
  }, [value]);
  useEffect(() => {
    setValue(currentSelect);
  }, [currentSelect]);
  return (
    <div>
      <Tippy
        placement={"bottom"}
        onClickOutside={() => {
          setShowOptions(false);
        }}
        interactive={true}
        render={(attrs) => (
          <div className={cx("options")} tabIndex="-1" {...attrs}>
            <ul>
              {oriOptions.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setCurrentSelect(item.value);
                    }}
                  >
                    {item.value}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        offset={[0, 8]}
        visible={showOptions}
      >
        <div className={cx("wrapper")}>
          <input
            placeholder={title}
            type="text"
            className={cx("content")}
            onFocus={() => {
              setShowOptions(true);
            }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          ></input>
        </div>
      </Tippy>
    </div>
  );
}

export default memo(ComboBox);
