import React, { Component } from "react";
import { AutoSize } from "../component";

class AutoSizeDemo extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">自适应容器</div>
        <div className="card-content">
          <div className="card-tips">
            改变浏览器窗口大小将自动修改容器的宽高,该容器的 CSS 宽高属性有实际值
          </div>
          <AutoSize reduceHeight={300} reduceWidth={200} />
        </div>
      </div>
    );
  }
}

export default AutoSizeDemo;
