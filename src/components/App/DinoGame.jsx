import React, { useState, useEffect, useRef } from "react";

const DinoGame = () => {
  const character =
    "https://classmeats-uz.netlify.app/mans-stned/LIFE0021-removebg-preview.webp"; // Bola rasmi turadigan joy
  const obstacle =
    "https://resonant-otter-27f548.netlify.app/BMW%20cars/bmwi4/69842f26c557a0e071b66e2132452aeb_512x0-removebg-preview%20(1)%20(1).png"; // Mashina rasmi turadigan joy
  const [gameStarted, setGameStarted] = useState(false);
  const [jumping, setJumping] = useState(false);
  const [position, setPosition] = useState(50);
  const [obstaclePosition, setObstaclePosition] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const gameRef = useRef(null);

  useEffect(() => {
    let interval;
    if (gameStarted && !gameOver) {
      interval = setInterval(() => {
        setObstaclePosition((prev) => (prev > -10 ? prev - 2 : 100));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (obstaclePosition < 55 && obstaclePosition > 45 && !jumping) {
      setGameOver(true);
    }
  }, [obstaclePosition, jumping]);

  const handleStart = () => {
    setGameStarted(true);
    setGameOver(false);
    setObstaclePosition(100);
  };

  const handleJump = () => {
    if (!jumping && !gameOver) {
      setJumping(true);
      setTimeout(() => setJumping(false), 600);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-indigo-900 relative overflow-hidden">
      {!gameStarted || gameOver ? (
        <div className="z-10 text-center">
          <button
            onClick={handleStart}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded-lg shadow-md transition"
          >
            {gameOver ? "Restart" : "Start"}
          </button>
        </div>
      ) : (
        <div className="relative w-full h-full flex items-end justify-between z-10">
          <img
            src={character}
            alt="Character"
            className={`absolute bottom-${
              jumping ? "40" : "20"
            } w-16 h-16 transition-all duration-300`}
          />
          <img
            src={obstacle}
            alt="Obstacle"
            className="absolute bottom-10 left-[${obstaclePosition}%] w-20 h-20"
          />
          <button
            onClick={handleJump}
            className="absolute bottom-5 px-6 py-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded-lg shadow-md transition"
          >
            Jump
          </button>
        </div>
      )}
    </div>
  );
};

export default DinoGame;
