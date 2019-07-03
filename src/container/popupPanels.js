import React, { Component } from "react";
import {
  Modal,
  PopupPanels,
  PopupPanelsHeader,
  PopupPanelsContent,
  PopupPanelsFooter,
  Button
} from "../component";

class PopupPanelsDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrag: false,
      show: false,
      header: "不可移动面板"
    };
  }
  render() {
    return (
      <div>
        <h1>弹出面板</h1>
        <Button
          style={{ margin: "20px" }}
          onClick={this.click.bind(this, true)}
        >
          面板可移动
        </Button>
        <Button onClick={this.click.bind(this, false)}>面板不可移动</Button>
        {this.state.show && <Modal />}
        {this.state.show && (
          <PopupPanels isDrag={this.state.isDrag}>
            <PopupPanelsHeader>{this.state.header}</PopupPanelsHeader>
            <PopupPanelsContent>内容</PopupPanelsContent>
            <PopupPanelsFooter>
              <div style={{ textAlign: "right" }}>
                <Button style={{}} onClick={this.close}>
                  关闭
                </Button>
              </div>
            </PopupPanelsFooter>
          </PopupPanels>
        )}
      </div>
    );
  }

  click = isDrag => {
    this.setState({
      isDrag,
      show: true,
      header: isDrag ? "可移动面板" : "不可移动面板"
    });
  };

  close = () => {
    console.log("ok");
    this.setState({
      show: false
    });
  };
}

export default PopupPanelsDemo;
