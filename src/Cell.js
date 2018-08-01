import React, { Component } from "react";
import "./App.css";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: ""
    };
  }
  toMakeMove = () => {
    const activePlayer = this.state.activePlayer;
    if (activePlayer === "x") {
      this.setState({
        activePlayer: "o"
      });
    } else if (activePlayer === "" || "o") {
      this.setState({
        activePlayer: "x"
      });
    }
  };
  render() {
    return (
      <div className="cell" onClick={this.toMakeMove}>
        {this.state.activePlayer}
      </div>
    );
  }
}

export default Cell;
