import React, { useState } from "react";
import FirstChild from "./FirstChild.";

const Container = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <button
        onClick={() => {
          increase();
        }}
      >
        click me!
      </button>
      <p> container: {counter}</p>

      <FirstChild count={counter} />
    </div>
  );
};

export default Container;
