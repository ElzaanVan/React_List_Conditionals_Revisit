import React, { useState } from "react";
import CharComponent from "./components/CharComponent";
import "./styles.css";
import ValidationComponent from "./components/ValidationComponent";

function App() {
  const [inputText, setInputText] = useState("");
  const [buttonToggler, setButtonToggler] = useState(false);

  const charList = inputText.split("").map((ch, index) => {
    return (
      <CharComponent
        character={ch}
        key={index}
        id={index}
        clicked={() => deleteItem(index)}
      />
    );
  });

  function changeHandler(event) {
    setInputText(event.target.value);
  }

  function deleteItem(index) {
    const text = inputText.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    setInputText(updatedText);
  }

  function buttonHandler() {
    setButtonToggler(true);
  }

  const classes = [];
  if (inputText.length <= 5) {
    classes.push("blue");
  }
  if (inputText.length <= 15) {
    classes.push("bold");
  }

  let button = false;

  if (buttonToggler) {
    button = (
      <div>
        <input
          onChange={changeHandler}
          placeholder=" Type here"
          maxLength={15}
          value={inputText}
        ></input>

        <ValidationComponent text={inputText.length} />
        <ul className={classes.join(" ")}>{charList}</ul>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <button
        className="button"
        clicked={buttonToggler}
        onClick={buttonHandler}
      >
        Click
      </button>
      {button}
    </div>
  );
}

export default App;
