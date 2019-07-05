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
      header: "不可移动面板",
      message: "无法移动"
    };
  }
  render() {
    return (
      <div className="card">
        <div className="card-title">弹出面板</div>
        <div className="card-content">
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
              <PopupPanelsContent>{this.state.message}</PopupPanelsContent>
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
      </div>
    );
  }

  click = isDrag => {
    this.setState({
      isDrag,
      show: true,
      header: isDrag ? "可移动面板" : "不可移动面板",
      message: isDrag ? "按下鼠标左键，拖动面板" : "无法移动"
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
