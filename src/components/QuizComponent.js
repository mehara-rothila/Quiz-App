import axios from 'axios';
import React, { useState, useEffect } from 'react';

function QuizComponent() {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/quiz/randomQuestions', {
        topic: 'JavaScript',
        difficulty: 'Easy',
        numQuestions: 5
      });
      setQuestions(response.data);  // The questions are already shuffled by Python
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div>
      <h1>Quiz Questions</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <h2>{question.question}</h2>
          <ul>
            {question.options.map((option, i) => (
              <li key={i}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default QuizComponent;
