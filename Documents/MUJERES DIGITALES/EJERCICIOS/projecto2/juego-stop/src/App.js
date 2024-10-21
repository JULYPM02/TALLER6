import React, { useState } from 'react';
import './App.css';

const categories = ['Nombre', 'Apellido', 'Ciudad', 'Animal', 'Cosa'];

const getRandomLetter = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters[Math.floor(Math.random() * letters.length)];
};

function App() {
  const [gameState, setGameState] = useState({
    players: [],
    currentLetter: '',
    responses: {},
    scores: {},
    roundStarted: false,
  });

  const [playerName, setPlayerName] = useState('');

  const addPlayer = () => {
    if (playerName.trim() === '') return;
    setGameState(prevState => ({
      ...prevState,
      players: [...prevState.players, playerName],
      responses: { ...prevState.responses, [playerName]: {} },
      scores: { ...prevState.scores, [playerName]: 0 },
    }));
    setPlayerName('');
  };

  const startRound = () => {
    const letter = getRandomLetter();
    setGameState(prevState => ({
      ...prevState,
      currentLetter: letter,
      roundStarted: true,
      responses: prevState.players.reduce((acc, player) => {
        acc[player] = categories.reduce((catAcc, category) => {
          catAcc[category] = '';
          return catAcc;
        }, {});
        return acc;
      }, {}),
    }));
  };

  const handleChange = (player, category, value) => {
    setGameState(prevState => ({
      ...prevState,
      responses: {
        ...prevState.responses,
        [player]: {
          ...prevState.responses[player],
          [category]: value,
        },
      },
    }));
  };

  const calculateScores = () => {
    const newScores = { ...gameState.scores };
    gameState.players.forEach(player => {
      let score = 0;
      categories.forEach(category => {
        const response = gameState.responses[player][category];
        if (response && response[0]?.toUpperCase() === gameState.currentLetter) {
          score += 10;
        }
      });
      newScores[player] += score;
    });
    setGameState(prevState => ({
      ...prevState,
      scores: newScores,
      roundStarted: false,
      currentLetter: '',
    }));
  };

  const resetGame = () => {
    setGameState({
      players: [],
      currentLetter: '',
      responses: {},
      scores: {},
      roundStarted: false,
    });
  };

  return (
    <div className="App">
      <h1>Juego de Stop</h1>

      {!gameState.roundStarted ? (
        <div className="setup">
          <div className="add-player">
            <input
              type="text"
              placeholder="Nombre del participante"
              value={playerName}
              onChange={e => setPlayerName(e.target.value)}
            />
            <button onClick={addPlayer}>Agregar Participante</button>
          </div>

          {gameState.players.length > 0 && (
            <div className="players-list">
              <h2>Participantes:</h2>
              <ul>
                {gameState.players.map(player => (
                  <li key={player}>{player}</li>
                ))}
              </ul>
              <button onClick={startRound}>Iniciar Ronda</button>
              <button onClick={resetGame} className="reset-button">
                Reiniciar Juego
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="game-round">
          <h2>Letra Actual: {gameState.currentLetter}</h2>
          <div className="responses">
            {gameState.players.map(player => (
              <div key={player} className="player-responses">
                <h3>{player}</h3>
                {categories.map(category => (
                  <div key={category} className="response-field">
                    <label>{category}:</label>
                    <input
                      type="text"
                      value={gameState.responses[player][category]}
                      onChange={e =>
                        handleChange(player, category, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <button onClick={calculateScores}>Calcular Puntuaciones</button>
        </div>
      )}

      {gameState.players.length > 0 && (
        <div className="scores">
          <h2>Puntuaciones:</h2>
          <ul>
            {gameState.players.map(player => (
              <li key={player}>
                {player}: {gameState.scores[player]} puntos
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
