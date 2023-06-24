import React from "react";
import Contents from "../layout/Contents";
import Slider from "../section/Slider";
import Intro from "../section/Intro";
import Portfolio from "../section/Portfolio";
import Youtube from "../section/Youtube";
import Unsplash from "../section/Unsplash";
import Movie from "../section/Movie";
import { useState, useEffect } from "react";

const Home = () => {
  const [images, setImages] = useState([]);
  const [youtubes, setYoutubes] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // unsplash
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://api.unsplash.com/photos?client_id=jH0imhhs5rWunB3C4xoZHkzW4cuMAi0DT3c3uBNHn54&per_page=30",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // Filter out only horizontal images
        const verticalImages = result.filter(
          (image) => image.height > image.width
        );
        setImages(verticalImages);
      })
      .catch((error) => console.log("error", error));

    // youtube
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=%EB%AC%B8%ED%95%99&type=video&key=AIzaSyC5_JL1EdBzYtbTM03behVWBCGgNq_Y-18"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));

    // movie
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=35deb8704c2372673b61a5e807e3688e&language=ko-KR&query=SEARCH_QUERY&page=1&limit=30"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Contents>
        <Slider attr={"slider__wrap NanumM"} />
        <Intro attr={"intro__wrap section SCoreDream"} />
        <Portfolio attr={"port__wrap section center bg-blue NanumM"} />
        <Youtube
          attr={["youtube__wrap", "section", "NanumM"]}
          youtubes={youtubes}
        />
        <Unsplash
          attr={["unsplash__wrap", "section", "bg-blue", "NanumM"]}
          images={images}
        />
        <Movie attr={["movies__wrap", "section", "NanumM"]} movies={movies} />
      </Contents>
    </>
  );
};

export default Home;
