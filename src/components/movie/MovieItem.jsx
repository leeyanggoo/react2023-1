import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <li>
      <a
        href={`https://www.themoviedb.org/movie/${movie.id}?language=ko`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </a>
      <em>
        <span className="title">{movie.title}</span>
        <span className="star">{movie.vote_average.toFixed(1)}</span>
      </em>
    </li>
  );
};

export default MovieItem;
