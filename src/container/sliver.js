import React, { Component } from "react";
import { Sliver } from "../component";

class SliverDemo extends Component {
  render() {
    return (
      <div style={{ position: "relative", height: "100px", padding: "20px" }}>
        <h1>提示窗</h1>
        <Sliver message="okokok" second={0}>
          ok
        </Sliver>
      </div>
    );
  }
}

export default SliverDemo;
