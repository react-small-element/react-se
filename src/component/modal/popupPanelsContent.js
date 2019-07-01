import React, { Component } from "react";
import PropTypes from "prop-types";

class PopupPanlesContent extends Component {
  render() {
    let { className, style } = this.props;
    let classNames = className
      ? "zc-popup-panels-content" + className
      : "zc-popup-panels-content";
    return (
      <div className={classNames} style={style}>
        {this.props.children}
      </div>
    );
  }
}

PopupPanlesContent.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
};
export default PopupPanlesContent;
