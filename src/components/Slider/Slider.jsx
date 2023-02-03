import "./Slider.css";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper } from "swiper/react";
import { FreeMode } from "swiper";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  SWIPER_BREAKPOINTS_MAIN,
  SWIPER_BREAKPOINTS_OTHER,
} from "../../utils/constants";

export default function Slider({ title, children }) {
  const location = useLocation();
  const swiperRef = useRef();

  useEffect(() => {
    location.pathname !== "/" && swiperRef.current.swiper.slideTo(0);
  }, [children]);

  return (
    <div className='slider'>
      {title ? <span className='slider__title'>{title}</span> : null}
      <Swiper
        slidesPerView={1.8}
        spaceBetween={15}
        modules={[FreeMode]}
        freeMode={true}
        breakpoints={
          location.pathname === "/"
            ? SWIPER_BREAKPOINTS_MAIN
            : SWIPER_BREAKPOINTS_OTHER
        }
        ref={swiperRef}
      >
        {children}
      </Swiper>
    </div>
  );
}
