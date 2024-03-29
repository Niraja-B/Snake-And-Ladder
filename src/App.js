import React, { useState } from 'react';
import './index.css';
import Board from './Board';

const App = () => {
  const [player1Position, setPlayer1Position] = useState(1);
  const [player2Position, setPlayer2Position] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const handleRollDice = () => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    if (currentPlayer === 1) {
      setPlayer1Position(Math.min(player1Position + diceValue, 100));
      setCurrentPlayer(2);
    } else {
      setPlayer2Position(Math.min(player2Position + diceValue, 100));
      setCurrentPlayer(1);
    }
  };

  return (
    <div className="game-container">
      <Board player1Position={player1Position} player2Position={player2Position} />
      <div className="players">
        <div className={`player player1 ${currentPlayer === 1 ? 'active' : ''}`}>
          Player 1
        </div>
        <div className={`player player2 ${currentPlayer === 2 ? 'active' : ''}`}>
          Player 2
        </div>
      </div>
      <button onClick={handleRollDice}>Roll Dice</button>
    </div>
  );
};

export default App;
