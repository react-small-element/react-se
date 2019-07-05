import React from "react";
import {
  ButtonDemo,
  SliverDemo,
  CircleDemo,
  PopupPanelsDemo,
  InputDemo,
  AutoSizeDemo,
  ImgZoomDemo,
  UploadFileDemo
} from "./container";
import "./asset/scss/index.scss";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="title">react-se UI 示例</div>
      <ButtonDemo />
      <SliverDemo />
      <CircleDemo />
      <PopupPanelsDemo />
      <InputDemo />
      <ImgZoomDemo />
      <UploadFileDemo />
      <AutoSizeDemo />
      <div
        style={{
          textAlign: "center",
          fontSize: "12px",
          color: "#c5c5c5",
          padding: "60px 0px"
        }}
      >
        --- 已经到底啦 (*^__^*) ---
      </div>
    </div>
  );
}

export default App;
