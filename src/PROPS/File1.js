import React from "react";

const File1 = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.description}</h1>
      <h2>{props.price}</h2>
    </>
  );
};

export default File1;
