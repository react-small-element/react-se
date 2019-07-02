import React, { Component } from "react";
import PropTypes from "prop-types";

class AutoSize extends Component {
  constructor(props) {
    super(props);
    let { reduceWidth, reduceHeight } = this.props;
    this.st = "";
    this.state = {
      height: getBodyHeight() - (reduceHeight || 0),
      width: getBodyWidht() - (reduceWidth || 0)
    };

    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  render() {
    let { style, className, children } = this.props;
    let classNames = className ? "zc-auto-size " + className : "zc-auto-size";
    return (
      <div
        style={{ height: this.state.height, width: this.state.width, ...style }}
        className={classNames}
      >
        {children}
      </div>
    );
  }

  onResize() {
    let { reduceWidth, reduceHeight } = this.props;
    clearTimeout(this.st);
    this.st = setTimeout(() => {
      this.setState({
        height: getBodyHeight() - (reduceHeight || 0), //reduceHeight： 保留高度
        width: getBodyWidht() - (reduceWidth || 0) //reduceWidth 保留宽度
      });
    }, 500);
    return;
  }
}

AutoSize.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
  reduceHeight: PropTypes.number,
  reduceWidth: PropTypes.number
};

/**
 * 获取body高度
 * @return {number}
 */
function getBodyHeight() {
  return document.body.offsetHeight;
}

/**
 * 获取body宽度
 * @return {number}
 */
function getBodyWidht() {
  return document.body.offsetWidth;
}

export default AutoSize;
