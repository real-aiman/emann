import React from 'react';
import Row from './Row';
import SnakeOverlay from './SnakeOverlay';

const Board = ({ snakeImg }) => {
  
  const rows = [];
  for (let i = 10; i >= 1; i--) {
    rows.push(i);
  }

  return (
    <div className="board">
      <SnakeOverlay src={snakeImg} />
      
      <table>
        <tbody>
          {rows.map((rowNum) => (
            <Row key={rowNum} rowIdx={rowNum} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;