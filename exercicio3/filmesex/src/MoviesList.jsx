import React from "react";
import Movie from "./Movie";

const MoviesList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;