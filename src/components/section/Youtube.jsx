import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import { Link } from "react-router-dom";

const YoutubeImg = ({ youtube }) => {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={youtube.snippet.thumbnails.medium.url}
        alt={youtube.snippet.title}
      />
    </a>
  );
};

const Youtube = ({ attr, youtubes }) => {
  const swiperRefLocal = useRef();

  const handleMouseEnter = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.start();
  };
  return (
    <section id="youtubeSection" className={`${attr[0]} ${attr[1]} ${attr[2]}`}>
      <div className="youtube__inner">
        <div className="youtube__header container">
          <h3>문학 유튜브 추천</h3>
          <p>
            더 다양한 강의가 유튜브를 통해 제공되고 있습니다.
            <br />
            구독과 좋아요! 부탁드립니다.
          </p>
          <Link to="/youtube" className="button-red">
            자세히 보기
          </Link>
        </div>
        <div className="youtube__body">
          <div
            className="youtube__item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Swiper
              ref={swiperRefLocal}
              slidesPerView="6"
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
        </div>
      </div>
    </section>
  );
};

export default Youtube;
