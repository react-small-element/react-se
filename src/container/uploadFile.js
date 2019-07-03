import React, { Component } from "react";
import { UploadFile } from "../component";

class UploadFileDemo extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>上传按钮</h1>
        <UploadFile onChange={this.change} boxStyle={{ marginRight: "20px" }}>
          上传按钮
        </UploadFile>
        <UploadFile
          onChange={this.change}
          leftIcon="iconfont icon-RectangleCopy8"
          boxStyle={{ marginRight: "20px" }}
        >
          左图标上传按钮
        </UploadFile>
        <UploadFile
          onChange={this.change}
          rightIcon="iconfont icon-RectangleCopy8"
          boxStyle={{ marginRight: "20px" }}
        >
          右图标上传按钮
        </UploadFile>
        <h1>图片上传按钮</h1>
        <UploadFile
          onChange={this.change}
          src="http://pics.sc.chinaz.com/files/pic/pic9/201906/zzpic18767.jpg"
          imgStyle={{ width: "80px", height: "30px" }}
        >
          右图标上传按钮
        </UploadFile>
      </div>
    );
  }

  change = file => {
    alert(file.name);
    return;
  };
}

export default UploadFileDemo;
