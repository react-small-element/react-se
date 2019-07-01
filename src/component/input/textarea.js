import React, { Component } from "react";
import PropTypes from "prop-types";

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.textchange = this.textchange.bind(this);
  }
  render() {
    const { className, ...otherProps } = this.props;
    let classNames = className ? "zc-textarea " + className : "zc-textarea";
    return (
      <textarea
        {...otherProps}
        className={classNames}
        onChange={this.textchange}
        rows={this.props.rows}
      />
    );
  }
  textchange(event) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(event.target.value);
    }
    return;
  }
}

Textarea.propTypes = {
  otherProps: PropTypes.any,
  rows: PropTypes.number,
  onChange: PropTypes.func
};
export default Textarea;
