import { useState } from 'react';

import cloneDeep from 'lodash/cloneDeep';

import Board from "./Board"

export default function Game() {
    const emptySquares = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ];
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([emptySquares]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
  
    function handlePlay(nextSquares) {
      const lastHistory = cloneDeep(history);
      console.log("history before play:");
      console.log(lastHistory);
      const nextHistory = [...lastHistory.slice(0, currentMove + 1), nextSquares];
      console.log("next history: ");
      console.log(nextHistory);
      console.log("next squares: ");
      console.log(nextSquares);
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
      setXIsNext(!xIsNext);
    }
  
    function handleRestart() {
      setHistory([emptySquares]);
      setXIsNext(true);
      setCurrentMove(0);
    }
  
    function handleUndo() {
      if (JSON.stringify(history) == JSON.stringify([emptySquares])) {
        console.log("No need to undo, we are already at the start")
        return
      }
      console.log("we are not at the start")
      const lastHistory = cloneDeep(history);
      const newHistory = lastHistory.slice(0, -1);
      console.log("The history after undo: ")
      console.log(newHistory)
      setHistory(newHistory);
      setXIsNext(!xIsNext)
      setCurrentMove(newHistory.length - 1);
    }
  
    function jumpTo(nextMove) {
      setCurrentMove(nextMove);
      setXIsNext(nextMove % 2 == 0);
    }
  
    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
  
    return (
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
        <div>
          <button
            className="undo"
            onClick={handleUndo}
            style={{height: "30px", width: "75px"}}
          >
            undo
          </button>
        </div>
        <div>
          <button
            className="restart"
            onClick={handleRestart}
            style={{height: "30px", width: "75px"}}
          >
            restart
          </button>
        </div>
      </div>
    );
  }