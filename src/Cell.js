import React, { Component } from "react";
import "./App.css";

class Cell extends Component {
  render() {
    return (
      <div
        className="cell"
        onClick={this.props.value.length === 0 ? this.props.onClick : () => {}}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Cell;
