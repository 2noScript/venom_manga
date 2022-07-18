import classNames from "classnames/bind";
import styles from "./Image.module.scss";
import noImage from "./noImage.png";
import { memo } from "react";
const cx = classNames.bind(styles);

function Image({ className, src, height, width, alt }) {
  return (
    <img
      src={src ? src : noImage}
      alt={alt ? alt : "noImage"}
      height={height}
      width={width}
      className={cx("img", {
        [className]: className,
      })}
    />
  );
}

export default memo(Image);
