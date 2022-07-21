import classNames from "classnames/bind";
import styles from "./MangaSlide.module.scss";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { SlideNextButton, SlidePrevtButton } from "cpm/ArrowSlide";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import CardPrimary from "cpm/CardPrimary";
import { memo } from "react";
const cx = classNames.bind(styles);
function MangaSlide({ data }) {
  return (
    <div>
      <Swiper
        slidesPerView={7}
        spaceBetween={8}
        slidesPerGroup={3}
        loop={true}
        //err
        // loopFillGroupWithBlank={true}
        className={cx("wrapper")}
        navigation={false}
        modules={[Navigation]}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <CardPrimary data={item} />
            </SwiperSlide>
          );
        })}

        <SlideNextButton
          icon={<IoIosArrowForward />}
          className={cx("btn-next")}
        />
        <SlidePrevtButton
          icon={<IoIosArrowBack />}
          className={cx("btn-prev")}
        />
      </Swiper>
    </div>
  );
}

export default memo(MangaSlide);
