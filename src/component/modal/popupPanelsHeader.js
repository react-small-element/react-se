import React, { Component } from "react";
import PropTypes from "prop-types";

class PopupPanelsHeader extends Component {
  render() {
    let { className, style, children } = this.props;
    let classNames = className
      ? "zc-popup-panels-header " + className
      : "zc-popup-panels-header";
    return (
      <div className={classNames} style={style}>
        {children}
      </div>
    );
  }
}

PopupPanelsHeader.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
};
export default PopupPanelsHeader;
