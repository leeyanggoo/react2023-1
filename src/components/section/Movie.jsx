import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import { Link } from "react-router-dom";

const MovieImg = ({ movie }) => {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}?language=ko`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.title}
      />
    </a>
  );
};

const Movie = ({ attr, movies }) => {
  const swiperRefLocal = useRef();

  const handleMouseEnter = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.start();
  };
  return (
    <section id="movieSection" className={`${attr[0]} ${attr[1]} ${attr[2]}`}>
      <div className="movie__inner">
        <div className="movie__header container">
          <h3>시요일 영화 추천</h3>
          <p>
            시요일의 시선이 닿은 곳.
            <br />
          </p>
          <Link to="/movie" className="button-blue">
            자세히 보기
          </Link>
        </div>
        <div className="movie__body">
          <div
            className="movie__item"
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
              {movies.map((movie, index) => (
                <SwiperSlide key={index}>
                  <MovieImg movie={movie} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
