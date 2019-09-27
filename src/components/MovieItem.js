import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  for (var i = 0; i < movie.images.length; i++) {
    if (movie.images[i].type === "POSTER") {
      return (
        <div className="movie_item">
          <Link to={`/titles/${movie.id}`}>
            <img src={movie.images[i].url} alt={movie.images[i].id} />
          </Link>
          <figcaption className="caption">
            <strong>{movie.title}</strong>
          </figcaption>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default MovieItem;
