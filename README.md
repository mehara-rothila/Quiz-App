# Coding Quiz Platform

This project is a web-based quiz platform designed to help users test their knowledge in various coding topics such as JavaScript, React, Python, SQL, C, and Java. The application supports multiple difficulty levels, tracks achievements, and includes a leaderboard feature to encourage competition.

## Hosted Link
You can view and use the platform here: [Coding Quiz Platform](https://mrr-quiz.netlify.app/)

## Features

- **User Authentication**: Login functionality that verifies credentials before allowing access to quizzes.
- **Quizzes**: Multiple coding quizzes with varying difficulty levels (Easy, Medium, Hard) for different categories.
- **Leaderboard**: Tracks top scorers and displays the leaderboard.
- **Achievements**: Users can earn badges and level up based on their performance.
- **Dark/Light Theme Toggle**: Users can switch between dark and light modes.

## Project Structure

```bash
├── public/
├── src/
│   ├── components/
│   │   ├── Achievements.js        # Displays user's badges and levels
│   │   ├── Button.js              # Reusable button component
│   │   ├── Home.js                # Home page where users select quizzes and difficulty levels
│   │   ├── Leaderboard.js         # Displays top players and their scores
│   │   ├── Login.js               # Handles user login
│   │   ├── ProgressBar.js         # Shows quiz progress
│   │   ├── Quiz.js                # Handles quiz logic, scoring, and results
│   │   ├── QuizComponent.js       # Fetches and renders quiz questions from API
│   ├── data/
│   │   └── quizzes.js             # Contains quiz data (questions, options, correct answers)
│   ├── App.js                     # Main application file
│   ├── index.js                   # Entry point for React
│   ├── App.css                    # Application-wide CSS
│   ├── index.css                  # Additional styling including dark/light theme


Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo/quiz-platform.git
Navigate to the project directory:

bash
Copy code
cd quiz-platform
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open the application in your browser at http://localhost:3000
