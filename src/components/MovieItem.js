import React from "react";

const MovieItem = ({ movie }) => {
  // console.log({ movie });
  // return <div className="slide">{movie.id}</div>;

  for (var i = 0; i < movie.images.length; i++) {
    if (movie.images[i].type === "POSTER") {
      return (
        <div className="movie_item">
          <a href="">
            <img src={movie.images[i].url} alt={movie.images[i].id} />
          </a>
          <strong>{movie.title}</strong>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default MovieItem;
