// src/components/Achievements.js

import React from "react";
import { ProgressBar } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

function Achievements({ playerName }) {
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const user = userData[playerName] || { totalPoints: 0, achievements: [] };

  // Define levels and points required
  const levels = [
    { level: 1, points: 0 },
    { level: 2, points: 50 },
    { level: 3, points: 100 },
    { level: 4, points: 200 },
    { level: 5, points: 500 },
  ];

  // Calculate current level
  let currentLevel = levels.reduce((acc, lvl) => {
    if (user.totalPoints >= lvl.points) {
      return lvl.level;
    } else {
      return acc;
    }
  }, 1);

  // Calculate progress towards next level
  const nextLevel = levels.find((lvl) => lvl.level === currentLevel + 1);
  const pointsForNextLevel = nextLevel ? nextLevel.points : user.totalPoints;
  const progress =
    ((user.totalPoints - levels[currentLevel - 1].points) /
      (pointsForNextLevel - levels[currentLevel - 1].points)) *
    100;

  return (
    <div className="achievements">
      <h3>Your Achievements</h3>
      <p>Total Points: {user.totalPoints}</p>
      <p>Current Level: {currentLevel}</p>
      <ProgressBar
        percent={progress}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      />
      <h4>Badges:</h4>
      <ul className="badges-list">
        {user.achievements.length > 0 ? (
          user.achievements.map((badge, index) => <li key={index}>{badge}</li>)
        ) : (
          <p>No badges earned yet.</p>
        )}
      </ul>
    </div>
  );
}

export default Achievements;
