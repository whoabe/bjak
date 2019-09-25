import React from "react";
import Slider from "./Slider";

const RowItem = ({ row }) => {
  return (
    <div>
      <Slider row={row} />
      {row.row_name}
      {/* {console.log({ row })} */}
    </div>
  );
  //   <img src={}/>;
};

export default RowItem;
