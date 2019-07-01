import React from "react";
import {
  Button,
  Sliver,
  Circle,
  Modal,
  PopupPanels,
  PopupPanelsHeader,
  PopupPanelsContent,
  PopupPanelsFooter,
  Input,
  Textarea,
  AutoSize,
  ImgZoom
} from "./component";
import "./asset/scss/index.scss";

function App() {
  return (
    <div className="App">
      {/* <Button className="my-button" onClick={buttonClick}>
        按钮
      </Button>
      <Sliver message="okokok" second={0} leftIcon="iconfont icon-icon-refresh">
        ok
      </Sliver>
      <Circle>1</Circle> */}
      {/* <Modal />
      <PopupPanels isDrag={true}>
        <PopupPanelsHeader>头</PopupPanelsHeader>
        <PopupPanelsContent>内容</PopupPanelsContent>
        <PopupPanelsFooter>脚</PopupPanelsFooter>
      </PopupPanels> */}
      {/* <Input />
      <Textarea /> */}
      {/* <AutoSize reduceHeight={100} reduceWidth={100} /> */}
      <ImgZoom src="http://pics.sc.chinaz.com/files/pic/pic9/201906/zzpic18767.jpg" />
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
