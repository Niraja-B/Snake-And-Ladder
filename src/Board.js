import React from 'react';

 

const Board = ({ player1Position, player2Position }) => {
  const renderCells = () => {
    const cells = [];
    for (let i = 1; i <= 100; i++) {
      let cellClass = 'cell';
      if (i === player1Position) {
        cellClass += ' player1';
      }
      if (i === player2Position) {
        cellClass += ' player2';
      }
      cells.push(<div key={i} className={cellClass}>{i}</div>);
    }
    return cells;
  };

  return (
    <div className="board">
      {renderCells()}
      
      
    </div>
  );
};

export default Board;
