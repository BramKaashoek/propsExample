import React from "react";

const FifthChild = props => {
  const { count } = props;

  return (
    <div>
      <p>fifth child: {count}</p>
    </div>
  );
};

export default FifthChild;
