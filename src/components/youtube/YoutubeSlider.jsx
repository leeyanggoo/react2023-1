import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

const YoutubeImg = ({ youtube }) => {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={youtube.snippet.thumbnails.high.url}
        alt={youtube.snippet.title}
      />
    </a>
  );
};

const YoutubeSlider = ({ youtubes }) => {
  const swiperRefLocal = useRef();

  const handleMouseEnter = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.start();
  };

  return (
    <div
      className="youtube__slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        ref={swiperRefLocal}
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {youtubes.map((youtube, index) => (
          <SwiperSlide key={index}>
            <YoutubeImg youtube={youtube} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default YoutubeSlider;
