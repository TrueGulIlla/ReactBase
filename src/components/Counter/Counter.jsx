import React from "react";
import { useMyContext } from "../Context/Context";
import Buttons from "./Buttons";

const Counter = () => {
  const { count } = useMyContext();

  return (
    <div>
      {count}
      <Buttons />
    </div>
  );
};

export default Counter;
