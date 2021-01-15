import React from "react";

function ValidationComponent(props) {
  return (
    <div>
      <p>{props.text}</p>
      {props.text > 7 ? <p>Text is too long</p> : <p>Text too short</p>}
    </div>
  );
}

export default ValidationComponent;
