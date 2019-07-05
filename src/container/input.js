import React, { Component } from "react";
import { Input, Textarea } from "../component";

class InputDemo extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">输入框</div>
        <div className="card-content">
          <div className="card-tips">单行输入框</div>
          <Input />
          <div className="card-tips" style={{ paddingTop: "10px" }}>
            单行输入框，带icon图标，可点击icon
          </div>
          <Input
            iconName="iconfont icon-RectangleCopy2"
            onIconClick={this.click}
          />
          <div className="card-tips" style={{ paddingTop: "10px" }}>
            多行输入文本
          </div>
          <Textarea />
        </div>
      </div>
    );
  }

  click = () => {
    alert("您点击了icon图标");
    return;
  };
}

export default InputDemo;
