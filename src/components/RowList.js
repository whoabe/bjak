import React from "react";
import RowItem from "./RowItem";

const RowList = ({ rows }) => {
  if (rows.length > 0) {
    const renderedList = rows.map(row => {
      return <RowItem key={row.obj_id} row={row} />;
    });
    return <ul className="row_list">{renderedList}</ul>;
  } else {
    return null;
  }
};

export default RowList;
