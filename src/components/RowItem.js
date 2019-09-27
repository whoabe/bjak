import React from "react";
import MoviesContainer from "./MoviesContainer";
// import Slider from "./Slider";

const RowItem = ({ row }) => {
  return (
    <li className="row_item">
      <MoviesContainer row={row} />
      <h1 className="row_title">{row.row_name}</h1>
    </li>
  );
};

export default RowItem;
