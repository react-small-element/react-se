import React, { Component } from "react";
import { Sliver, Button } from "../component";

class SliverDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      second: 3
    };
  }
  render() {
    return (
      <div className="card" style={{ position: "relative" }}>
        <div className="card-title">提示窗</div>
        <div className="card-content">
          <div className="card-tips">
            父元素需要进行定位，如相对定位：position: relative
          </div>
          <Sliver
            message={this.state.message}
            second={this.state.second}
            leftIcon="iconfont icon-RectangleCopy1"
            closeIcon="iconfont icon-RectangleCopy"
          >
            ok
          </Sliver>
          <Button
            style={{ marginRight: "20px" }}
            onClick={this.buttonClick.bind(this, "3秒后自动消失", 3)}
          >
            自动消失
          </Button>
          <Button
            style={{ marginRight: "20px" }}
            onClick={this.buttonClick.bind(this, "不会自动消失必须手动关闭", 0)}
          >
            手动消失
          </Button>
        </div>
      </div>
    );
  }

  buttonClick = (message, second) => {
    this.setState({
      message,
      second
    });
    return;
  };
}

export default SliverDemo;
