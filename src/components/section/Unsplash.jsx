import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import { Link } from "react-router-dom";

const UnsplashImg = ({ image }) => {
  return (
    <a
      href={`https://unsplash.com/photos/${image.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={image.urls.thumb} alt={image.alt_description} />
    </a>
  );
};

const Unsplash = ({ attr, images }) => {
  const swiperRefLocal = useRef();

  const handleMouseEnter = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.start();
  };
  return (
    <section
      id="unsplashSection"
      className={`${attr[0]} ${attr[1]} ${attr[2]} ${attr[3]}`}
    >
      <div className="unsplash__inner">
        <div className="unsplash__header container">
          <h3>시요일 감성</h3>
          <p>
            시인은
            <br />
            관찰하는 사람이다.
          </p>
          <Link to="/unsplash" className="button-green">
            자세히 보기
          </Link>
        </div>
        <div className="unsplash__body">
          <div
            className="unsplash__item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Swiper
              ref={swiperRefLocal}
              slidesPerView="9"
              loop={true}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <UnsplashImg image={image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unsplash;
