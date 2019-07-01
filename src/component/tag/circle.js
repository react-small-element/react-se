import React, { Component } from "react";
import PropTypes from "prop-types";

class Circle extends Component {
  render() {
    let { className, children, style, diameter } = this.props;
    let circleDiameter = getCircleDiameter(diameter);
    let classNames = className ? "zc-circle" + className : "zc-circle";
    return (
      <div className={classNames} style={{ ...circleDiameter, ...style }}>
        {children}
      </div>
    );
  }
}

function getCircleDiameter(diameter) {
  if (!diameter) {
    return {};
  }
  return {
    width: diameter,
    height: diameter,
    lineHeight: diameter
  };
}

Circle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object,
  diameter: PropTypes.string
};

export default Circle;
