import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * @class Button
 * @extends {Component}
 * @props disabled 是否被禁用
 * @props leftIcon 左侧图标class值
 * @props leftIconStyle 左侧图标style值
 * @props rightIcon 右侧图标class值
 * @props rightIconStyle 右侧图标style值
 * @props style 按钮样式
 * @props children 子元素
 * @props onClick 点击按钮时，执行父组件的点击事件
 * @props
 */
class Button extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  render() {
    let {
      leftIcon,
      leftIconStyle,
      rightIcon,
      rightIconStyle,
      style,
      disabled,
      className
    } = this.props;
    let disabledClick = false;
    if (disabled) {
      disabledClick = true;
    }
    let classNames = "zc-button";
    if (className) {
      classNames = classNames + " " + className;
    }
    return (
      <button
        style={{ ...style }}
        className={classNames}
        disabled={disabledClick}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        onClick={this.click}
      >
        {leftIcon && (
          <span
            style={{
              paddingRight: ICON_PADDDING_LEVEL,
              ...leftIconStyle
            }}
          >
            <i className={leftIcon} />
          </span>
        )}
        <span>{this.props.children}</span>
        {rightIcon && (
          <span
            style={{
              paddingLeft: ICON_PADDDING_LEVEL,
              ...rightIconStyle
            }}
          >
            <i className={rightIcon} />
          </span>
        )}
      </button>
    );
  }

  click() {
    let { onClick, disabled } = this.props;
    if (!disabled && onClick) {
      onClick();
    }
    return;
  }
}

const ICON_PADDDING_LEVEL = "4px";

Button.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.string,
  leftIconStyle: PropTypes.object,
  rightIcon: PropTypes.string,
  rightIconStyle: PropTypes.object,
  style: PropTypes.object,
  onClick: PropTypes.func
};

export default Button;
