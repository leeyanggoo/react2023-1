import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import MovieSlider from "../movie/MovieSlider";
import MovieSearch from "../movie/MovieSearch";
import MovieTag from "../movie/MovieTag";
import MovieCont from "../movie/MovieCont";

const MoviePage = () => {
  const [movies, setMoives] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=35deb8704c2372673b61a5e807e3688e&language=ko-KR&query=SEARCH_QUERY&page=1&include_adult=true&limit=30&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMoives(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=35deb8704c2372673b61a5e807e3688e&language=ko-KR&query=SEARCH_QUERY&page=1&include_adult=true&limit=30"
    )
      .then((response) => response.json())
      .then((result) => setMoives(result.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Contents title="movie">
        <ContTitle title="movie" />
        <MovieSlider movies={movies} />
        <MovieSearch onSearch={search} />
        <MovieTag />
        <MovieCont movies={movies} />
      </Contents>
    </>
  );
};

export default MoviePage;
