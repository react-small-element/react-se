import React, { Component } from "react";
import { AutoSize } from "../component";

class AutoSizeDemo extends Component {
  render() {
    return (
      <div>
        <h1>自适应容器</h1>
        改变浏览器窗口大小将自适应
        <AutoSize reduceHeight={300} reduceWidth={500} />
      </div>
    );
  }
}

export default AutoSizeDemo;
