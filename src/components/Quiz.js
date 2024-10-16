import React, { useState, useEffect, useCallback } from "react";
import { quizzes } from "../data/quizzes";
import Achievements from "./Achievements";

function Quiz({ category, playerName }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isTimeOut, setIsTimeOut] = useState(false); // New state to track timeout

  useEffect(() => {
    const allQuestions = quizzes[category.category];
    const filteredQuestions = allQuestions.filter(
      (q) => q.difficulty === category.difficulty
    );
    setQuestions(filteredQuestions);
  }, [category]);

  useEffect(() => {
    const timeLimit =
      category.difficulty === "Easy"
        ? 15
        : category.difficulty === "Medium"
        ? 10
        : 5;
    setTimeLeft(timeLimit);
    setIsTimeOut(false); // Reset timeout state when question changes
  }, [currentQuestion, category.difficulty]);

  const calculateScore = useCallback(() => {
    let totalScore = 0;
    userAnswers.forEach((answer) => {
      if (answer && answer.selectedAnswer === answer.correctAnswer) {
        let points = 1; // Default points for Easy
        if (answer.difficulty === "Medium") points = 2;
        if (answer.difficulty === "Hard") points = 3;
        totalScore += points;
      }
    });
    setScore(totalScore);

    // Save to leaderboard
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.push({ name: playerName, score: totalScore });

    // Sort leaderboard by score in descending order
    leaderboard.sort((a, b) => b.score - a.score);

    // Save back to localStorage
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    // Update user's total points and achievements
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const user = userData[playerName] || { totalPoints: 0, achievements: [], completedQuizzes: [] };

    // Prevent adding points if the quiz has been completed
    const quizIdentifier = `${category.category}_${category.difficulty}`;
    if (!user.completedQuizzes.includes(quizIdentifier)) {
      user.totalPoints += totalScore;
      user.completedQuizzes.push(quizIdentifier);
    }

    // Check for achievements
    const achievements = user.achievements || [];
    if (user.totalPoints >= 50 && !achievements.includes("50 Points")) {
      achievements.push("50 Points");
    }
    if (user.totalPoints >= 100 && !achievements.includes("100 Points")) {
      achievements.push("100 Points");
    }
    if (totalScore === questions.length * 3 && !achievements.includes("Perfect Score")) {
      achievements.push("Perfect Score");
    }

    user.achievements = achievements;
    userData[playerName] = user;
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userAnswers, questions.length, playerName, category]);

  const handleNextQuestion = useCallback(() => {
    const updatedAnswers = [...userAnswers];

    if (!updatedAnswers[currentQuestion]) {
      updatedAnswers[currentQuestion] = {
        question: questions[currentQuestion]?.question || "No question available",
        selectedAnswer: null,
        correctAnswer: questions[currentQuestion]?.correctAnswer || "Not available",
        difficulty: questions[currentQuestion]?.difficulty || "Easy",
      };
    }

    setUserAnswers(updatedAnswers);

    if (currentQuestion + 1 < questions.length) {
      setSelectedOption(null);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setIsFinished(true);
    }
  }, [currentQuestion, questions, userAnswers, calculateScore]);

  useEffect(() => {
    if (timeLeft === 0 && !isTimeOut) {
      handleNextQuestion();
      setIsTimeOut(true); // Set timeout to true to prevent multiple calls
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, handleNextQuestion, isTimeOut]);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = {
      question: questions[currentQuestion]?.question || "No question available",
      selectedAnswer: option,
      correctAnswer: questions[currentQuestion]?.correctAnswer || "Not available",
      timeLeft: timeLeft,
      difficulty: questions[currentQuestion]?.difficulty || "Easy",
    };
    setUserAnswers(updatedAnswers);
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setSelectedOption(userAnswers[currentQuestion - 1]?.selectedAnswer || null);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Handle case when no questions are available
  if (questions.length === 0) {
    return (
      <div className="quiz-container">
        <h2>
          No questions available for {category.category} at {category.difficulty} level.
        </h2>
        <button onClick={() => window.location.reload()}>Go Back</button>
      </div>
    );
  }

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  if (isFinished) {
    return (
      <div className="quiz-container">
        <h2>{`Quiz Finished, ${playerName}! Your Score: ${score}`}</h2>

        <div className="quiz-summary">
          <h3>Quiz Summary:</h3>
          <ul>
            {userAnswers.map((answer, index) => (
              <li key={index} className="quiz-summary-item">
                <p>
                  <strong>Question {index + 1}:</strong>{" "}
                  {answer?.question || "Question not available"}
                </p>
                <p>
                  Your Answer:{" "}
                  <span
                    className={
                      answer?.selectedAnswer === answer?.correctAnswer
                        ? "correct"
                        : "incorrect"
                    }
                  >
                    {answer?.selectedAnswer || "No Answer"}
                  </span>
                </p>
                <p>Correct Answer: {answer?.correctAnswer || "Not available"}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Display Achievements */}
        <Achievements playerName={playerName} />

        <button onClick={() => window.location.reload()}>Restart</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="player-name">
        <h2>{`Player: ${playerName}`}</h2>
      </div>

      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div className="quiz-header">
        <h2>
          {category.category} Quiz - {category.difficulty} Level
        </h2>
        <p>{`Question ${currentQuestion + 1} of ${questions.length}`}</p>
        <p
          style={{
            color: timeLeft <= 5 ? "red" : "var(--text-color)",
            fontWeight: timeLeft <= 5 ? "bold" : "normal",
          }}
        >
          {`Time Left: ${timeLeft}s`}
        </p>
      </div>

      <div className="quiz-question">
        <p>{questions[currentQuestion]?.question || "Question not available"}</p>
      </div>

      <div className="quiz-options">
        {questions[currentQuestion]?.options?.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className={`option-button ${
              selectedOption === option ? "selected-option" : ""
            }`}
          >
            {option}
          </button>
        )) || <p>No options available for this question.</p>}
      </div>

      <div className="navigation-buttons">
        <button onClick={handlePrevQuestion} disabled={currentQuestion === 0}>
          Previous
        </button>
        {currentQuestion + 1 === questions.length ? (
          <button onClick={handleNextQuestion}>Finish</button>
        ) : (
          <button onClick={handleNextQuestion}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
