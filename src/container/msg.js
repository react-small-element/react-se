import React, { Component } from "react";

class MsgDemo extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">前置说明</div>
        <div className="card-content">
          <div className="card-tips">
            UI 组件属性说明 链接:{" "}
            <a
              href="https://github.com/react-small-element/react-se#react-se"
              target="_blank"
            >
              react-se#react-se
            </a>
          </div>
          <div className="card-tips" style={{ paddingTop: "10px" }}>
            主题样式修改 链接:{" "}
            <a
              href="https://github.com/react-small-element/react-se#%E4%B8%BB%E9%A2%98"
              target="_blank"
            >
              react-se#主题
            </a>
          </div>
          <div className="card-tips" style={{ paddingTop: "10px" }}>
            小工具使用说明 链接:{" "}
            <a
              href="https://github.com/react-small-element/react-se#%E5%B7%A5%E5%85%B7"
              target="_blank"
            >
              react-se#工具
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MsgDemo;
