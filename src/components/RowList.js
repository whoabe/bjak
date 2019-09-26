import React from "react";
import RowItem from "./RowItem";

const RowList = ({ rows }) => {
  if (rows.length > 0) {
    const renderedList = rows.map(row => {
      return <RowItem key={row.obj_id} row={row} />;
    });
    return <section className="row_list">{renderedList}</section>;
  } else {
    return null;
  }
};

export default RowList;
