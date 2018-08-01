import React, { Component } from "react";
import "./App.css";

class Cell extends Component {
  state = {
    value: ""
  };

  handleCellClick = () => {
    const { activePlayer, toChangeActivePlayer } = this.props;
    if (activePlayer === "x") {
      this.setState({
        value: "o"
      });
    } else {
      this.setState({
        value: "x"
      });
    }
    toChangeActivePlayer();
  };
  render() {
    return (
      <div className="cell" onClick={this.handleCellClick}>
        {this.state.value}
      </div>
    );
  }
}

export default Cell;
