import React, { useState, useEffect } from 'react';
import Home from './components/Home';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme === 'light' ? 'light-theme' : '';
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.className = newTheme === 'light' ? 'light-theme' : '';
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <Home onThemeToggle={toggleTheme} theme={theme} />
    </div>
  );
}

export default App;
