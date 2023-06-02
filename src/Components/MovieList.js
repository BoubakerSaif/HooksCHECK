import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      {movies.map((el) => {
        return <MovieCard movieInfo={el} />;
      })}
    </div>
  );
};

export default MovieList;
