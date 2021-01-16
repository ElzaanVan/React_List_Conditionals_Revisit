import React from "react";
import Radium from "radium";

function ValidationComponent(props) {
  return (
    <div style={pStyle}>
      <p>{props.text}</p>
      {props.text > 7 ? <p>Text is too long</p> : <p>Text too short</p>}
    </div>
  );
}

export default Radium(ValidationComponent);

const pStyle = {
  "@media (max-width: 500px)": {
    fontSize: "1.5rem"
  },
  fontSize: "5rem"
};
