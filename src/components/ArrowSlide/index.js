import { useSwiper } from "swiper/react";
import "./arrow.scss";
function SlideNextButton(props) {
  const swiper = useSwiper();
  const { className, icon } = props;
  return (
    <button
      onClick={() => swiper.slideNext()}
      className={"swiper-btn swiper-btn-next " + className}
    >
      {icon}
    </button>
  );
}
function SlidePrevtButton(props) {
  const swiper = useSwiper();
  const { className, icon } = props;
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className={"swiper-btn swiper-btn-prev " + className}
    >
      {icon}
    </button>
  );
}

export { SlideNextButton, SlidePrevtButton };
