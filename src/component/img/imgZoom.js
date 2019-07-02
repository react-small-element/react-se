import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "../modal";

class ImgZoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      deg: 0,
      width: ""
    };

    this.enlarge = this.enlarge.bind(this);
    this.rotate = this.rotate.bind(this);
    this.bigImg = this.bigImg.bind(this);
  }

  render() {
    let { show, deg } = this.state;
    let {
      boxStyle,
      style,
      src,
      alt,
      className,
      smallImgIconName,
      bigImgIconName,
      toolsRotateIconName,
      toolsBigIconName,
      toolsSmallIconName
    } = this.props;
    let classNames = className ? "zc-img-zoom " + className : "zc-img-zoom";
    return (
      <span className="zc-img-zoom-parents" style={{ ...boxStyle }}>
        <img src={src} alt={alt} style={{ ...style }} className={classNames} />
        <span className="zc-img-zoom-enlarge-icon" onClick={this.enlarge}>
          {smallImgIconName && <i className={smallImgIconName} />}
          {!smallImgIconName && <span>放大</span>}
        </span>
        {show && <Modal />}
        {show && (
          <div className="zc-img-zoom-big">
            <span className="zc-img-zoom-big-icon" onClick={this.enlarge}>
              {bigImgIconName && <i className={bigImgIconName} />}
              {!bigImgIconName && <span>关闭</span>}
            </span>
            <img
              src={src}
              style={{ transform: "rotate(" + deg + "deg)", width: "" }}
            />
            <div className="zc-img-zoom-tools">
              <span className="" onClick={this.rotate}>
                {toolsRotateIconName && <i className={toolsRotateIconName} />}
                {!toolsRotateIconName && <span>旋转</span>}
              </span>
              <span className="" onClick={this.bigImg.bind(this, "Enlarge")}>
                {toolsBigIconName && <i className={toolsBigIconName} />}
                {!toolsBigIconName && <span>放大</span>}
              </span>
              <span className="" onClick={this.bigImg.bind(this, "Narrow")}>
                {toolsSmallIconName && <i className={toolsSmallIconName} />}
                {!toolsSmallIconName && <span>缩小</span>}
              </span>
            </div>
          </div>
        )}
      </span>
    );
  }

  enlarge() {
    this.setState({
      show: !this.state.show
    });
    return;
  }
  rotate(ev) {
    this.setState({
      deg: this.state.deg + 10
    });
    return;
  }
  bigImg(type, ev) {
    let event = ev || event;
    let img = event.target.parentElement.parentElement.previousElementSibling;
    console.log(img.offsetWidth);
    if (type === "Enlarge") {
      img.style.width = img.offsetWidth * (1 + 0.1) + "px";
      //放大
    } else if (type === "Narrow") {
      img.style.width = img.offsetWidth * (1 - 0.1) + "px";
      //缩小
    }
    return;
  }
}

ImgZoom.propTypes = {
  boxStyle: PropTypes.object,
  style: PropTypes.object,
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  smallImgIconName: PropTypes.string,
  bigImgIconName: PropTypes.string,
  toolsRotateIconName: PropTypes.string,
  toolsBigIconName: PropTypes.string,
  toolsSmallIconName: PropTypes.string
};

export default ImgZoom;
