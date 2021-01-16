import React, { useState } from "react";
import CharComponent from "./components/CharComponent";
import style from "./styles.css";
import Radium, { StyleRoot } from "radium";
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

  const buttonStyle = {
    padding: "20px 20px",
    margin: "30px 25px",
    backgroundColor: "#707070",
    borderColor: "#92817a",
    color: "white",
    fontFamily: "arial",
    fontStyle: "bold",
    fontSize: "1.5rem",
    ":hover": {
      backgroundColor: "#bedbbb",
      color: "black"
    }
  };

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

  let button = null;

  if (buttonToggler) {
    button = (
      <div>
        <input
          onChange={changeHandler}
          placeholder="Type here"
          maxLength={15}
          value={inputText}
        ></input>

        <ValidationComponent text={inputText.length} />
        <ul className={classes.join(" ")}>{charList}</ul>
      </div>
    );
    buttonStyle.backgroundColor = "#92817a";
    buttonStyle[":hover"] = {
      backgroundColor: "#bedbbb",
      color: "black"
    };
  }

  return (
    <StyleRoot>
      <div className="App">
        <h1>Hello</h1>
        <button style={buttonStyle} onClick={buttonHandler}>
          Click
        </button>
        {button}
      </div>
    </StyleRoot>
  );
}

export default Radium(App);
