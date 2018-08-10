import React, { Component } from "react";
import "./App.css";
import Cell from "./Cell.js";

const WIN_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function getWinCellClass(winCombination) {
  const indexOfComb = WIN_COMBINATIONS.findIndex(
    e => JSON.stringify(winCombination) === JSON.stringify(e)
  );
  if (indexOfComb >= 0 && indexOfComb <= 2) {
    return "win-cell-horizontal";
  }

  if (indexOfComb >= 3 && indexOfComb <= 5) {
    return "win-cell-vertical";
  }
  if (indexOfComb === 6) {
    return "win-cell-diagonal-left";
  }
  return "win-cell-diagonal-right";
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(9).fill(""),
      activePlayer: "x",
      gameEnded: false,
      header: "X player turn",
      winCells: [],
      totalMoves: 0
    };
  }

  toMakeMove = index => () => {
    const updatedGrid = [...this.state.grid];
    const { activePlayer, gameEnded } = this.state;
    if (!gameEnded) {
      if (activePlayer === "o") {
        updatedGrid[index] = "o";
        this.setState(
          {
            activePlayer: "x",
            grid: updatedGrid,
            header: "X player turn",
            totalMoves: this.state.totalMoves + 1
          },
          () => this.toCheckWinner("o")
        );
      } else {
        updatedGrid[index] = "x";
        this.setState(
          {
            activePlayer: "o",
            grid: updatedGrid,
            header: "O player turn",
            totalMoves: this.state.totalMoves + 1
          },
          () => this.toCheckWinner("x")
        );
      }
    }
  };

  toCheckWinner = lastActivePlayer => {
    const { grid, totalMoves } = this.state;
    if (totalMoves === 9) {
      this.setState({
        gameEnded: true,
        header: "Match is draw"
      });
    }
    WIN_COMBINATIONS.forEach(e => {
      if (
        grid[e[0]] === lastActivePlayer &&
        grid[e[1]] === lastActivePlayer &&
        grid[e[2]] === lastActivePlayer
      ) {
        this.setState({
          gameEnded: true,
          header: "Match won by " + lastActivePlayer.toUpperCase(),
          winCells: e
        });
      }
    });
  };
  toRestartGame = () => {
    this.setState({
      grid: Array(9).fill(""),
      activePlayer: "x",
      gameEnded: false,
      winCells: [],
      header: "X player turn",
      totalMoves: 0
    });
  };

  render() {
    const { activePlayer, winCells } = this.state;
    console.log(winCells);
    return (
      <div className="App">
        <h2>{this.state.header}</h2>
        <div className="grid">
          {this.state.grid.map((cell, index) => {
            const isWinCell =
              typeof winCells.find(element => element === index) !==
              "undefined";
            const cellAddClassName = isWinCell ? getWinCellClass(winCells) : "";
            return (
              <Cell
                key={index}
                cellAddClassName={cellAddClassName}
                id={activePlayer === "x" ? "activeX" : "activeO"}
                onClick={this.toMakeMove(index)}
                value={cell}
              />
            );
          })}
          <div className="restart-button">
            <button onClick={this.toRestartGame}> Restart </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
