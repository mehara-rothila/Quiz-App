import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";

function Home({ onThemeToggle, theme }) {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [playerName, setPlayerName] = useState("");
  const [nameError, setNameError] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState("Easy");
  const [isNameEntered, setIsNameEntered] = useState(false);

  useEffect(() => {
    const storedLeaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    setLeaderboard(storedLeaderboard);
  }, []);

  const handleNameChange = (e) => {
    const name = e.target.value;

    if (name.length > 10) {
      setNameError("Name cannot exceed 10 characters.");
    } else {
      setNameError("");
    }

    setPlayerName(name.slice(0, 10));
  };

  const startQuiz = () => {
    if (playerName.trim() === "") {
      setNameError("Please enter your name to start the quiz.");
      return;
    }
    setIsNameEntered(true);
  };

  const handleQuizSelect = (category) => {
    setSelectedQuiz({ category });
    setTimeout(() => {
      const nameInput = document.getElementById("playerName");
      if (nameInput) {
        nameInput.focus();
      }
    }, 100);
  };

  const toggleLeaderboard = () => {
    setShowLeaderboard((prev) => !prev);
  };

  const clearLeaderboard = () => {
    localStorage.removeItem("leaderboard");
    setLeaderboard([]);
  };

  return (
    <div className="quiz-container">
      {selectedQuiz && isNameEntered ? (
        <Quiz
          category={{ category: selectedQuiz.category, difficulty: selectedDifficulty }}
          playerName={playerName}
        />
      ) : (
        <div className="home-content">
          <div className="welcome-message">
            <h1>Welcome to the Coding Quiz Platform!</h1>
            <p>
              Test your knowledge by choosing a quiz below and see if you can reach the
              leaderboard!
            </p>
          </div>

          {/* Reduced Spacing Theme Button */}
          <div className="theme-button-container-reduced">
            <button className="theme-toggle-button-reduced" onClick={onThemeToggle}>
              Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
          </div>

          {/* Difficulty Selection with Buttons */}
          <div className="difficulty-selection">
            <p>Select Difficulty:</p>
            <div className="difficulty-buttons">
              <button
                className={`difficulty-button ${selectedDifficulty === "Easy" ? "active" : ""}`}
                onClick={() => setSelectedDifficulty("Easy")}
              >
                Easy
              </button>
              <button
                className={`difficulty-button ${selectedDifficulty === "Medium" ? "active" : ""}`}
                onClick={() => setSelectedDifficulty("Medium")}
              >
                Medium
              </button>
              <button
                className={`difficulty-button ${selectedDifficulty === "Hard" ? "active" : ""}`}
                onClick={() => setSelectedDifficulty("Hard")}
              >
                Hard
              </button>
            </div>
          </div>

          {/* Quiz Selection Buttons */}
          <div className="button-grid">
            <button className="js-quiz-button" onClick={() => handleQuizSelect("JavaScript")}>
              JavaScript Quiz
            </button>
            <button className="react-quiz-button" onClick={() => handleQuizSelect("React")}>
              React Quiz
            </button>
            <button className="python-quiz-button" onClick={() => handleQuizSelect("Python")}>
              Python Quiz
            </button>
            <button className="sql-quiz-button" onClick={() => handleQuizSelect("SQL")}>
              SQL Quiz
            </button>
            <button className="c-quiz-button" onClick={() => handleQuizSelect("C")}>
              C Quiz
            </button>
            <button className="java-quiz-button" onClick={() => handleQuizSelect("Java")}>
              Java Quiz
            </button>
            <button className="leaderboard-button" onClick={toggleLeaderboard}>
              {showLeaderboard ? "Hide Leaderboard" : "View Leaderboard"}
            </button>
          </div>

          {/* Name Input Field - Displayed after quiz is selected */}
          {selectedQuiz && (
            <div className="name-input-container">
              <label htmlFor="playerName">Enter Your Name to Start the Quiz:</label>
              <input
                type="text"
                id="playerName"
                placeholder="Your Name (Max 10 characters)"
                value={playerName}
                onChange={handleNameChange}
              />
              {nameError && <p className="name-error">{nameError}</p>}
              <button className="start-quiz-button" onClick={startQuiz}>
                Start Quiz
              </button>
            </div>
          )}

          {showLeaderboard && (
            <div className="leaderboard">
              <h2>Top 5 Players</h2>
              <table className="leaderboard-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.slice(0, 5).map((entry, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{entry.name}</td>
                      <td>{entry.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={clearLeaderboard}>Clear Leaderboard</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
