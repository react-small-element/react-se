import React, { Component } from "react";
import { Button } from "../component";

class ButtonDemo extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>按钮</h1>
        <Button style={{ marginRight: "20px" }} onClick={buttonClick}>
          按钮
        </Button>
        <Button
          style={{ marginRight: "20px" }}
          onClick={buttonClick}
          disabled={true}
        >
          禁用按钮
        </Button>
        <Button
          style={{ marginRight: "20px" }}
          onClick={buttonClick}
          leftIcon="iconfont icon-RectangleCopy4"
        >
          左图标按钮
        </Button>
        <Button
          style={{ marginRight: "20px" }}
          onClick={buttonClick}
          rightIcon="iconfont icon-RectangleCopy4"
        >
          右图标按钮
        </Button>
      </div>
    );
  }
}

function buttonClick() {
  alert("您点击了按钮");
  return;
}

export default ButtonDemo;
