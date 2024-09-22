import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log(name);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return <form onSubmit={handleSubmit}> 
    <input type="text" value={name} onChange={handleChange}/>
    <button>ujujh</button>
  </form>;
};

export default Form;
