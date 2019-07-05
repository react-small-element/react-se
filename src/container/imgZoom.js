import React, { Component } from "react";
import { ImgZoom } from "../component";

class ImgZoomDemo extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">图片容器</div>
        <div className="card-content">
          <ImgZoom
            src="http://pics.sc.chinaz.com/files/pic/pic9/201906/zzpic18767.jpg"
            smallImgIconName="iconfont icon-RectangleCopy4"
            bigImgIconName="iconfont icon-RectangleCopy6"
            toolsRotateIconName="iconfont icon-RectangleCopy7"
            toolsBigIconName="iconfont icon-RectangleCopy4"
            toolsSmallIconName="iconfont icon-Rectangle"
          />
        </div>
      </div>
    );
  }
}

export default ImgZoomDemo;
