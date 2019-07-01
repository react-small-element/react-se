import React, { Component } from "react";
import PropTypes from "prop-types";

class PopupPanelsHeader extends Component {
  render() {
    let { className, style } = this.props;
    let classNames = className
      ? "zc-popup-panels-header" + className
      : "zc-popup-panels-header";
    return (
      <div className={classNames} style={style}>
        {this.props.children}
      </div>
    );
  }
}

PopupPanelsHeader.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  isShowCloseButton: PropTypes.bool
};
export default PopupPanelsHeader;
