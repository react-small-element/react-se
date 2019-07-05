import React, { Component } from "react";
import { ImgZoom } from "../component";
import { img1 } from "../asset";

class ImgZoomDemo extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">图片容器</div>
        <div className="card-content">
          <ImgZoom
            src={img1}
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
