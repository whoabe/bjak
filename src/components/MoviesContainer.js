import React from "react";
import MovieItem from "./MovieItem";

const MoviesContainer = ({ row }) => {
  if (row.data.length > 0) {
    const movieList = row.data.map(movie => {
      return <MovieItem key={movie.id} movie={movie} />;
    });
    return <section className="movies_container">{movieList}</section>;
  } else {
    return null;
  }
};

export default MoviesContainer;
