import React, { useState } from "react";
import CharComponent from "./components/CharComponent";
import Style from "./styles.css";
import ValidationComponent from "./components/ValidationComponent";

function App() {
  const [inputText, setInputText] = useState("");

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

  return (
    <div className="App">
      <h1>Hello</h1>
      <input
        onChange={changeHandler}
        placeholder="Type here"
        maxLength={15}
        value={inputText}
      ></input>
      <ValidationComponent text={inputText.length} />
      <ul>{charList}</ul>
    </div>
  );
}

export default App;
