import React from 'react';
import Header from './components/Header';
import Board from './components/Board';
import snakeImage from './assets/snake.png'; 

const App = () => {
  return (
    <div className="game-container">
      <Header title="Snake & Ladder" />
      <Board snakeImg={snakeImage} /> 
    </div>
  );
};
export default App;