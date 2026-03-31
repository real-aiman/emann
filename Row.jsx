import React from 'react';
import Cell from './Cell';

const Row = ({ rowIdx }) => {
  const cells = [];
  const startNum = (rowIdx - 1) * 10 + 1;
  const endNum = rowIdx * 10;

  // Logic for Boustrophedon (zigzag) numbering
  if (rowIdx % 2 === 0) {
    // Even rows go Right to Left (e.g., 100...91)
    for (let i = endNum; i >= startNum; i--) {
      cells.push(i);
    }
  } else {
    // Odd rows go Left to Right (e.g., 1...10)
    for (let i = startNum; i <= endNum; i++) {
      cells.push(i);
    }
  }

  return (
    <tr>
      {cells.map((num) => (
        <Cell key={num} value={num} />
      ))}
    </tr>
  );
};

export default Row;