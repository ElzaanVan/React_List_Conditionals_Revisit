import React, { useState } from "react";
import CharComponent from "./components/CharComponent";
import Input from "./components/Input";
import ValidationComponent from "./components/ValidationComponent";

function App() {
  //I love using useState
  //Very effective and neat
  const [inputText, setInputText] = useState("");
  const [buttonToggler, setButtonToggler] = useState(false);

  //Character component
  //Creating a list of the first character
  //Delete any character when clicked
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

  function deleteItem(index) {
    const text = inputText.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    setInputText(updatedText);
  }

  //This is for the input
  function changeHandler(event) {
    setInputText(event.target.value);
  }

  //Some dynamic styling
  const classes = [];
  if (inputText.length <= 5) {
    classes.push("blue");
  }
  if (inputText.length <= 15) {
    classes.push("bold");
  }

  //Creating a toggle effect for the button
  let button = null;

  if (buttonToggler) {
    button = (
      <div>
        <Input change={changeHandler} val={inputText} />
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
        onClick={() => {
          setButtonToggler(!buttonToggler);
        }}
      >
        Click
      </button>
      {button}
    </div>
  );
}

export default App;
