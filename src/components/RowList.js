// import React, { Component } from "react";

// export default class MoviesList extends Component {
//   render() {
//     return <div>MoviesList</div>;
//   }
// }

import React from "react";
import RowItem from "./RowItem";

const RowList = ({ rows }) => {
  if (rows.length > 0) {
    const renderedList = rows.map(row => {
      return <RowItem key={row.obj_id} row={row} />;
    });
    return <div>{renderedList}</div>;
  } else {
    return null;
  }
};

// const MoviesList = ({ movies }) => {
//   return (
//     <div>
//       <MovieItem />
//       {console.log(movies)}
//     </div>
//   );
// };

export default RowList;
