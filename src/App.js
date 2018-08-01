import React, { Component } from "react";
import "./App.css";
import Cell from "./Cell.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: ""
    };
  }
  toChangeActivePlayer = () => {
    const activePlayer = this.state.activePlayer;
    if (activePlayer === "x") {
      this.setState({
        activePlayer: "o"
      });
    } else {
      this.setState({
        activePlayer: "x"
      });
    }
  };
  render() {
    return (
      <div className="App">
        <div>
          <Cell
            activePlayer={this.state.activePlayer}
            toChangeActivePlayer={this.toChangeActivePlayer}
            key="1"
          />
          <Cell
            activePlayer={this.state.activePlayer}
            toChangeActivePlayer={this.toChangeActivePlayer}
            key="2"
          />
          <Cell
            activePlayer={this.state.activePlayer}
            toChangeActivePlayer={this.toChangeActivePlayer}
            key="3"
          />{" "}
        </div>
        <div>
          <Cell
            activePlayer={this.state.activePlayer}
            toChangeActivePlayer={this.toChangeActivePlayer}
            key="4"
          />
          <Cell
            activePlayer={this.state.activePlayer}
            toChangeActivePlayer={this.toChangeActivePlayer}
            key="5"
          />
          <Cell
            activePlayer={this.state.activePlayer}
            toChangeActivePlayer={this.toChangeActivePlayer}
            key="6"
          />{" "}
        </div>
        <div>
          <Cell
            activePlayer={this.state.activePlayer}
            toChangeActivePlayer={this.toChangeActivePlayer}
            key="7"
          />
          <Cell
            activePlayer={this.state.activePlayer}
            toChangeActivePlayer={this.toChangeActivePlayer}
            key="8"
          />
          <Cell
            activePlayer={this.state.activePlayer}
            toChangeActivePlayer={this.toChangeActivePlayer}
            key="9"
          />{" "}
        </div>
      </div>
    );
  }
}

export default App;
