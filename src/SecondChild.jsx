import React from "react";
import ThirdChild from "./ThirdChild";

const SecondChild = props => {
  const { count } = props;

  return (
    <div>
      <p>second child: {count}</p>
      <ThirdChild count={count} />
    </div>
  );
};

export default SecondChild;
