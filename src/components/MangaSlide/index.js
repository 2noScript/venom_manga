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
import { memo, useState, useEffect } from "react";
const cx = classNames.bind(styles);
function MangaSlide({ data, limit }) {
  const [oriData, setOriData] = useState();
  useEffect(() => {
    limit ? setOriData(data.slice(0, limit)) : setOriData(data);
  }, [limit, data]);
  return (
    <div>
      <Swiper
        slidesPerView={8}
        spaceBetween={8}
        slidesPerGroup={3}
        loop={true}
        //err
        // loopFillGroupWithBlank={true}
        className={cx("wrapper")}
        navigation={false}
        modules={[Navigation]}
      >
        {oriData?.map((item, index) => {
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
