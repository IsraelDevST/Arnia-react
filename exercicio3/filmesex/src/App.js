import React, { useState } from "react";
import MoviesList from "./MoviesList";
import Movie from "./Movie";

const App = () => {
  const [movies, setMovies] = useState([
    {
      name: "Interestellar",
      year: 2014,
      director: "Christopher Nolan",
      image: "Interestellar.jpg",
    },
    {
      name: "Uma Noite no Museu",
      year: 2006,
      director: "Shawn Levy",
      image: "umanoitenomuseu.jpg",
    },
    {
      name: "Jogador Nº 1",
      year: 2018,
      director: "Steven Spielberg",
      image: "Jogador-No-1.jpg",
    },
  ]);

  const handleSortByYear = () => {
    const sortedMovies = [...movies].sort((a, b) => b.year - a.year);
    setMovies(sortedMovies);
  };

  return (
    <div>
      <h1>Filmes</h1>
      <button onClick={handleSortByYear}>Ordenar por ano</button>
      <MoviesList movies={movies} />
    </div>
  );
};

export default App;
