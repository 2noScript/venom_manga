import { Swiper, SwiperSlide } from "swiper/react";
import { memo } from "react";

import classNames from "classnames/bind";
import styles from "./BannerSlide.module.scss";
import { EffectFade, Navigation } from "swiper";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { SlideNextButton, SlidePrevtButton } from "cpm/ArrowSlide";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
const cx = classNames.bind(styles);
function BannerSlide({ data }) {
  return (
    <>
      {data && (
        <Swiper
          spaceBetween={0}
          effect={"fade"}
          loop={true}
          pagination={{
            clickable: false,
          }}
          modules={[EffectFade, Navigation]}
          className={cx("wrapper")}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide className={cx("slide")} key={index}>
                <div
                  style={{ backgroundImage: `url(${item.avatar})` }}
                  className={cx("slide-bg")}
                ></div>

                <div className={cx("slide-content")}>
                  <div className={cx("left")}>
                    <div className={cx("chapter")}>chapter {item.chapter}</div>
                    <div className={cx("name")}>{item.name}</div>
                    <div className={cx("description")}>{item.description}</div>
                    <ul className={cx("tag-list")}>
                      {item.types.split(",").map((item, index) => {
                        return (
                          <li key={index} className={cx("tag")}>
                            {item.trim()}
                          </li>
                        );
                      })}
                    </ul>
                    <div className={cx("btn")}>
                      <div className={cx("")}></div>
                    </div>
                  </div>
                  <div className={cx("right")}>
                    <div
                      className={cx("avatar")}
                      style={{ backgroundImage: `url(${item.avatar})` }}
                    ></div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <SlideNextButton
            icon={<IoIosArrowForward />}
            className={cx("slide-btn")}
          />
          <SlidePrevtButton
            icon={<IoIosArrowBack />}
            className={cx("slide-btn")}
          />
        </Swiper>
      )}
    </>
  );
}

export default memo(BannerSlide);
