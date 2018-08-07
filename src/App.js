import React, { Component } from "react";
import "./App.css";
import Cell from "./Cell.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(9).fill(""),
      activePlayer: "x",
      gameEnded: false
    };
  }
  toMakeMove = index => () => {
    console.log(index);
    const updatedGrid = [...this.state.grid];
    const { activePlayer, gameEnded } = this.state;
    if (!gameEnded) {
      if (activePlayer === "o") {
        updatedGrid[index] = "o";
        this.setState(
          {
            activePlayer: "x",
            grid: updatedGrid
          },
          () => this.toCheckWinner("o")
        );
      } else {
        updatedGrid[index] = "x";
        this.setState(
          {
            activePlayer: "o",
            grid: updatedGrid
          },
          () => this.toCheckWinner("x")
        );
      }
    }
  };
  toCheckWinner = lastActivePlayer => {
    const { grid } = this.state;
    if (
      (grid[0] === lastActivePlayer &&
        grid[1] === lastActivePlayer &&
        grid[2] === lastActivePlayer) ||
      (grid[3] === lastActivePlayer &&
        grid[4] === lastActivePlayer &&
        grid[5] === lastActivePlayer) ||
      (grid[6] === lastActivePlayer &&
        grid[7] === lastActivePlayer &&
        grid[8] === lastActivePlayer) ||
      (grid[0] === lastActivePlayer &&
        grid[3] === lastActivePlayer &&
        grid[6] === lastActivePlayer) ||
      (grid[1] === lastActivePlayer &&
        grid[4] === lastActivePlayer &&
        grid[7] === lastActivePlayer) ||
      (grid[2] === lastActivePlayer &&
        grid[5] === lastActivePlayer &&
        grid[8] === lastActivePlayer) ||
      (grid[0] === lastActivePlayer &&
        grid[4] === lastActivePlayer &&
        grid[8] === lastActivePlayer) ||
      (grid[2] === lastActivePlayer &&
        grid[4] === lastActivePlayer &&
        grid[6] === lastActivePlayer)
    ) {
      this.setState({
        gameEnded: true
      });
      alert(lastActivePlayer + " player won!");
    }
  };
  render() {
    return (
      <div className="App">
        {this.state.grid.map((cell, index) => {
          return (
            <Cell key={index} onClick={this.toMakeMove(index)} value={cell} />
          );
        })}
      </div>
    );
  }
}

export default App;
