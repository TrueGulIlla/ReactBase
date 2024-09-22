import React from "react";
import { useMyContext } from "../Context/Context";

const Buttons = () => {
 
const {inc, dec} = useMyContext()
  return (
    <div>
<button onClick={inc}>+</button>
<button onClick={dec}>_</button>
    </div>
  );
};

export default Buttons;
