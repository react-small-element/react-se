import React, { Component } from "react";
import PropTypes from "prop-types";

class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.fileChange = this.fileChange.bind(this);
    this.click = this.click.bind(this);
    this.imgClick = this.imgClick.bind(this);
  }

  render() {
    let {
      children,
      src,
      alt,
      accept,
      imgClassName,
      boxStyle,
      imgStyle,
      btnStyle,
      btnClassName,
      leftIconClassName,
      rightIconClassName,
      leftIcon,
      rightIcon
    } = this.props;
    let classNames = btnClassName
      ? "zc-upload-file-btn " + btnClassName
      : "zc-upload-file-btn";
    let leftIconClassNames = leftIconClassName
      ? "zc-upload-file-btn-icon-left " + leftIconClassName
      : "zc-upload-file-btn-icon-left";
    let rightIconClassNames = rightIconClassName
      ? "zc-upload-file-btn-icon-right " + rightIconClassName
      : "zc-upload-file-btn-icon-right";
    return (
      <span style={boxStyle}>
        {src && (
          <img
            src={src}
            alt={alt}
            onClick={this.imgClick}
            className={imgClassName}
            style={imgStyle}
          />
        )}
        {!src && (
          <button onClick={this.click} style={btnStyle} className={classNames}>
            {leftIcon && (
              <span className={leftIconClassNames}>
                <i className={leftIcon} />
              </span>
            )}
            {children}
            {rightIcon && (
              <span className={rightIconClassNames}>
                <i className={rightIcon} />
              </span>
            )}
          </button>
        )}
        <input
          type="file"
          value=""
          style={{ display: "none" }}
          accept={accept}
          onChange={this.fileChange}
        />
      </span>
    );
  }

  fileChange(ev) {
    let event = ev || event;
    let file = event.currentTarget.files[0];
    let { onChange } = this.props;
    if (onChange) {
      onChange(file);
    }
    return;
  }

  click(ev) {
    let event = ev || event;
    event.currentTarget.nextSibling.click();
    return;
  }

  imgClick(ev) {
    let event = ev || event;
    event.currentTarget.nextSibling.nextSibling.click();
    return;
  }
}

UploadFile.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.any,
  src: PropTypes.string,
  alt: PropTypes.string,
  accept: PropTypes.string,
  imgClassName: PropTypes.string,
  boxStyle: PropTypes.object,
  imgStyle: PropTypes.object,
  btnStyle: PropTypes.object,
  btnClassName: PropTypes.string,
  leftIconClassName: PropTypes.string,
  rightIconClassName: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string
};
export default UploadFile;
