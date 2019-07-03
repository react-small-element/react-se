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

function App() {
  return (
    <div className="App">
      <ButtonDemo />
      <SliverDemo />
      <CircleDemo />
      <PopupPanelsDemo />
      <InputDemo />
      <AutoSizeDemo />
      <ImgZoomDemo />
      <UploadFileDemo />
    </div>
  );
}

export default App;
