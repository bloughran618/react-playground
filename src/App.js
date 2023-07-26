import { toBeRequired } from '@testing-library/jest-dom/matchers';
import './App.css';

import Game from "./components/Game"

const App = () => <Game />;

export default App;

// import { useState } from 'react';

// import cloneDeep from 'lodash/cloneDeep';


// function Square({value, onSquareClick}) {
//   return (
//     <button 
//       className="square"
//       onClick={onSquareClick}
//       style={{height: "100px", width: "100px", padding: "0px", marginTop: "0px"}}
//     >
//       {value}
//     </button>
//   );
// }

// function Board({ xIsNext, squares, onPlay}) {
//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }

//   function handleClick(row, col) {
//     if(squares[row][col] || calculateWinner(squares)) {
//       return;
//     }
//     const nextSquares = cloneDeep(squares);
//     if (xIsNext) {
//       nextSquares[row][col] = "X";
//     } else {
//       nextSquares[row][col] = "O";
//     }
//     onPlay(nextSquares);
//   }

//   function calculateWinner(squares) {
//     for (let i = 0; i < squares.length; i++) {
//       // check rows
//       if (squares[i][0] && squares[i][0] == squares[i][1] && squares[i][0] == squares[i][2]) {
//         return squares[i][0]
//       }
//       // check cols
//       if (squares[0][i] && squares[0][i] == squares[1][i] && squares[0][i] == squares[2][i]) {
//         return squares[0][i]
//       }
//     }
//     // check diaganols
//     if (squares[0][0] && squares[0][0] == squares[1][1] && squares[0][0] == squares[2][2]){
//       return squares[0][0]
//     }
//     if (squares[0][2] && squares[0][2] == squares[1][1] && squares[0][2] == squares[2][0]) {
//       return squares[0][2]
//     }
//   }

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0][0]} onSquareClick={() => handleClick(0, 0)} />
//         <Square value={squares[0][1]} onSquareClick={() => handleClick(0, 1)} />
//         <Square value={squares[0][2]} onSquareClick={() => handleClick(0, 2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[1][0]} onSquareClick={() => handleClick(1, 0)} />
//         <Square value={squares[1][1]} onSquareClick={() => handleClick(1, 1)} />
//         <Square value={squares[1][2]} onSquareClick={() => handleClick(1, 2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[2][0]} onSquareClick={() => handleClick(2, 0)} />
//         <Square value={squares[2][1]} onSquareClick={() => handleClick(2, 1)} />
//         <Square value={squares[2][2]} onSquareClick={() => handleClick(2, 2)} />
//       </div>
//     </>
//   )
// }

// export default function Game() {
//   const emptySquares = [
//       [null, null, null],
//       [null, null, null],
//       [null, null, null],
//     ];
//   const [xIsNext, setXIsNext] = useState(true);
//   const [history, setHistory] = useState([emptySquares]);
//   const [currentMove, setCurrentMove] = useState(0);
//   const currentSquares = history[currentMove];

//   function handlePlay(nextSquares) {
//     const lastHistory = cloneDeep(history);
//     console.log("history before play:");
//     console.log(lastHistory);
//     const nextHistory = [...lastHistory.slice(0, currentMove + 1), nextSquares];
//     console.log("next history: ");
//     console.log(nextHistory);
//     console.log("next squares: ");
//     console.log(nextSquares);
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//     setXIsNext(!xIsNext);
//   }

//   function handleRestart() {
//     setHistory([emptySquares]);
//     setXIsNext(true);
//     setCurrentMove(0);
//   }

//   function handleUndo() {
//     if (JSON.stringify(history) == JSON.stringify([emptySquares])) {
//       console.log("No need to undo, we are already at the start")
//       return
//     }
//     console.log("we are not at the start")
//     const lastHistory = cloneDeep(history);
//     const newHistory = lastHistory.slice(0, -1);
//     console.log("The history after undo: ")
//     console.log(newHistory)
//     setHistory(newHistory);
//     setXIsNext(!xIsNext)
//     setCurrentMove(newHistory.length - 1);
//   }

//   function jumpTo(nextMove) {
//     setCurrentMove(nextMove);
//     setXIsNext(nextMove % 2 == 0);
//   }

//   const moves = history.map((squares, move) => {
//     let description;
//     if (move > 0) {
//       description = 'Go to move #' + move;
//     } else {
//       description = 'Go to game start';
//     }
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
//       </div>
//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//       <div>
//         <button
//           className="undo"
//           onClick={handleUndo}
//           style={{height: "30px", width: "75px"}}
//         >
//           undo
//         </button>
//       </div>
//       <div>
//         <button
//           className="restart"
//           onClick={handleRestart}
//           style={{height: "30px", width: "75px"}}
//         >
//           restart
//         </button>
//       </div>
//     </div>
//   );
// }
