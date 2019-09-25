import React from "react";
import Slide from "./Slide";

// const Slider = ({ row }) => {
//   return <Slide />;
// };

const Slider = ({ row }) => {
  if (row.data.length > 0) {
    const movieList = row.data.map(movie => {
      return <Slide key={movie.id} movie={movie} />;
    });
    return <div className="slider">{movieList}</div>;
  } else {
    return null;
  }
};

export default Slider;
