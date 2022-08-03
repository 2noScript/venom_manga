import { Swiper, SwiperSlide } from "swiper/react";
import { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./BannerSlide.module.scss";
import { EffectFade, Navigation } from "swiper";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { SlideNextButton, SlidePrevtButton } from "cpm/ArrowSlide";
import { routesConfig } from "~/configs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
const cx = classNames.bind(styles);
function BannerSlide({ data, limit }) {
  const [oriData, setOriData] = useState(null);
  useEffect(() => {
    limit ? setOriData(data?.slice(0, limit)) : setOriData(data);
  }, [limit, data]);
  return (
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
      {oriData?.map((item, index) => {
        const { chapter, name, description, types, keyManga, avatar } = item;
        return (
          <SwiperSlide className={cx("slide")} key={index}>
            <div
              style={{ backgroundImage: `url(${avatar})` }}
              className={cx("slide-bg")}
            ></div>
            <div className={cx("slide-content")}>
              <div className={cx("left")}>
                <div className={cx("chapter")}>chapter {chapter}</div>
                <div className={cx("name")}>{name}</div>
                <div className={cx("description")}>{description}</div>
                <ul className={cx("tag-list")}>
                  {types.split(",").map((item, index) => {
                    return (
                      <li key={index} className={cx("tag")}>
                        {item.trim()}
                      </li>
                    );
                  })}
                </ul>
                <div className={cx("btn-route")}>
                  <div className={cx("detail")}>
                    <Link
                      to={`${routesConfig.mangaDetail.replace(
                        ":keyManga",
                        ""
                      )}${keyManga}`}
                    >
                      chi tiết
                    </Link>
                  </div>
                  <div className={cx("follow")}>
                    <Link
                      to={`${routesConfig.mangaRead.replace(":keyChap", "")}`}
                    >
                      theo dõi
                    </Link>
                  </div>
                </div>
              </div>
              <div className={cx("right")}>
                <div
                  className={cx("avatar")}
                  style={{ backgroundImage: `url(${avatar})` }}
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
      <SlidePrevtButton icon={<IoIosArrowBack />} className={cx("slide-btn")} />
    </Swiper>
  );
}

export default memo(BannerSlide);
