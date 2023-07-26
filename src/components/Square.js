import { useState } from 'react';

export default function Square({value, onSquareClick}) {
  return (
    <button 
      className="square"
      onClick={onSquareClick}
      style={{height: "100px", width: "100px", padding: "0px", marginTop: "0px"}}
    >
      {value}
    </button>
  );
}