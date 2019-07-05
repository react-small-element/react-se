import React, { Component } from "react";
import { Button } from "../component";

class ButtonDemo extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">按钮</div>
        <div className="card-content">
          <Button onClick={buttonClick}>按钮</Button>
          <div className="line-height" />
          <Button onClick={buttonClick} disabled={true}>
            禁用按钮
          </Button>
          <div className="line-height" />
          <Button onClick={buttonClick} leftIcon="iconfont icon-RectangleCopy4">
            左图标按钮
          </Button>
          <div className="line-height" />
          <Button
            onClick={buttonClick}
            rightIcon="iconfont icon-RectangleCopy4"
          >
            右图标按钮
          </Button>
        </div>
      </div>
    );
  }
}

function buttonClick() {
  alert("您点击了按钮");
  return;
}

export default ButtonDemo;
