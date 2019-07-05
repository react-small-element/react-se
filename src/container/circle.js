import React, { Component } from "react";
import { Circle } from "../component";

class CircleDemo extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">圆圈</div>
        <div className="card-content">
          <Circle style={{ marginRight: "10px" }}>1</Circle>
          <Circle diameter="30px" style={{ marginRight: "10px" }}>
            2
          </Circle>
          <Circle diameter="40px" style={{ marginRight: "10px" }}>
            3
          </Circle>
        </div>
      </div>
    );
  }
}

export default CircleDemo;
