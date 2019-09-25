import React from "react";

const Slide = ({ movie }) => {
  //   return <div>{movie.images.length}</div>;

  for (var i = 0; i < movie.images.length; i++) {
    if (movie.images[i].type === "POSTER") {
      return (
        <div className="slide">
          <img src={movie.images[i].url} alt={movie.images[i].id} />
        </div>
      );
    } else {
      return null;
    }
  }
};

export default Slide;
