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
    let { boxStyle, style, src, alt, className } = this.props;
    let classNames = className ? "zc-img-zoom " + className : "zc-img-zoom";
    return (
      <span className="zc-img-zoom-parents" style={{ ...boxStyle }}>
        <img src={src} alt={alt} style={{ ...style }} className={classNames} />
        <span className="zc-img-zoom-enlarge-icon" onClick={this.enlarge}>
          <i className="iconfont icon-icon-refresh" />
        </span>
        {show && <Modal />}
        {show && (
          <div className="zc-img-zoom-big">
            <span className="zc-img-zoom-big-icon" onClick={this.enlarge}>
              <i className="iconfont icon-icon-refresh" />
            </span>
            <img
              src={src}
              style={{ transform: "rotate(" + deg + "deg)", width: "" }}
            />
            <div className="zc-img-zoom-tools">
              <span className="" onClick={this.rotate}>
                <i className="iconfont icon-icon-refresh" />
              </span>
              <span className="" onClick={this.bigImg.bind(this, "Enlarge")}>
                <i className="iconfont icon-icon-refresh" />
              </span>
              <span className="" onClick={this.bigImg.bind(this, "Narrow")}>
                <i className="iconfont icon-icon-refresh" />
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

export default ImgZoom;
