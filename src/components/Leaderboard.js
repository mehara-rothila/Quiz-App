// src/components/Leaderboard.js

import React, { useEffect, useState } from "react";
import api from "../api";

function Leaderboard({ onBack }) {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    api
      .get("/api/leaderboard")
      .then((response) => {
        setLeaderboardData(response.data.leaderboard);
      })
      .catch((error) => {
        console.error("Error fetching leaderboard:", error);
      });
  }, []);

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">Leaderboard</h2>
      <div className="leaderboard">
        <div className="leaderboard-header">
          <div className="leaderboard-column rank-column">Rank</div>
          <div className="leaderboard-column name-column">Name</div>
          <div className="leaderboard-column score-column">Total Points</div>
        </div>
        {leaderboardData.length === 0 ? (
          <p>No entries yet.</p>
        ) : (
          leaderboardData.map((entry, index) => (
            <div className="leaderboard-entry" key={index}>
              <div className="leaderboard-column rank-column">{index + 1}</div>
              <div className="leaderboard-column name-column">{entry.username}</div>
              <div className="leaderboard-column score-column">{entry.total_points}</div>
            </div>
          ))
        )}
      </div>
      <button onClick={onBack}>Back to Home</button>
    </div>
  );
}

export default Leaderboard;
