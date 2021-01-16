import React from "react";

function Input(props) {
  return (
    <input
      onChange={props.change}
      placeholder=" Type here"
      maxLength={15}
      value={props.val}
    ></input>
  );
}

export default Input;
