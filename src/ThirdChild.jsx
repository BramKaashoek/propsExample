import React from "react";
import FourthChild from "./FourthChild";

const ThirdChild = props => {
  const { count } = props;

  return (
    <div>
      <p>third child: {count}</p>
      <FourthChild count={count} />
    </div>
  );
};

export default ThirdChild;
