import React from "react";
import { Button } from "./component";
import "./asset/scss/index.scss";

function App() {
  return (
    <div className="App">
      <Button className="my-button" onClick={buttonClick}>
        按钮
      </Button>
    </div>
  );
}

function buttonClick() {
  let body = document.getElementsByTagName("body")[0];
  let div = document.createElement("DIV");
  div.innerText = Math.floor(Math.random() * 9 + 1);
  body.appendChild(div);
  return;
}

export default App;
