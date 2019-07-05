import React, { Component } from "react";
import { UploadFile } from "../component";
import { img1 } from "../asset";

class UploadFileDemo extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">上传按钮</div>
        <div className="card-content">
          <UploadFile onChange={this.change}>上传按钮</UploadFile>
          <div className="line-height" />
          <UploadFile
            onChange={this.change}
            leftIcon="iconfont icon-RectangleCopy8"
            boxStyle={{ marginRight: "20px" }}
          >
            左图标上传按钮
          </UploadFile>
          <div className="line-height" />
          <UploadFile
            onChange={this.change}
            rightIcon="iconfont icon-RectangleCopy8"
            boxStyle={{ marginRight: "20px" }}
          >
            右图标上传按钮
          </UploadFile>
          <div className="card-tips" style={{ paddingTop: "10px" }}>
            图片上传按钮
          </div>
          <UploadFile
            onChange={this.change}
            src={img1}
            imgStyle={{ width: "120px", height: "30px" }}
          >
            右图标上传按钮
          </UploadFile>
        </div>
      </div>
    );
  }

  change = file => {
    alert(file.name);
    return;
  };
}

export default UploadFileDemo;
