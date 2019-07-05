import React from "react";
import FifthChild from "./FifthChild";

const FourthChild = props => {
  const { count } = props;

  return (
    <div>
      <p>fourt child: {count}</p>
      <FifthChild count={count} />
    </div>
  );
};

export default FourthChild;
