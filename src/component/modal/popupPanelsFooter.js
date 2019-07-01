import React, { Component } from "react";
import PropTypes from "prop-types";

class PopupPanelsFooter extends Component {
  render() {
    let { className, style } = this.props;
    let classNames = className
      ? "zc-popup-panels-footer " + className
      : "zc-popup-panels-footer";
    return (
      <div className={classNames} style={style}>
        {this.props.children}
      </div>
    );
  }
}

PopupPanelsFooter.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  isShowCloseButton: PropTypes.bool
};
export default PopupPanelsFooter;
