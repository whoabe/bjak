import React from "react";
import MoviesContainer from "./MoviesContainer";
// import Slider from "./Slider";

const RowItem = ({ row }) => {
  return (
    <div className="row_item">
      {/* <Slider row={row} /> */}
      <MoviesContainer row={row} />
      <h1 className="row_title">{row.row_name}</h1>
    </div>
  );
};

export default RowItem;
