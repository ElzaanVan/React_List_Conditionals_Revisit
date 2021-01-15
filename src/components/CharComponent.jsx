import React from "react";

const style = {
  display: "inline-block",
  padding: "16px",
  textAlign: "center",
  margin: "16px",
  border: "1px solid black"
};

function CharComponent(props) {
  return (
    <li style={style} onClick={props.clicked}>
      {props.character}
    </li>
  );
}

export default CharComponent;
