import React, { Component } from "react";
import "./App.css";

class Cell extends Component {
  render() {
    const { cellAddClassName } = this.props;
    const isCellEmpty = this.props.value.length === 0;
    console.log(cellAddClassName);
    return (
      <div
        className={`cell ${cellAddClassName}`}
        id={isCellEmpty ? this.props.id : ""}
        onClick={isCellEmpty ? this.props.onClick : () => {}}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Cell;
