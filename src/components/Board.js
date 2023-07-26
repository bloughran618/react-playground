import cloneDeep from 'lodash/cloneDeep';

import Square from "./Square"

export default function Board({ xIsNext, squares, onPlay}) {
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
  
    function handleClick(row, col) {
      if(squares[row][col] || calculateWinner(squares)) {
        return;
      }
      const nextSquares = cloneDeep(squares);
      if (xIsNext) {
        nextSquares[row][col] = "X";
      } else {
        nextSquares[row][col] = "O";
      }
      onPlay(nextSquares);
    }
  
    function calculateWinner(squares) {
      for (let i = 0; i < squares.length; i++) {
        // check rows
        if (squares[i][0] && squares[i][0] == squares[i][1] && squares[i][0] == squares[i][2]) {
          return squares[i][0]
        }
        // check cols
        if (squares[0][i] && squares[0][i] == squares[1][i] && squares[0][i] == squares[2][i]) {
          return squares[0][i]
        }
      }
      // check diaganols
      if (squares[0][0] && squares[0][0] == squares[1][1] && squares[0][0] == squares[2][2]){
        return squares[0][0]
      }
      if (squares[0][2] && squares[0][2] == squares[1][1] && squares[0][2] == squares[2][0]) {
        return squares[0][2]
      }
    }
  
    return (
      <>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0][0]} onSquareClick={() => handleClick(0, 0)} />
          <Square value={squares[0][1]} onSquareClick={() => handleClick(0, 1)} />
          <Square value={squares[0][2]} onSquareClick={() => handleClick(0, 2)} />
        </div>
        <div className="board-row">
          <Square value={squares[1][0]} onSquareClick={() => handleClick(1, 0)} />
          <Square value={squares[1][1]} onSquareClick={() => handleClick(1, 1)} />
          <Square value={squares[1][2]} onSquareClick={() => handleClick(1, 2)} />
        </div>
        <div className="board-row">
          <Square value={squares[2][0]} onSquareClick={() => handleClick(2, 0)} />
          <Square value={squares[2][1]} onSquareClick={() => handleClick(2, 1)} />
          <Square value={squares[2][2]} onSquareClick={() => handleClick(2, 2)} />
        </div>
      </>
    )
  }