import React, { Component } from "react";
import PropTypes from "prop-types";
import { CONSTANT } from "../constant";
import { THEME } from "../theme";

class Sliver extends Component {
  constructor(props) {
    super(props);
    let { message } = this.props;
    let show = message ? true : false;
    this.state = {
      show
    };
    this.st = "";
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.closeSliver = this.closeSliver.bind(this);
  }
  componentDidMount() {
    let { message } = this.props;
    if (message) {
      let { second } = this.props;
      let sec = second || closeSecond;
      if (second === 0) {
        sec = 0;
      }
      this.open(sec);
    }
  }

  componentWillReceiveProps(nextProps) {
    let { message } = nextProps;
    if (message) {
      let { second } = this.props;
      let sec = second || closeSecond;
      if (second === 0) {
        sec = 0;
      }
      this.open(sec);
    }
  }

  render() {
    let { show } = this.state;
    let { message, icon, type, leftIcon, leftIconStyle, second } = this.props;
    let sliverStyle = {};
    switch (type) {
      case "error":
        sliverStyle = styles.error;
        break;
      case "success":
        sliverStyle = styles.success;
        break;
      case "warn":
        sliverStyle = styles.warn;
        break;
      default:
        break;
    }
    return (
      show && (
        <div className="zc-sliver" style={{ ...sliverStyle }}>
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
          {message}
          {second === 0 && (
            <span className="zc-sliver-close" onClick={this.closeSliver}>
              <i className={leftIcon} />
            </span>
          )}
        </div>
      )
    );
  }

  open(second) {
    this.setState(
      {
        show: true
      },
      () => {
        this.close(second);
      }
    );
    return;
  }

  //秒，传0 时永不自动关闭
  close(second) {
    let { callback } = this.props;
    second = second * 1000;
    if (second > 0) {
      clearTimeout(this.st);
      this.st = setTimeout(() => {
        this.setState({
          show: false
        });
        if (callback) {
          callback();
        }
      }, second);
    }
    return;
  }

  closeSliver() {
    let { callback } = this.props;
    if (this.st) {
      clearTimeout(this.st);
    }
    this.setState({ show: false });
    if (callback) {
      callback();
    }
    return;
  }
}

const styles = {
  error: {
    color: THEME.themeColor,
    backgroundColor: THEME.errorColor
  },
  warn: {
    color: THEME.themeColor,
    backgroundColor: THEME.warnColor
  },
  success: {
    color: THEME.themeColor,
    backgroundColor: THEME.successColor
  }
};

const closeSecond = 3;
const ICON_PADDDING_LEVEL = CONSTANT.ICON_PADDDING_LEVEL;

Sliver.propTypes = {
  message: PropTypes.string,
  second: PropTypes.number,
  icon: PropTypes.string,
  type: PropTypes.string,
  callback: PropTypes.func
};

export default Sliver;
