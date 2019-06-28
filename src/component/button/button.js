import React, { Component } from "react";
import PropTypes from "prop-types";
import { CONSTANT } from "../constant";

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
 * @props onMouseEnter 鼠标进入按钮时，执行父组件的进入事件
 * @props onMouseLeave 鼠标离开按钮时，执行父组件的离开事件
 * @props edef 是否阻止默认事件
 * @props ...otherProps button的其他属性
 */
class Button extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  render() {
    let {
      leftIcon,
      leftIconStyle,
      rightIcon,
      rightIconStyle,
      style,
      disabled,
      className,
      ...otherProps
    } = this.props;
    console.log(rightIcon);
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
        {...otherProps}
        style={{ ...style }}
        className={classNames}
        disabled={disabledClick}
        onClick={this.click}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
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

  click(event) {
    let { onClick, disabled, edef } = this.props;
    if (!disabled && onClick) {
      onClick();
    }
    //阻止默认行为
    if (edef) {
      if (event.stopPropagation) {
        event.stopPropagation();
      }
      if (event.preventDefault) {
        event.preventDefault();
      }
      if (event.cancelable) {
        event.cancelable = true;
      }
      return false;
    }
    return;
  }

  mouseEnter(event) {
    let { onMouseEnter, disabled } = this.props;
    if (!disabled && onMouseEnter) {
      onMouseEnter();
    }
    return false;
  }
  mouseLeave(event) {
    let { onMouseLeave, disabled } = this.props;
    if (!disabled && onMouseLeave) {
      onMouseLeave();
    }
    return false;
  }
}

const ICON_PADDDING_LEVEL = CONSTANT.ICON_PADDDING_LEVEL;

Button.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.string,
  leftIconStyle: PropTypes.object,
  rightIcon: PropTypes.string,
  rightIconStyle: PropTypes.object,
  style: PropTypes.object,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  edef: PropTypes.string
};

export default Button;
