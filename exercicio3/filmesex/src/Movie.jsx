import React from "react";

const Movie = ({ movie }) => {
  const { name, year, director, image } = movie;

  return (
    <div>
      <h3>{name}</h3>
      <img src={'../assets/${image}`'} alt={name} />
      <p>Ano de lançamento: {year}</p>
      <p>Diretor: {director}</p>
    </div>
  );
};

export default Movie;
