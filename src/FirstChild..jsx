import React from "react";
import SecondChild from "./SecondChild";

const FirstChild = props => {
  const { count } = props;

  return (
    <div>
      <p>first child: {count}</p>
      <SecondChild count={count} />
    </div>
  );
};

export default FirstChild;
