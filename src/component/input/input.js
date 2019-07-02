import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.focus = this.focus.bind(this);
    this.click = this.click.bind(this);
  }
  render() {
    let {
      style,
      placeholder,
      className,
      iconClassName,
      iconStyle,
      iconName,
      ...otherProps
    } = this.props;
    let classNames = className ? "zc-input " + className : "zc-input";
    let iconClassNames = iconClassName
      ? "zc-input-icon " + iconClassName
      : "zc-input-icon";
    return (
      <span className="zc-input-parents">
        <input
          {...otherProps}
          className={classNames}
          autoComplete="off"
          style={{ ...style }}
          onChange={this.change}
          onKeyUp={this.keyUp}
          placeholder={placeholder}
          onFocus={this.focus}
        />
        {iconName && (
          <span
            className={iconClassNames}
            style={{ ...iconStyle }}
            onClick={this.click}
          >
            <i className={iconName} />
          </span>
        )}
      </span>
    );
  }

  change(ev) {
    let event = ev || event;
    let { onChange } = this.props;
    if (onChange) {
      onChange(event.target.value);
    }
    return;
  }

  keyUp() {
    let { onKeyUp } = this.props;
    if (onKeyUp) {
      onKeyUp();
    }
    return;
  }

  focus() {
    let { onFocus } = this.props;
    if (onFocus) {
      onFocus();
    }
    return;
  }

  click() {
    let { onIconClick } = this.props;
    if (onIconClick) {
      onIconClick();
    }
  }
}

Input.propTypes = {
  style: PropTypes.object,
  iconStyle: PropTypes.object,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  otherProps: PropTypes.any,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
  iconName: PropTypes.string,
  onIconClick: PropTypes.func
};

export default Input;
