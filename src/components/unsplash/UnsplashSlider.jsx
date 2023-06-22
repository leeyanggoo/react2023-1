import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

const UnsplashImg = ({ sliderImage }) => {
  return (
    <a
      href={`https://unsplash.com/photos/${sliderImage.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={sliderImage.urls.full} alt={sliderImage.alt_description} />
    </a>
  );
};

const UnsplashSlider = ({ sliderImages }) => {
  const swiperRefLocal = useRef();

  const handleMouseEnter = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.start();
  };

  return (
    <div
      className="unsplash__slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        ref={swiperRefLocal}
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {sliderImages.map((sliderImage, index) => (
          <SwiperSlide key={index}>
            <UnsplashImg sliderImage={sliderImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UnsplashSlider;
