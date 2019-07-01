import React, { Component } from "react";
import PropTypes from "prop-types";

class PopupPanels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
    this.close = this.close.bind(this);
  }
  render() {
    let { className, isDrag } = this.props;
    let classNames = className
      ? "zc-popup-panels" + className
      : "zc-popup-panels";
    return (
      this.state.show && (
        <div className="zc-popup-panels-parents">
          <div
            className={classNames}
            style={{ ...this.props.style }}
            onMouseDown={isDrag ? mouseDown : function() {}}
          >
            {this.props.children}
          </div>
        </div>
      )
    );
  }

  close() {
    this.setState({
      show: false
    });
    return;
  }
}

PopupPanels.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  isDrag: PropTypes.bool
};

function mouseDown(ev) {
  var event = ev || event;
  let parentNode = window.self;
  let pWidth = parentNode.innerWidth;
  let pHeight = parentNode.innerHeight;

  let that = event.currentTarget;
  let disX = event.clientX - that.offsetLeft;
  let disY = event.clientY - that.offsetTop;
  let oWidth = that.offsetWidth;
  let oHeight = that.offsetHeight;

  let cssStartLeft0 = Math.floor((pWidth - oWidth) / 2);
  //阻止冒泡事件
  event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
  if (event && event.preventDefault) {
    event.preventDefault();
  } else {
    window.event.returnValue = false; //实际上在IE8以下，会报错
    return false;
  }

  document.onmousemove = function(ev) {
    var event = ev || event;
    let moveClientX = event.clientX;
    let moveClientY = event.clientY;
    that.style.left = moveClientX - disX - cssStartLeft0 + "px";
    that.style.top = moveClientY - disY + "px";
    if (moveClientX - disX <= 0) {
      that.style.left = -cssStartLeft0 + "px";
    }
    if (moveClientY - disY <= 0) {
      that.style.top = "0px";
    }
    if (moveClientX - disX >= pWidth - oWidth) {
      that.style.left = pWidth - oWidth - cssStartLeft0 + "px";
    }
    if (moveClientY - disY >= pHeight - oHeight) {
      that.style.top = pHeight - oHeight + "px";
    }
  };
  document.onmouseup = function() {
    document.onmousemove = document.onmouseup = null;
  };
}

export default PopupPanels;
